import React from "react";
import Modal from "react-modal";
import S from "../../../Admin/admin-style.module.css";
import CartWidget from "./CartWidgetContainer";
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";
import classNames from "classnames";

const modal = classNames("cart-modal", S.modalContent);
const CartModal = ({ cartModal, toggleCartModal }) => {
  return (
    <Modal
      isOpen={cartModal}
      className={modal}
      onRequestClose={e => toggleCartModal(e)}
      overlayClassName={S.modalOverlay}
      appElement={document.getElementById("root")}
    >
      <div className="preview-cart">
        <button
          type="button"
          className="close p-2"
          onClick={e => toggleCartModal(e)}
        >
          <span aria-hidden="true">×</span>
        </button>
        <CartWidget />
        <div className="cart-btns">
          <Link to={routes.card}>
            <i className="mdi mdi-cart" />
            View Cart
          </Link>
          <Link to={routes.cartCheckout}>
            Checkout <i className="mdi mdi-clipboard-check" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
