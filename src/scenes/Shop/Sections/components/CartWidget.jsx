import React from "react";
import { connect } from "react-redux";
import ProductWidget from "../components/ProductWidget";

const CartWidget = ({ items }) => {
  let totalSum = 0;
  if (items.length !== 0) {
    totalSum = items.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }

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
              <ProductWidget key={`cart_${item.id}`} product={item} />
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
          <strong className="order-total">${totalSum}</strong>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cart.items
});

export default connect(mapStateToProps)(CartWidget);
