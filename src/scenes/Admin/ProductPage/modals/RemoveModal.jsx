import React from "react";
import Modal from "react-modal";
import S from "../../admin-style.module.css";

const RemoveModal = ({
  selectedProduct,
  modalStatus,
  onToggleRemoveModal,
  onSubmitRemove
}) => {
  return (
    <Modal
      isOpen={modalStatus}
      className={S.modalContent}
      onRequestClose={onToggleRemoveModal}
      overlayClassName={S.modalOverlay}
      appElement={document.getElementById("root")}
    >
      <div className="card">
        <div className="card-header bg-danger text-white">Remove product</div>
        <div className="card-body">
          <p>
            You are going to remove {selectedProduct.title} product!
            <br />
            To confirm press "Remove"!
          </p>
        </div>
        <div className="card-footer text-muted d-flex justify-content-end">
          <button
            className="btn btn-outline-default mx-1 "
            onClick={onToggleRemoveModal}
          >
            Close
          </button>
          <button
            className="btn btn-outline-danger mx-1 "
            onClick={() => onSubmitRemove(selectedProduct)}
          >
            Remove
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveModal;
