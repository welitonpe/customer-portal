import Welcome from "./welcome";
import Invites from "./invites";
import SetupDXP from "./setup.dxp";
import { useContext } from "react";
import { AppContext } from "../context";
import { steps } from "../utils/constants";
import Roles from "./roles";

const Pages = () => {
    const [{ step }] = useContext(AppContext);

    switch (step) {
        case steps.invites: {
            return <Invites />;
        }
        case steps.roles: {
            return <Roles />;
        }
        case steps.dxp: {
            return <SetupDXP />
        }
        default: {
            return <Welcome />;
        }
    }
};

export default Pages;