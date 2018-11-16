import React from "react";
import { createProduct } from "../../../../utils/creators";
import ProductListItem from "./ProductListItem";
import EditModal from "./modals/EditModal";
import RemoveModal from "./modals/RemoveModal";
import Loading from "../../../../components/Loading";

const productsView = ({
  isLoading,
  products,
  selectedProduct,
  editModalStatus,
  removeModalStatus,
  // orderType,
  // orderBy,
  // searchQuery,

  onToggleEditModal,
  onToggleRemoveModal,

  onSubmitEdit,
  onSubmitRemove
  // doOrderType,
  // doOrderBy,
  // doSearch
}) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h2 className="d-flex w-100 px-4 justify-content-between">
            <span>Product List</span>

            <button
              type="button"
              className="btn btn-outline-success mx-1 px-2"
              onClick={e => onToggleEditModal(e, createProduct())}
            >
              <i className="mdi mdi-plus  m-0" />
            </button>
          </h2>
          {/* <div className="d-flex justify-content-between">
            <input
              className="form-control mr-sm-2 border border-primary"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by {orderType}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={() => doOrderType("asc")}>
                  Ascending
                </a>
                <a
                  className="dropdown-item"
                  onClick={() => doOrderType("desc")}
                >
                  Descending
                </a>
              </div>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by {orderBy}
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={() => doOrderBy("title")}>
                  Title
                </a>
                <a className="dropdown-item" onClick={() => doOrderBy("price")}>
                  Price
                </a>
              </div>
            </div>
          </div> */}
          <div className="list-group">
            {products.length > 0 ? (
              products.map(pr => (
                <ProductListItem
                  key={pr.id}
                  product={pr}
                  onToggleEditModal={onToggleEditModal}
                  onToggleRemoveModal={onToggleRemoveModal}
                />
              ))
            ) : (
              <h5>There is not items in list!</h5>
            )}
          </div>

          <EditModal
            selectedProduct={selectedProduct}
            modalStatus={editModalStatus}
            onToggleEditModal={onToggleEditModal}
            onSubmitEdit={onSubmitEdit}
          />
          <RemoveModal
            selectedProduct={selectedProduct}
            modalStatus={removeModalStatus}
            onToggleRemoveModal={onToggleRemoveModal}
            onSubmitRemove={onSubmitRemove}
          />
        </>
      )}
    </>
  );
};

export default productsView;
