import { useContext } from "react";
import { AppContext } from "../context";
import { getRolesList, steps } from "../utils/constants";
import { PrimaryButton } from "~/shared/components/buttons";
import Layout from "./layout";
import { changeStep } from "../context/actions";
import SquareRadioGroup from "~/shared/components/radios/SquareRadioGroup";
import { useFormikContext } from "formik"; import { isValidField } from "~/shared/utils/validations.form";
;

const Tip = ({ description, responsibles }) => {
  return (
    <div className="mb-2">
      <p className="mb-5">
        {description}
      </p>
      <p className="font-weight-bold mb-2">You’re responsible for:</p>
      <ul>
        {responsibles.map((responsible, index) => <li key={index}>{responsible}</li>)}
      </ul>
    </div>
  );
}

const Roles = () => {
  const [, dispatch] = useContext(AppContext);
  const { values, setFieldValue, errors } = useFormikContext();

  return (
    <Layout
      footerProps={{
        middleButton: (
          <PrimaryButton
            onClick={() => dispatch(changeStep(steps.invites))}
            disabled={!(isValidField("role", errors))}
          >
            Next
          </PrimaryButton>
        ),
      }}
      headerProps={{
        greetings: "Hello Sarah,",
        title: "What’s your role on this project?",
      }}
      centered
    >
      <div className="d-flex px-4">
        <SquareRadioGroup
          items={getRolesList()}
          name="role"
          onChange={(role) => setFieldValue("role", role)}
          checked={values.role}
          className="pr-1 mr-5 radio-roles"
        />
        <Tip {...values.role} />
      </div>
    </Layout>
  );
};

export default Roles;
