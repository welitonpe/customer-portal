export const ActionTypes = {
    CHANGE_STEP: "CHANGE_STEP",
    UPDATE_ROLE: "UPDATE_ROLE",
    UPDATE_INVITES: "UPDATE_INVITES",
    UPDATE_ADMINS: "UPDATE_ADMINS",
};

export const changeStep = (payload) => {
    return {
        payload,
        type: ActionTypes.CHANGE_STEP,
    };
};