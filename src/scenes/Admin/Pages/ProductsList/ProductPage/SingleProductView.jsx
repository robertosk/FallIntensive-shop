import React from "react";

import { Link, Redirect } from "react-router-dom";
import { routes } from "../../../../../routes";
import FormInput from "../../../../../components/FormInput";
import TextArea from "../../../../../components/TextArea";
import { Form, Field } from "react-final-form";

const SingleProductView = ({ product, redirect, onSubmit }) => {
  return (
    <>
      {product && (
        <>
          <div className="container single-product">
            <div className="row">
              <div className="col-lg-5 ">
                <div className="product-image">
                  <img src={product.image} alt="" />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="product-description">
                  <div className="card">
                    <div className="card-body d-flex flex-column pb-0">
                      <h4 className="card-title">Edit product</h4>
                      <Form
                        onSubmit={onSubmit}
                        initialValues={product}
                        render={({ handleSubmit }) => (
                          <>
                            <Field name="title">
                              {({ input, meta }) => (
                                <FormInput
                                  {...input}
                                  meta={meta}
                                  label="Title"
                                />
                              )}
                            </Field>
                            <Field name="description">
                              {({ input, meta }) => (
                                <TextArea
                                  {...input}
                                  meta={meta}
                                  label="Description"
                                />
                              )}
                            </Field>
                            <Field name="image">
                              {({ input, meta }) => (
                                <FormInput
                                  {...input}
                                  meta={meta}
                                  label="Image"
                                />
                              )}
                            </Field>
                            <Field name="price">
                              {({ input, meta }) => (
                                <FormInput
                                  {...input}
                                  meta={meta}
                                  label="Price"
                                />
                              )}
                            </Field>
                            <div className="d-flex justify-content-end mt-auto">
                              <Link
                                to={routes.adminProductList}
                                className="btn btn-light mx-2"
                              >
                                Cancel
                              </Link>
                              <button
                                type="submit"
                                className="btn btn-outline-success mx-2"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {redirect && <Redirect to={routes.adminProductList} />}
        </>
      )}
    </>
  );
};

export default SingleProductView;
