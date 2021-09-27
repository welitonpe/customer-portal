import { useState, useContext } from "react";
import Layout from "../shared/layout";
import { AppContext } from "../../providers/AppContextProvider";
import PrimaryButton from "../shared/components/buttons/primaryButton";
import { steps } from "../../utils/constants";
import { AppActions } from "../../providers/AppContextProvider";
import RadioButtons from "../shared/components/radio/radioButtons";
import { roles, rolesId } from "../../utils/constants";

const Roles = () => {
  const [, dispatch] = useContext(AppContext);
  const [role, setRole] = useState(1);

  const tipRole = () => {
    if (role === rolesId.admin) {
      return (
        <div className="d-flex flex-column  w-100 align-items-stretch flex-shrink-2 align-self-start">
          <p className="text-dark mb-5 ">
            Administrator Description text about this role goes here.
          </p>
          <p className="fw-bolder font-weight-bold">You’re responsible for:</p>
          <ul>
            <li>Managin Users & Roles</li>
            <li>Configuring the Plataform</li>
            <li>Setting up sites</li>
          </ul>
        </div>
      );
    }

    if (role === rolesId.creator) {
      return (
        <div className="d-flex flex-column w-100 align-items-stretch flex-shrink-2 align-self-start">
          <p className="text-dark mb-5 ">
            TicketCreator Description text about this role goes here.
          </p>
          <p className="fw-bolder font-weight-bold">You’re responsible for:</p>
          <ul>
            <li>Managin Users & Roles</li>
            <li>Configuring the Plataform</li>
            <li>Setting up sites</li>
          </ul>
        </div>
      );
    }
    if (role === rolesId.watcher) {
      return (
        <div className="d-flex flex-column  w-100 align-items-stretch flex-shrink-2 align-self-start">
          <p className="text-dark mb-5 ">
            TicketWatcher Description text about this role goes here.
          </p>
          <p className="fw-bolder font-weight-bold">You’re responsible for:</p>
          <ul>
            <li>Managin Users & Roles</li>
            <li>Configuring the Plataform</li>
            <li>Setting up sites</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <Layout
      footerProps={{
        middleButton: (
          <PrimaryButton
            text={"Next"}
            onClick={() => {
              dispatch({
                type: AppActions.CHANGE_STEP,
                payload: steps.invites,
              });
            }}
            disabled={false}
          />
        ),
      }}
      headerProps={{
        intro: "Hello Sarah,",
        title: "What’s your role on this projetc?",
        subtitle: "",
      }}
    >
      <div className="align-items-center d-flex flex-row justify-content-between mt-8 mb-7  px-4">
        <div className="flex-shrink-0 mr-5">
          <RadioButtons
            items={roles}
            onClick={(item) => {
              dispatch({
                type: AppActions.UPDATE_ROLE,
                roleId: item.id,
              });
              setRole(item.id);
            }}
            selected={role}
          />
        </div>
        {tipRole()}
      </div>
    </Layout>
  );
};

export default Roles;
