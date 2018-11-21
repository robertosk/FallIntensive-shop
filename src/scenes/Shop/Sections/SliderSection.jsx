import React from "react";
import Slider from "react-slick";
import SingleStoreItem from "./components/SingleStoreItem";

const sliderSettings = {
  initialSlide: 0,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  infinite: true,
  arrows: false,
  speed: 300,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const SliderComponent = ({ products, onAddToCart }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">Some Products</h3>
              <div className="section-nav">
                <ul className="nav nav-tabs section-tab-nav tab-nav">
                  <li>
                    <a className="active" data-toggle="tab" href="#tab1">
                      Phones 1
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab2">
                      Phones 2
                    </a>
                  </li>

                  <li>
                    <a data-toggle="tab" href="#tab3">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs w-100 tab-content">
                <div id="tab1" className="tab-pane active products-slick">
                  <Slider {...sliderSettings}>
                    {products.map(product => (
                      <SingleStoreItem
                        key={`sli_${product.id}`}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </Slider>
                </div>
                <div id="tab2" className="tab-pane products-slick">
                  <Slider {...sliderSettings}>
                    {products.map(product => (
                      <SingleStoreItem
                        key={`sli_${product.id}`}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </Slider>
                </div>
                <div id="tab3" className="tab-pane products-slick">
                  <Slider {...sliderSettings}>
                    {products.map(product => (
                      <SingleStoreItem
                        key={`sli_${product.id}`}
                        product={product}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
