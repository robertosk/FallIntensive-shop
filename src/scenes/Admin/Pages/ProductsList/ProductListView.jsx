import React from "react";
import { createProduct } from "../../../../utils/creators";
import ProductListItem from "./ProductListItem";
import EditModal from "./modals/EditModal";
import RemoveModal from "./modals/RemoveModal";
import Loading from "../../../../components/Loading";
import _ from "lodash";
import { searchProducts } from "../../../../utils/search";

const productsView = ({
  isLoading,
  products,
  selectedProduct,
  editModalStatus,
  removeModalStatus,
  orderType,
  orderBy,
  searchQuery,

  onToggleEditModal,
  onToggleRemoveModal,

  onSubmitEdit,
  onSubmitRemove,
  doOrder,
  doSearch
}) => {
  let productsToView = _.orderBy(products, orderBy, orderType);
  productsToView = searchProducts(productsToView, searchQuery);
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
          <div className="d-flex justify-content-between">
            <div class="input-group border border-primary">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i className="mdi mdi-magnify" />
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="search"
                placeholder="Search"
                value={searchQuery}
                onChange={e => doSearch(e.target.value)}
              />
            </div>

            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Order by {orderBy}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.stopPropagation();
                    doOrder("price", "asc");
                  }}
                >
                  Expensive
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.stopPropagation();
                    doOrder("price", "desc");
                  }}
                >
                  Cheaper
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.stopPropagation();
                    doOrder("title", "asc");
                  }}
                >
                  Name up
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.stopPropagation();
                    doOrder("title", "desc");
                  }}
                >
                  Name down
                </a>
              </div>
            </div>
          </div>
          <div className="list-group">
            {productsToView.length > 0 ? (
              productsToView.map(pr => (
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
