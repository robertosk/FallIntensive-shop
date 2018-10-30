import React from "react";
import Modal from "react-modal";
import S from "../../admin-style.module.css";
import T from "prop-types";
import { productType } from "../../../../common/propTypes";

const EditModal = ({
  selectedProduct,
  modalStatus,
  onToggleEditModal,
  handleEditSelected,
  onSubmitEdit
}) => {
  return (
    <Modal
      isOpen={modalStatus}
      className={S.modalContent}
      onRequestClose={onToggleEditModal}
      overlayClassName={S.modalOverlay}
      appElement={document.getElementById("root")}
    >
      <div className="card ">
        <div className="card-header bg-info text-white">Edit product</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="productTitle">Product title</label>
              <input
                type="text"
                className="form-control"
                id="productTitle"
                name="title"
                value={selectedProduct.title}
                onChange={e =>
                  handleEditSelected(e.target.name, e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Product description</label>
              <textarea
                className="form-control"
                id="productDescription"
                name="description"
                value={selectedProduct.description}
                onChange={e =>
                  handleEditSelected(e.target.name, e.target.value)
                }
                rows="3"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productImage">Product image</label>
              <input
                type="text"
                className="form-control"
                id="productImage"
                name="image"
                value={selectedProduct.image}
                onChange={e =>
                  handleEditSelected(e.target.name, e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Product price</label>
              <input
                type="text"
                className="form-control"
                id="productTitle"
                name="price"
                value={selectedProduct.price}
                onChange={e =>
                  handleEditSelected(e.target.name, e.target.value)
                }
              />
            </div>
          </form>
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
            onClick={onSubmitEdit}
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

EditModal.propTypes = {
  product: T.shape(productType),
  modalStatus: T.bool,
  toggleEditModal: T.func
};

export default EditModal;
