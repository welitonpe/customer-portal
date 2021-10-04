import { actionTypes } from "./actions";

const reducer = (state, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case actionTypes.CHANGE_STEP: {
            return {
                ...state,
                step: action.payload,
            };
        }
        case actionTypes.UPDATE_INVITES: {
            return {
                ...state,
                form: {
                    ...state.form,
                    invites: action.payload
                },
            };
        }
        case actionTypes.UPDATE_ADMINS: {
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
        case actionTypes.UPDATE_ROLE: {
            return {
                ...state,
                form: {
                    ...state.form,
                    role: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;