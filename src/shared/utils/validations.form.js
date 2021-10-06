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
    if (value.length > 0 && !EMAIL_REGEX.test(value)) {
        return "Please insert a valid email.";
    }
}

const isValidField = (key, errors) => {
    if (errors[key] && Object.keys(errors[key]).length) {
        return Object.keys(errors[key]).map((k) => {
            if (typeof errors[key][k] === "object") {
                return isValidField(k, errors[key]);
            } else {
                return false;
            }
        }).every((valid) => valid);
    }

    return true;
}

const isDirtyField = (initialValue, value) => {
    if (Object.keys(initialValue).length) {
        return Object.keys(initialValue).map((key) => {
            if (typeof initialValue[key] === "object") {
                return isDirtyField(initialValue[key], value[key]);
            } else {
                return initialValue[key] === value[key];
            }
        }).some((sameInitial) => !sameInitial);
    } else {
        return initialValue !== value;
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