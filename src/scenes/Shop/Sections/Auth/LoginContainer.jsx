import React from "react";
import { Link, Redirect } from "react-router-dom";
import { routes } from "../../../../routes";
import * as appOperations from "../../../../modules/app/appOperations";
import { connect } from "react-redux";

import FormInput from "../../../../components/FormInput";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";

function validate(values) {
  const errors = {};
  if (
    !values.email ||
    values.email.trim().length < 0 ||
    !values.email.includes("@")
  ) {
    errors.email = "Enter valid email!";
  }
  if (!values.password || values.password.trim().length < 8) {
    errors.password = "Password should be 8 symbols length";
  }
  return errors;
}

const LoginContainer = ({ logIn, isLogged }) => {
  async function onSubmit(values, form) {
    try {
      logIn(values);
      form.reset();
    } catch (err) {
      return {
        [FORM_ERROR]: "Wrong Email or Password"
      };
    }
    return null;
  }
  const handleKeyPress = (e, handleSubmit) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <Form
        validate={validate}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError }) => (
          <>
            {submitError && <p className="text-danger">{submitError}</p>}
            <Field name="email">
              {({ input, meta }) => (
                <FormInput
                  {...input}
                  meta={meta}
                  label="Email"
                  type="text"
                  onKeyDown={e => handleKeyPress(e, handleSubmit)}
                />
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <FormInput
                  {...input}
                  meta={meta}
                  label="Password"
                  type="password"
                  onKeyDown={e => handleKeyPress(e, handleSubmit)}
                />
              )}
            </Field>
            <div className="form-group">
              <button className="btn primary-btn w-100" onClick={handleSubmit}>
                Login
              </button>
            </div>
            <div className="form-group d-flex justify-content-between">
              <div className="form-check form-check-flat mt-0">
                <div className="input-checkbox">
                  <input type="checkbox" id="keep-signed-in" />
                  <label htmlFor="keep-signed-in">
                    <span />
                    Keep me signed in
                  </label>
                </div>
              </div>
              <Link
                to={routes.remember}
                className="text-small forgot-password text-black"
              >
                Forgot Password
              </Link>
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
      {isLogged && <Redirect to={routes.home} />}
    </>
  );
};
const mapStateToProps = state => ({
  isLogged: state.app.loggedIn
});
const mapStateToDispatch = {
  logIn: appOperations.logIn
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(LoginContainer);
