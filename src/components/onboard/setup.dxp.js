import ClayForm, { ClayInput, ClaySelect } from "@clayui/form";
import { roles } from "../../utils/constants";
import PrimaryButton from "../shared/components/buttons/primaryButton";
import Layout from "../shared/layout";
import BaseButton from "../shared/components/buttons/baseButton";
import { useContext, useState } from "react";
import { AppContext } from "../../providers/AppContextProvider";
import { initialDxpAdmin } from "../../utils";
import { useFormik } from "formik";
import { WarningBadge } from "../shared/components/buttons/badges/warningBadge";
import {
  isEmail,
  validate,
  maxLength,
  required,
} from "../../utils/form.validate";

const HorizontalInputs = ({ id, errors, onChange, touched }) => {
  return (
    <>
      <hr />
      <div className="dxp-form">
        <label htmlFor="adminEmail">System Admin’s Email Address</label>
        <ClayInput
          className="bg-white rounded-lg border border-1"
          id={`email`}
          name={`setUpDxp.admins[${id}].email`}
          onChange={onChange}
          placeholder="username@superbank.com"
          type="email"
        />

        {touched?.touched?.email
          ? errors?.email && <WarningBadge>{errors?.email}</WarningBadge>
          : ""}
      </div>
      <ClayInput.Group>
        <ClayInput.GroupItem>
          <label htmlFor="adminFirstName">System Admin’s First Name</label>
          <ClayInput
            className="bg-white rounded-lg border border-1"
            id={`firstName`}
            name={`setUpDxp.admins[${id}].firstName`}
            onChange={onChange}
            type="text"
          />
          {touched?.touched?.firstName && errors?.firstName && (
            <WarningBadge>{errors?.firstName}</WarningBadge>
          )}
        </ClayInput.GroupItem>
        <ClayInput.GroupItem>
          <label htmlFor="adminLastName">System Admin’s Last Name</label>
          <ClayInput
            className="bg-white rounded-lg border border-1"
            id={`lastName`}
            name={`setUpDxp.admins[${id}].lastName`}
            onChange={onChange}
            type="text"
          />
          {touched?.touched?.lastName && errors?.lastName && (
            <WarningBadge>{errors?.lastName}</WarningBadge>
          )}
        </ClayInput.GroupItem>
      </ClayInput.Group>
      <label htmlFor="adminGithub">System Admin’s Github Username</label>
      <ClayInput
        className="bg-white rounded-lg border border-1"
        id={`github`}
        name={`setUpDxp.admins[${id}].github`}
        onChange={onChange}
        placeholder="username@github.com"
        type="text"
      />
      {touched?.touched?.github && errors?.github && (
        <WarningBadge>{errors?.github}</WarningBadge>
      )}
    </>
  );
};

const SetupDXP = () => {
  const [state, dispatch] = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);

  const getInitialErrors = () => {};

  const onValidate = (values) => {
    let errorList = {};

    errorList = {
      ...validate(
        {
          projectId: [(v) => maxLength(v, 100), required],
        },
        values?.setUpDxp
      ),
    };

    const adminsErrors = values?.setUpDxp?.admins.map((admins) =>
      validate(
        {
          email: [(v) => maxLength(v, 100), required, isEmail],
          firstName: [(v) => maxLength(v, 100), required],
          github: [(v) => maxLength(v, 100), required, isEmail],
          lastName: [(v) => maxLength(v, 100), required],
        },
        admins
      )
    );

    const withAdminsError = adminsErrors.some(
      (admins) =>
        admins?.email || admins?.firstName || admins?.github || admins?.lastName
    );

    if (withAdminsError) {
      errorList.admins = adminsErrors;
    }

    return errorList;
  };

  const addInitialInvite = () => {
    setIsClicked(true);

    setFieldValue("setUpDxp.admins", [
      ...values.setUpDxp.admins,
      initialDxpAdmin(),
    ]);
  };

  const {
    dirty,
    errors,
    handleChange: _handleChange,
    setFieldValue,
    setTouched,
    touched,
    values,
  } = useFormik({
    initialErrors: getInitialErrors(),
    validate: onValidate,
    validateOnBlur: true,
    validateOnMount: true,
    initialValues: {
      setUpDxp: {
        projectId: "",
        dataCenterRegion: 0,
        admins: [initialDxpAdmin()],
      },
    },
  });

  function errosIsEmpty(error) {
    for (var prop in error) {
      if (Object.prototype.hasOwnProperty.call(error, prop)) {
        return false;
      }
    }
    return JSON.stringify(error) === JSON.stringify({});
  }

  const handleChange = (event) => {
    const newTouched = { ...touched };

    newTouched[event.target.id] = true;

    setTouched(newTouched);

    _handleChange(event);
  };

  return (
    <Layout
      footerProps={{
        leftButton: (
          <BaseButton
            onClick={() => console.log("Skipped")}
            text={"Skip for now"}
          />
        ),
        middleButton: (
          <PrimaryButton
            onClick={() => console.log("Lambda, Labda!")}
            text={"Submit"}
            disabled={!errosIsEmpty(errors)}
          />
        ),
      }}
      headerProps={{
        title: "Set up DXP Cloud",
        subtitle:
          "We’ll need a few details to finish building your DXP environment(s).",
      }}
    >
      <div className="px-4 h-100">
        <div className="d-flex justify-content-between dxp">
          <div>
            <div className="title-dxp mb-1">Organization Name</div>
            <div className="content-dxp">{state.dxp.organization}</div>
          </div>
          <div className="dxp-version">
            <div className="title-dxp mb-1">Liferay DXP Version</div>
            <div className="content-dxp">{state.dxp.version}</div>
          </div>
        </div>
        <div className="content-dxp-group">
          <ClayForm.Group className="m-0 ">
            <div className="dxp-form">
              <label htmlFor="projectId">Project ID</label>
              <ClayInput
                className="bg-white rounded-lg border border-1"
                id="projectId"
                name="setUpDxp.projectId"
                onChange={handleChange}
                placeholder="superbank1"
                type="text"
              />

              {touched?.projectId && errors?.projectId ? (
                <WarningBadge>{errors?.projectId}</WarningBadge>
              ) : (
                <div className="text-content ml-3 mt-1">
                  Lowercase letters and numbers only. Project IDs cannot be
                  changed.
                </div>
              )}
            </div>
            <div className="dxp-form">
              <label htmlFor="dataCenterRegion">
                Primary Data Center Region
              </label>
              <ClaySelect
                aria-label="Select Region"
                className="bg-white rounded-lg border border-1"
                id="dataCenterRegion"
                name="setUpDxp.dataCenterRegion"
                onChange={handleChange}
              >
                {roles.map((item) => (
                  <ClaySelect.Option
                    key={item.id}
                    label={item.name}
                    value={item.id}
                  />
                ))}
              </ClaySelect>
              {errors?.dataCenterRegion && (
                <WarningBadge>{errors?.dataCenterRegion}</WarningBadge>
              )}
            </div>
            {values.setUpDxp.admins.map((admin, index) => (
              <HorizontalInputs
                admin={admin}
                errors={dirty ? errors.admins?.[index] : null}
                id={index}
                key={index}
                onChange={handleChange}
                touched={{ touched }}
              />
            ))}
          </ClayForm.Group>
        </div>
        <BaseButton
          onClick={() => addInitialInvite()}
          preffixIcon="plus"
          styles="text-primary py-2 my-3"
          text="Add Another Admin"
        />
      </div>
    </Layout>
  );
};

export default SetupDXP;
