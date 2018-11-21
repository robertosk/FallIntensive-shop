import React from "react";
import AddToCartBtn from "../Sections/components/AddToCartBtn";
import SingleItemPageImages from "../Sections/components/SingleItemPageImages";
import ReviewsList from "../Sections/ReviewsList";
import Loading from "../../../components/Loading";

const SingleItemPageView = ({ product, onAddToCart, isLoading }) => {
  const images = new Array(product.image);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <SingleItemPageImages images={images} />
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{product.title}</h2>
              <div>
                <div className="product-rating">
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star" />
                  <i className="mdi mdi-star-o" />
                </div>
                <a className="review-link" href="#">
                  10 Review(s) | Add your review
                </a>
              </div>
              <div>
                <h3 className="product-price">
                  ${product.price}
                  {false && <del className="product-old-price">$990.00</del>}
                </h3>
                <span className="product-available">In Stock</span>
              </div>
              <p>{product.description}</p>

              <div className="product-options">
                <label>
                  Size
                  <select className="input-select">
                    <option value="0">X</option>
                  </select>
                </label>
                <label>
                  Color
                  <select className="input-select">
                    <option value="0">Red</option>
                  </select>
                </label>
              </div>

              <div className="add-to-cart">
                <div className="qty-label">
                  Qty
                  <div className="input-number">
                    <input type="number" />
                    <span className="qty-up">+</span>
                    <span className="qty-down">-</span>
                  </div>
                </div>
                <AddToCartBtn product={product} onAddToCart={onAddToCart} />
              </div>

              <ul className="product-btns">
                <li>
                  <a href="#">
                    <i className="mdi mdi-heart-outline" /> add to wishlist
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-exchange" /> add to compare
                  </a>
                </li>
              </ul>

              <ul className="product-links">
                <li>Category:</li>
                <li>
                  <a href="#">Headphones</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>

              <ul className="product-links">
                <li>Share:</li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-facebook-box" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-twitter-box" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="mdi mdi-google-plus-box" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div id="product-tab">
              <ul className="nav nav-tabs " role="tablist">
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    id="description-tab"
                    data-toggle="tab"
                    href="#tab1"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="details-tab"
                    data-toggle="tab"
                    href="#tab2"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Details
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-toggle="tab"
                    href="#tab3"
                    role="tab"
                    aria-controls="home"
                    aria-selected="false"
                  >
                    Reviews (3)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="tab1"
                  className="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  id="tab2"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="details-tab"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
                <div
                  id="tab3"
                  className="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="row">
                    <div className="col-md-3">
                      <div id="rating">
                        <div className="rating-avg">
                          <span>4.5</span>
                          <div className="rating-stars">
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star" />
                            <i className="mdi mdi-star-o" />
                          </div>
                        </div>
                        <ul className="rating">
                          <li>
                            <div className="rating-stars">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                            </div>
                            <div className="rating-progress">
                              <div style={{ width: "80%" }} />
                            </div>
                            <span className="sum">3</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div style={{ width: "60%" }} />
                            </div>
                            <span className="sum">2</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                          <li>
                            <div className="rating-stars">
                              <i className="mdi mdi-star" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                              <i className="mdi mdi-star-o" />
                            </div>
                            <div className="rating-progress">
                              <div />
                            </div>
                            <span className="sum">0</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ReviewsList />
                    </div>
                    <div className="col-md-3">
                      <div id="review-form">
                        <form className="review-form">
                          <input
                            className="input"
                            type="text"
                            placeholder="Your Name"
                          />
                          <input
                            className="input"
                            type="email"
                            placeholder="Your Email"
                          />
                          <textarea
                            className="input"
                            placeholder="Your Review"
                          />
                          <div className="input-rating">
                            <span>Your Rating: </span>
                            <div className="stars">
                              <input
                                id="star5"
                                name="rating"
                                value="5"
                                type="radio"
                              />
                              <label htmlFor="star5" />
                              <input
                                id="star4"
                                name="rating"
                                value="4"
                                type="radio"
                              />
                              <label htmlFor="star4" />
                              <input
                                id="star3"
                                name="rating"
                                value="3"
                                type="radio"
                              />
                              <label htmlFor="star3" />
                              <input
                                id="star2"
                                name="rating"
                                value="2"
                                type="radio"
                              />
                              <label htmlFor="star2" />
                              <input
                                id="star1"
                                name="rating"
                                value="1"
                                type="radio"
                              />
                              <label htmlFor="star1" />
                            </div>
                          </div>
                          <button className="primary-btn">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPageView;
