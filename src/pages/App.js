import ClayLayout from "@clayui/layout";
import { useContext } from "react";
import Welcome from "../components/onboard/welcome";
import { AppContext } from "../providers/AppContextProvider";

import { steps } from "../utils/constants";

function App() {
  const [{ step }] = useContext(AppContext);

  if (step === steps.welcome) {
    return <Welcome />;
  }

  return (
    <ClayLayout.Container className="mt-5 bg-secondary">
      Testando
    </ClayLayout.Container>
  );
}

export default App;
