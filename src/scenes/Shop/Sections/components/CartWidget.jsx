import React from "react";
import { connect } from "react-redux";
import ProductWidget from "../components/ProductWidget";
import * as cartSelector from "../../../../modules/cart/cartSelectors";
import * as cartActions from "../../../../modules/cart/cartActions";
import * as cartOperations from "../../../../modules/cart/cartOperations";
import { lifecycle, compose } from "recompose";

const CartWidget = ({
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

const mapStateToProps = state => ({
  items: cartSelector.getProducts(state),
  totalPrice: cartSelector.getTotalPrice(state)
});

const mapStateToDispatch = {
  getEntities: cartOperations.getEntitiesData,
  qtyUp: cartActions.qtyUp,
  qtyDown: cartActions.qtyDown,
  removeFromCart: cartActions.remove
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapStateToDispatch
  ),
  lifecycle({
    componentDidMount() {
      this.props.getEntities();
    }
  })
);
export default enhance(CartWidget);
