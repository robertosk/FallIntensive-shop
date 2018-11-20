import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";
import { productType } from "../../../../common/propTypes";
import { routes } from "../../../../routes";
import { formatRoute } from "react-router-named-routes";

const ProductListItem = ({
  product,
  onToggleEditModal,
  onToggleRemoveModal
}) => {
  return (
    <Link
      to={formatRoute(routes.adminProduct, { id: product.id })}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="row ticket-card py-2 ">
        <div className="col-md-1">
          <img
            className="img-sm  mb-4 mb-md-0"
            src={product.image ? product.image : "./assets/phone_clipart.jpg"}
            alt="profile "
          />
        </div>
        <div className="ticket-details col-md-9">
          <div className="d-flex">
            <p className="text-dark font-weight-semibold mr-2 mb-0 no-wrap">
              {product.title}
            </p>
          </div>
          <p className="text-gray ellipsis mb-2">{product.description}</p>
          <div className="row text-gray d-md-flex d-none">
            <div className="col-4 d-flex">
              <small className="mb-0 mr-2 text-muted text-muted">Price:</small>
              <small className="Last-responded mr-2 mb-0 text-muted text-muted">
                {product.price}
              </small>
            </div>
          </div>
        </div>
        <div className="ticket-actions d-flex align-items-center justify-content-end just col-md-2">
          <button
            type="button"
            className="btn btn-outline-warning mx-1 px-2"
            onClick={e => onToggleEditModal(e, product)}
          >
            <i className="mdi mdi-pencil m-0" />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger mx-1 px-2"
            onClick={e => onToggleRemoveModal(e, product)}
          >
            <i className="mdi mdi-delete m-0" />
          </button>
        </div>
      </div>
    </Link>
  );
};

ProductListItem.propTypes = {
  product: T.shape(productType).isRequired,
  index: T.number,
  onEditModal: T.func,
  onRemoveModal: T.func
};

export default ProductListItem;
