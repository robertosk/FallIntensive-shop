import React from "react";
import { Link } from "react-router-dom";
import T from "prop-types";
import S from "../admin-style.module.css";
import { productType } from "../../../common/propTypes";
import { routes } from "../../../routes";
import { formatRoute } from "react-router-named-routes";

const ProductListItem = ({
  product,
  onToggleEditModal,
  onToggleRemoveModal
}) => {
  return (
    <Link
      to={formatRoute(routes.adminProduct, { id: product.id })}
      href="#"
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{product.title}</h5>
        <small>Price: {product.price}</small>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-1 text2lines">{product.description}</p>
        <small className={S.productListControls}>
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
            onClick={e => onToggleRemoveModal(e, product.id)}
          >
            <i className="mdi mdi-delete m-0" />
          </button>
        </small>
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
