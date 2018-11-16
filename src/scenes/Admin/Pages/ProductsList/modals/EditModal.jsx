import React from "react";
import Modal from "react-modal";
import S from "../../../admin-style.module.css";

import FormInput from "../../../../../components/FormInput";
import TextArea from "../../../../../components/TextArea";
import { Form, Field } from "react-final-form";

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Title mast be";
  }
  return errors;
}

const EditModal = ({
  selectedProduct,
  modalStatus,
  onToggleEditModal,
  onSubmitEdit
}) => {
  return (
    <>
      {selectedProduct && (
        <Modal
          isOpen={modalStatus}
          className={S.modalContent}
          onRequestClose={onToggleEditModal}
          overlayClassName={S.modalOverlay}
          appElement={document.getElementById("root")}
        >
          <div className="card ">
            <div className="card-header bg-info text-white">Edit product</div>

            <Form
              validate={validate}
              onSubmit={onSubmitEdit}
              initialValues={selectedProduct}
              render={({ handleSubmit, submitError }) => (
                <>
                  <div className="card-body">
                    {submitError && (
                      <p className="text-danger">{submitError}</p>
                    )}
                    <Field name="title">
                      {({ input, meta }) => (
                        <FormInput {...input} meta={meta} label="Title" />
                      )}
                    </Field>
                    <Field name="description">
                      {({ input, meta }) => (
                        <TextArea {...input} meta={meta} label="Description" />
                      )}
                    </Field>
                    <Field name="image">
                      {({ input, meta }) => (
                        <FormInput {...input} meta={meta} label="Image" />
                      )}
                    </Field>
                    <Field name="price">
                      {({ input, meta }) => (
                        <FormInput {...input} meta={meta} label="Price" />
                      )}
                    </Field>
                  </div>
                  <div className="card-footer text-muted d-flex justify-content-end">
                    <button
                      className="btn btn-outline-default mx-1 "
                      onClick={onToggleEditModal}
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-outline-success mx-1 "
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </>
              )}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditModal;
