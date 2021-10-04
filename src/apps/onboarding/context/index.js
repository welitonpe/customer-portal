import { createContext, useReducer } from "react";
import FormProvider from "~/shared/providers/FormProvider";
import { email, required, validate } from "~/shared/utils/validations.form";
import { getInitialInvite, getInitialDxpAdmin, roles, steps } from "../utils/constants";
import reducer from "./reducer";

const initialApp = {
  step: steps.welcome,
  dxp: {
    organization: "",
    version: ""
  },
};

const initialForm = {
  role: roles.admin,
  invites: [
    getInitialInvite(roles.creator.id),
    getInitialInvite(roles.watcher.id),
    getInitialInvite(roles.watcher.id)
  ],
  admins: [
    getInitialDxpAdmin()
  ],
  dxp: {
    projectId: "",
    dataCenterRegion: "",
  }
};

const onValidateForm = (values) => {
  const error = {};

  error.role = validate(
    {
      role: [required],
    },
    values
  );

  error.invites = values.invites.map((invite) =>
    validate(
      {
        email: [required, (value) => email(value)],
        roleId: [required],
      },
      invite
    )
  );

  error.dxp = validate(
    {
      projectId: [required],
      dataCenterRegion: [required]
    },
    values.dxp
  );

  error.admins = values.admins.map((admin) =>
    validate(
      {
        email: [required, email],
        firstName: [required],
        lastName: [required],
        github: [required],
      },
      admin
    )
  );

  return error;
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialApp);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <FormProvider initialValues={initialForm} validate={onValidateForm}>
        {children}
      </FormProvider>
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
