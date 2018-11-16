import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { routes } from "../../../../routes";
import FormInput from "../../../../components/FormInput";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import * as Api from "../../../../api/Api";

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
  if (values.confirm !== values.password) {
    errors.confirm = "Passwords do not match";
  }
  if (!values.termsAgree) {
    errors.termsAgree = "You must agree with Terms ";
  }
  return errors;
}
class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regStatus: false,
      redirect: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values, form) {
    try {
      delete values.termsAgree;
      delete values.confirm;
      const res = await Api.Auth.register(values);
      this.setState({
        regStatus: res.data.success,
        redirect: res.data.success
      });
      form.reset();
    } catch (err) {
      return {
        [FORM_ERROR]: "Wrong Email or Password"
      };
    }
    return null;
  }
  render() {
    return (
      <>
        <Form
          validate={validate}
          onSubmit={this.onSubmit}
          render={({ handleSubmit, submitError }) => (
            <>
              {submitError && <p className="text-danger">{submitError}</p>}
              <Field name="firstName">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} label="First Name" />
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} label="Last Name" />
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <FormInput {...input} meta={meta} label="Email" />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormInput
                    {...input}
                    meta={meta}
                    label="Password"
                    type="password"
                  />
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <FormInput
                    {...input}
                    meta={meta}
                    label="Confirm password"
                    type="password"
                  />
                )}
              </Field>
              <div className="form-group d-flex justify-content-center">
                <div className="form-check form-check-flat mt-0">
                  <div className="input-checkbox">
                    <Field name="termsAgree" type="checkbox">
                      {({ input, meta }) => (
                        <>
                          <input type="checkbox" id="terms-agree" {...input} />
                          <label htmlFor="terms-agree">
                            <span />
                            Agree to the terms
                          </label>
                          {meta.error && meta.touched && (
                            <>
                              <br />
                              <span className="text-danger">{meta.error} </span>
                            </>
                          )}
                        </>
                      )}
                    </Field>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button
                  className="btn primary-btn w-100"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </div>
              {this.state.regStatus && (
                <div>
                  <p className="text-success text-center">
                    User was successfully registered!
                  </p>
                </div>
              )}
              <div className="text-block text-center my-3">
                <span className="text-small font-weight-semibold">
                  Already have and account?
                </span>
                <br />
                <Link to={routes.login} className="text-black text-small">
                  Login
                </Link>
              </div>
            </>
          )}
        />
        {this.state.regStatus && <Redirect to={routes.login} />}
      </>
    );
  }
}

export default RegisterContainer;
