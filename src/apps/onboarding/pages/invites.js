import { useContext, useState } from "react";
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { roles, rolesId, steps } from "../utils/constants";
import { AppContext } from "../context";
import { changeStep } from "../context/actions";
import { initialInvite } from "../utils";
import { BaseButton, PrimaryButton } from "../../../shared/components/buttons";
import Layout from "./layout";
import { useFormik } from "formik";
import { WarningBadge } from "../shared/components/buttons/badges/warningBadge";
import { isEmail, maxLength, validate } from "../../utils/form.validate";

const HorizontalInputs = ({ error, id, invite, onChange }) => {
  return (
    <ClayInput.Group>
      <ClayInput.GroupItem>
        <label htmlFor={`inviteEmail-${id}`}>Email </label>
        <ClayInput
          className="bg-white rounded-lg border border-1"
          id={`inviteEmail-${id}`}
          name={`invites[${id}].email`}
          onChange={onChange}
          placeholder="username@superbank.com"
          type="email"
          value={invite.email}
        />
        {error?.email && <WarningBadge>{error?.email}</WarningBadge>}
      </ClayInput.GroupItem>
      <ClayInput.GroupItem>
        <label htmlFor={`inviteRole-${id}`}>Role</label>
        <ClaySelect
          aria-label="Select Role"
          className="bg-white rounded-lg border border-1"
          defaultValue={invite.roleId}
          id={`inviteRole-${id}`}
          name={`invites[${id}].roleId`}
          onChange={onChange}
        >
          {roles.map((item) => (
            <ClaySelect.Option
              key={item.id}
              label={item.name}
              value={item.id}
            />
          ))}
        </ClaySelect>
      </ClayInput.GroupItem>
    </ClayInput.Group>
  );
};

const Invites = () => {
  const [dispatch] = useContext(AppContext);
  const [isClicked, setIsClicked] = useState(false);

  const getInitialErrors = () => {};

  const onValidate = (values) => {
    let errorList = {};

    const invitesErrors = values?.invites.map((invite) =>
      validate(
        {
          email: [(v) => maxLength(v, 100), isEmail],
        },
        invite
      )
    );

    const invitesError = invitesErrors.some((invite) => invite?.email);

    if (invitesError) {
      errorList.invites = invitesErrors;
    }

    return errorList;
  };

  const { errors, handleChange, setFieldValue, values } = useFormik({
    initialErrors: getInitialErrors(),
    validate: onValidate,
    initialValues: {
      invites: [
        initialInvite(rolesId.admin),
        initialInvite(rolesId.creator),
        initialInvite(rolesId.watcher),
      ],
    },
  });

  const addInitialInvite = () => {
    setIsClicked(true);

    setFieldValue("invites", [
      ...values.invites,
      { email: "", roleId: rolesId.watcher },
    ]);
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
            onClick={() => dispatch(changeStep(steps.dxp))}
            text={"Send Invitations"}
            disabled={false}
          />
        ),
      }}
      headerProps={{
        title: "Invite Your Team Members",
        subtitle:
          "Team members will receive an email invitation to access this project on Customer Portal.",
      }}
    >
      <div className="invites-form px-4 pb-3">
        <ClayForm.Group className="m-0">
          {values.invites.map((invite, index) => (
            <HorizontalInputs
              error={invite.email !== "" && errors.invites?.[index]}
              id={index}
              invite={invite}
              key={index}
              onChange={handleChange}
            />
          ))}
        </ClayForm.Group>
        <BaseButton
          disabled={values.invites.length > 5}
          onClick={() => addInitialInvite()}
          preffixIcon="plus"
          styles="text-primary py-2 mt-3"
          text="Add More Members"
        />
      </div>
      <div className={`px-4 ${isClicked ? "bottom-content" : ""}`}>
        <hr className={`mt-0 ${isClicked ? "invisible" : ""}`} />
        <div className="text-content">
          Only 3 members per project (including yourself) have role permissions
          (Admins & Requestors) to open Support tickets.
        </div>
      </div>
    </Layout>
  );
};

export default Invites;
