const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const required = (value) => {
  if (!value) {
    return "this-field-is-required";
  }
};

const maxLength = (value, max) => {
  if (value.length > max) {
    return `this-field-exceeded-${max}-characters`;
  }
};

const isEmail = (value) =>
  EMAIL_REGEX.test(value) ? undefined : "Please Insert a valid email";

const validate = (fields, values) => {
  const errors = {};

  Object.entries(fields).forEach(([inputName, validations]) => {
    if (inputName === "projectId") {
    }

    validations.forEach((validation) => {
      const error = validation(values[inputName]);

      if (error) {
        errors[inputName] = error;
      }

      return error;
    });
  });

  return errors;
};

export { isEmail, maxLength, required, validate };
