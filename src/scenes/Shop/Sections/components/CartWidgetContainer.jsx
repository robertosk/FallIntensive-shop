import React from "react";
import { connect } from "react-redux";
import * as cartSelector from "../../../../modules/cart/cartSelectors";
import * as cartActions from "../../../../modules/cart/cartActions";
import * as cartOperations from "../../../../modules/cart/cartOperations";
import { lifecycle, compose } from "recompose";
import CartWidgetView from "./CartWidgetView";

const CartWidgetContainer = props => {
  return <CartWidgetView {...props} />;
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
export default enhance(CartWidgetContainer);
