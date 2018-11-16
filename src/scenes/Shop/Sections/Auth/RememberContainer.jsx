import React from "react";
import FormInput from "../../../../components/FormInput";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";

function validate(values) {
  const errors = {};
  if (
    !values.email ||
    values.email.trim().length < 0 ||
    !values.email.includes("@")
  ) {
    errors.email = "Enter valid email!";
  }
  return errors;
}

const RememberContainer = () => {
  let email = null;
  function onSubmit(values, form) {
    try {
      email = values.email;
      form.reset();
    } catch (err) {
      return {
        [FORM_ERROR]: "Wrong Email or Password"
      };
    }
    return null;
  }
  return (
    <>
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError }) => (
          <>
            {submitError && <p className="text-danger">{submitError}</p>}
            {!!email && <p>Request email was sent to {email}</p>}
            <Field name="email">
              {({ input, meta }) => (
                <FormInput {...input} meta={meta} label="Email" />
              )}
            </Field>
            <div className="form-group">
              <button className="btn primary-btn w-100" onClick={handleSubmit}>
                Remember me
              </button>
            </div>
            <div className="text-block text-center my-3">
              <span className="text-small font-weight-semibold">
                Not a member ?
              </span>
              <Link to={routes.register} className="text-black text-small">
                Create new account
              </Link>
            </div>
          </>
        )}
      />
    </>
  );
};

export default RememberContainer;
