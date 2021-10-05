import { useContext } from "react";
import { AppContext } from "../context";
import { getRolesList, steps } from "../utils/constants";
import { PrimaryButton } from "~/shared/components/buttons";
import Layout from "./layout";
import { changeStep } from "../context/actions";
import SquareRadioGroup from "~/shared/components/radios/SquareRadioGroup";
import { useFormikContext } from "formik";import { isValidField } from "~/shared/utils/validations.form";
;

const Tip = ({ description, responsibles }) => {
  return (
    <div className="d-flex flex-column  w-100 align-items-stretch flex-shrink-2 align-self-start">
      <p className="text-dark mb-5 ">
        {description}
      </p>
      <p className="fw-bolder font-weight-bold">You’re responsible for:</p>
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
    >
      <div className="align-items-center d-flex flex-row justify-content-between mt-8 mb-7 px-4">
        <div className="flex-shrink-0 mr-5">
          <SquareRadioGroup
            items={getRolesList()}
            name="role"
            onChange={(role) => setFieldValue("role", role)}
            checked={values.role}
          />
        </div>
        <Tip {...values.role} />
      </div>
    </Layout>
  );
};

export default Roles;
