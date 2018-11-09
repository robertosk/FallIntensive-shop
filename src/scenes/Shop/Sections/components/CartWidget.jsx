import React from "react";
import { connect } from "react-redux";
import ProductWidget from "../components/ProductWidget";
import * as cartSelector from "../../../../modules/cart/cartSelectors";
import * as cartActions from "../../../../modules/cart/cartActions";

const CartWidget = ({ items, totalPrice, removeFromCart }) => {
  return (
    <div className="order-summary">
      {items.length !== 0 ? (
        <>
          <div className="order-col">
            <div>
              <strong>PRODUCT</strong>
            </div>
            <div>
              <strong>Price</strong>
            </div>
          </div>
          <div className="order-products">
            {items.map(item => (
              <ProductWidget
                key={`cart_${item.id}`}
                product={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="order-col">
            <div>Shipping</div>
            <div>
              <strong>FREE</strong>
            </div>
          </div>
        </>
      ) : (
        <div>
          <strong>Cart is empty</strong>
        </div>
      )}

      <div className="order-col">
        <div>
          <strong>TOTAL</strong>
        </div>
        <div>
          <strong className="order-total">${totalPrice}</strong>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: cartSelector.getProducts(state),
  totalPrice: cartSelector.getTotalPrice(state)
});
const mapStateToDispatch = {
  removeFromCart: cartActions.remove
};
export default connect(
  mapStateToProps,
  mapStateToDispatch
)(CartWidget);
