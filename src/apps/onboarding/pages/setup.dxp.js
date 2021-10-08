import ClayForm, { ClayInput } from '@clayui/form';
import { useFormikContext } from 'formik';
import { useContext } from "react";
import Input from '~/shared/components/Input';
import Select from '~/shared/components/Select';
import { isDirtyField, isValidField } from '~/shared/utils/validations.form';
import { BaseButton, PrimaryButton } from '../../../shared/components/buttons';
import { AppContext } from '../context'
import { getInitialDxpAdmin, getRolesList } from '../utils/constants';
import Layout from './layout';

const AdminInputs = ({ id }) => {
  return (
    <>
      <hr />
      <div className="dxp-form">
        <Input label="System Admin’s Email Address" name={`admins[${id}].email`} className="bg-white rounded-lg border border-1" placeholder="username@superbank.com" type="email" />
      </div>
      <ClayInput.Group className="dxp-group">
        <ClayInput.GroupItem>
          <Input label="System Admin’s First Name" name={`admins[${id}].firstName`} className="bg-white rounded-lg border border-1" type="text" />
        </ClayInput.GroupItem>
        <ClayInput.GroupItem>
          <Input label="System Admin’s Last Name" name={`admins[${id}].lastName`} className="bg-white rounded-lg border border-1" type="text" />
        </ClayInput.GroupItem>
      </ClayInput.Group>
      <Input label="System Admin’s Github Username" name={`admins[${id}].github`} className="bg-white rounded-lg border border-1" type="text" />
    </>
  );
}

const SetupDXP = () => {
  const [state] = useContext(AppContext);
  const { values, setFieldValue, errors, getFieldMeta } = useFormikContext();

  const metaAdmins = getFieldMeta("admins");
  const metaDxp = getFieldMeta("dxp");

  return (
    <Layout
      footerProps={{
        leftButton: (
          <BaseButton
            onClick={() => console.log("Skipped")}
          >
            Skip for now
          </BaseButton>
        ),
        middleButton: (
          <PrimaryButton
            onClick={() => console.log("Send it!")}
            disabled={!(isValidField("admins", errors) && isDirtyField(metaAdmins.initialValue, metaAdmins.value) && isValidField("dxp", errors) && isDirtyField(metaDxp.initialValue, metaDxp.value))}
          >
            Submit
          </PrimaryButton>
        ),
      }}
      headerProps={{
        title: "Set up DXP Cloud",
        helper:
          "We’ll need a few details to finish building your DXP environment(s).",
      }}
    >
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
        <ClayForm.Group className="m-0">
          <div className="dxp-form">
            <Input label="Project ID" helper="Lowercase letters and numbers only. Project IDs cannot be change." name="dxp.projectId" className="bg-white rounded-lg border border-1" placeholder="superbank1" type="text" />
          </div>
          <div className="dxp-form">
            <Select
              className="bg-white rounded-lg border border-1"
              name="dxp.dataCenterRegion"
              label="Primary Data Center Region"
              options={getRolesList()}
            />
          </div>
          {values.admins.map((admin, index) => (
            <AdminInputs id={index} key={index} />
          ))}
        </ClayForm.Group>
      </div>
      <BaseButton
        onClick={() => setFieldValue("admins", [...values.admins, getInitialDxpAdmin()])}
        preffixIcon="plus"
        styles="text-primary py-2 my-3 dxp-add-admin"
      >
        Add Another Admin
      </BaseButton>
    </Layout>
  );
};

export default SetupDXP;
