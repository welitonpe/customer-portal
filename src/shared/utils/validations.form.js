const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const required = (value) => {
    if (!value) {
        return "This field is required.";
    }
};

const maxLength = (value, max) => {
    if (value.length > max) {
        return `This field exceeded ${max} characters.`;
    }
};

const email = (value) => {
    if (!EMAIL_REGEX.test(value)) {
        return "Please insert a valid email.";
    }
}

const isValidField = (key, errors) => {
    if (errors[key] && Object.keys(errors[key]).length) {
        return Object.keys(errors[key]).map((k) => {
            if (typeof errors[key][k] !== "string") {
                return isValidField(k, errors[key]);
            } else {
                return false;
            }
        }).every((valid) => valid);
    }

    return true;
}

const isDirtyField = (meta) => {
    if (Object.keys(meta.initialValue).length) {
        return Object.keys(meta.initialValue).map((key) => meta.initialValue[key] === meta.value[key]).some((sameInitial) => !sameInitial);
    } else {
        return meta.initialValue !== meta.value;
    }
};

const validate = (fields, values) => {
    const errors = {};

    Object.entries(fields).forEach(([key, validations]) => {
        validations.forEach((validation) => {
            const error = validation(values[key]);

            if (error) {
                errors[key] = error;
            }
        });
    });

    return errors;
};

export { required, maxLength, email, validate, isValidField, isDirtyField }