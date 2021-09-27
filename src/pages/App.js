import { useContext } from "react";
import Invites from "../components/onboard/invites";
import Roles from "../components/onboard/roles";
import SetupDXP from "../components/onboard/setup.dxp";
import Welcome from "../components/onboard/welcome";
import { AppContext } from "../providers/AppContextProvider";

import { steps } from "../utils/constants";

function App() {
  const [{ step }] = useContext(AppContext);

  switch (step) {
    case steps.welcome: {
      return <Welcome />;
    }
    case steps.roles: {
      return <Roles />;
    }
    case steps.invites: {
      return <Invites />;
    }
    case steps.dxp: {
      return <SetupDXP />;
    }
    default: {
      return <Welcome />;
    }
  }
}

export default App;
