import React, { Component } from "react";
import Slider from "react-slick";

class SingleItemPageImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navContainer: null,
      viewContainer: null
    };
  }
  componentDidMount() {
    this.setState({
      navContainer: this.slider1,
      viewContainer: this.slider2
    });
  }
  render() {
    const { images } = this.props;
    const { navContainer, viewContainer } = this.state;
    const viewImage = {
      infinite: true,
      speed: 300,
      dots: false,
      arrows: true,
      fade: true,
      asNavFor: viewContainer,
      ref: slider => {
        this.slider1 = slider;
      }
    };

    const navImages = {
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: 0,
      vertical: true,
      asNavFor: navContainer,
      ref: slider => {
        this.slider2 = slider;
      },
      responsive: [
        {
          breakpoint: 991,
          settings: {
            vertical: false,
            arrows: false,
            dots: true
          }
        }
      ]
    };
    return (
      <>
        <div className="col-md-2" id="product-imgs">
          <Slider {...navImages}>
            {images.map(image => {
              return (
                <div
                  key={`sli-nav${image}`}
                  className="product-preview slick-slide"
                >
                  <img src={image} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="col-md-5" id="product-main-img">
          <Slider {...viewImage}>
            {images.map(image => {
              return (
                <div
                  key={`sli-view${image}`}
                  className="product-preview slick-slide"
                >
                  <img src={image} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default SingleItemPageImages;
