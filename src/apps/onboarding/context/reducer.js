import { ActionTypes } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_STEP: {
            return {
                ...state,
                step: action.payload,
            };
        }
        case ActionTypes.UPDATE_INVITES: {
            return {
                ...state,
                form: {
                    ...state.form,
                    invites: action.payload
                },
            };
        }
        case ActionTypes.UPDATE_ADMINS: {
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
        case ActionTypes.UPDATE_ROLE: {
            return {
                ...state,
                form: {
                    ...state.form,
                    roleId: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;