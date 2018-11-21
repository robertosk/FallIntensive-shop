import React from "react";
import ProductWidget from "./ProductWidget";

const CartWidgetView = ({
  items,
  totalPrice,
  removeFromCart,
  quantities,
  qtyUp,
  qtyDown
}) => {
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
                quantities={quantities}
                qtyUp={qtyUp}
                qtyDown={qtyDown}
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

export default CartWidgetView;
