import { createContext, useReducer } from "react";
import { initialDxpAdmin, initialInvite } from "../utils";
import { rolesId, steps } from "../utils/constants";

const AppContext = createContext();

export const AppActions = {
  CHANGE_STEP: "CHANGE_STEP",
  UPDATE_INVITES: "UPDATE_INVITES",
  UPDATE_ADMINS: "UPDATE_ADMINS"
};

export const changeStep = (payload) => {
  return {
    payload,
    type: AppActions.CHANGE_STEP,
  };
};

const initialState = {
  step: steps.welcome,
  form: {
    roleId: 0,
    invites: [
      initialInvite(rolesId.creator),
      initialInvite(rolesId.watcher),
      initialInvite(rolesId.watcher)
    ],
    setUpDxp: {
      projectId: "",
      dataCenterRegion: 0,
      admins: [
        initialDxpAdmin()
      ]
    },
  },
  dxp: {
    organization: "SuperBank",
    version: "7.3",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AppActions.CHANGE_STEP: {
      return {
        ...state,
        step: action.payload,
      };
    }
    case AppActions.UPDATE_INVITES: {
      return {
        ...state,
        form: {
          ...state.form,
          invites: action.payload
        },
      };
    }
    case AppActions.UPDATE_ADMINS: {
      return {
        ...state,
        form: {
          ...state.form,
          setUpDxp: {
            ...state.form.setUpDxp,
            admins: action.payload
          }
        },
      };
    }
    default: {
      return state;
    }
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };

export default AppContextProvider;
