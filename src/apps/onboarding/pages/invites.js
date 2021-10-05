import { useContext } from "react";
import ClayForm, { ClayInput } from '@clayui/form';
import { getInitialInvite, getRolesList, steps } from "../utils/constants";
import { AppContext } from "../context";
import { changeStep } from "../context/actions";
import { BaseButton, PrimaryButton } from "../../../shared/components/buttons";
import Layout from "./layout";
import { useFormikContext } from "formik";
import Input from "~/shared/components/Input";
import Select from "~/shared/components/Select";
import { isDirtyField, isValidField } from "~/shared/utils/validations.form";

const HorizontalInputs = ({ id }) => {
  return (
    <ClayInput.Group>
      <ClayInput.GroupItem>
        <Input
          className="bg-white rounded-lg border border-1"
          name={`invites[${id}].email`}
          placeholder="username@email.com"
          type="email"
          label="Email"
        />
      </ClayInput.GroupItem>
      <ClayInput.GroupItem>
        <Select
          className="bg-white rounded-lg border border-1"
          name={`invites[${id}].roleId`}
          label="Role"
          options={getRolesList()}
        />
      </ClayInput.GroupItem>
    </ClayInput.Group>
  );
};

const Invites = () => {
  const [, dispatch] = useContext(AppContext);
  const { values, setFieldValue, errors, getFieldMeta } = useFormikContext();

  return (
    <Layout
      footerProps={{
        leftButton: (
          <BaseButton
          >
            Skip for now
          </BaseButton>
        ),
        middleButton: (
          <PrimaryButton
            onClick={() => dispatch(changeStep(steps.dxp))}
            disabled={!(isValidField("invites", errors) && isDirtyField(getFieldMeta("invites")))}
          >
            Send Invitations
          </PrimaryButton>
        ),
      }}
      headerProps={{
        title: "Invite Your Team Members",
        helper:
          "Team members will receive an email invitation to access this project on Customer Portal.",
      }}
    >
      <div className="invites-form px-4 pb-3">
        <ClayForm.Group className="m-0">
          {values.invites.map((invite, index) => (
            <HorizontalInputs id={index} key={index} />
          ))}
        </ClayForm.Group>
        <BaseButton
          disabled={values.invites.length > 5}
          onClick={() => setFieldValue("invites", [...values.invites, getInitialInvite()])}
          preffixIcon="plus"
          styles="text-primary py-2 mt-3"
        >
          Add More Members
        </BaseButton>
      </div>
      <div className="px-4">
        <hr className="mt-0" />
        <div className="text-content">
          Only 3 members per project (including yourself) have role permissions
          (Admins & Requestors) to open Support tickets.
        </div>
      </div>
    </Layout>
  );
};

export default Invites;
