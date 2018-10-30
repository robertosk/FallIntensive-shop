import React from "react";
import T from "prop-types";
import { productType } from "../../../common/propTypes";
import ProductListItem from "./ProductListItem";
import EditModal from "./modals/EditModal";
import RemoveModal from "./modals/RemoveModal";

const productsView = ({
  products,
  selectedProduct,
  editModalStatus,
  removeModalStatus,

  onToggleEditModal,
  onToggleRemoveModal,
  handleEditSelected,
  onSubmitEdit,
  onSubmitRemove
}) => {
  return (
    <>
      <h2 className="d-flex w-100 px-4 justify-content-between">
        Product List
        <button
          type="button"
          className="btn btn-outline-success mx-1 px-2"
          onClick={e => onToggleEditModal(e)}
        >
          <i className="mdi mdi-plus  m-0" />
        </button>
      </h2>
      <div className="list-group">
        {products.map((pr, index) => (
          <ProductListItem
            key={pr.id}
            product={pr}
            index={index}
            onToggleEditModal={onToggleEditModal}
            onToggleRemoveModal={onToggleRemoveModal}
          />
        ))}
      </div>

      <EditModal
        modalStatus={editModalStatus}
        selectedProduct={selectedProduct}
        onToggleEditModal={onToggleEditModal}
        handleEditSelected={handleEditSelected}
        onSubmitEdit={onSubmitEdit}
      />
      <RemoveModal
        modalStatus={removeModalStatus}
        selectedProduct={selectedProduct}
        onToggleRemoveModal={onToggleRemoveModal}
        onSubmitRemove={onSubmitRemove}
      />
    </>
  );
};

productsView.propTypes = {
  products: T.arrayOf(T.shape(productType)),
  selectedProduct: T.shape(productType),
  editModalStatus: T.bool,
  removeModalStatus: T.bool,

  onToggleEditModal: T.func,
  onToggleRemoveModal: T.func,
  handleEditSelected: T.func,
  onSubmitEdit: T.func,
  onSubmitRemove: T.func
};
export default productsView;
