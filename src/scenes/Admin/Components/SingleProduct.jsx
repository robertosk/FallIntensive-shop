import React, { Component } from "react";

import { connect } from "react-redux";
import * as productsSelector from "../../../modules/products/productsSelectors";
import * as adminProductsOperations from "../../../modules/adminProducts/adminProductsOperations";

import { Link, Redirect } from "react-router-dom";
import { routes } from "../../../routes";

class SingleProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(name, value) {
    this.setState({
      product: {
        ...this.state.product,
        [name]: name === "price" ? Number(value) : value
      }
    });
  }
  handleSubmit() {
    this.props
      .editProduct(this.state.product)
      .then(this.setState({ redirect: true }));
  }
  render() {
    return (
      <>
        <div className="container single-product">
          <div className="row">
            <div className="col-lg-5 ">
              <div className="product-image">
                <img src={this.state.product.image} alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="product-description">
                <div className="card">
                  <div className="card-body d-flex flex-column">
                    <h4 className="card-title">Edit product</h4>
                    <div className="row">
                      <div className="form-group col-md-8">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="title"
                          value={this.state.product.title}
                          onChange={e =>
                            this.handleChange(e.target.name, e.target.value)
                          }
                        />
                      </div>
                      <div className="form-group col-md-4">
                        <label>Price</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Price"
                          name="price"
                          value={this.state.product.price}
                          onChange={e =>
                            this.handleChange(e.target.name, e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Image</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Image"
                        name="image"
                        value={this.state.product.image}
                        onChange={e =>
                          this.handleChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        name="description"
                        value={this.state.product.description}
                        onChange={e =>
                          this.handleChange(e.target.name, e.target.value)
                        }
                      />
                    </div>
                    <div className="d-flex justify-content-end mt-auto">
                      <Link
                        to={routes.adminProductList}
                        className="btn btn-light mx-2"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-outline-success mx-2"
                        onClick={this.handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.redirect && <Redirect to={routes.adminProductList} />}
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: productsSelector.getProduct(state, props.match.params.id)
});
const mapStateToDispatch = {
  editProduct: adminProductsOperations.editProduct,
  removeProduct: adminProductsOperations.removeProduct
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(SingleProduct);
