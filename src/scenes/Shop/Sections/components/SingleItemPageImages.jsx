import React from "react";
import Slider from "react-slick";
import { compose, lifecycle, withState, withHandlers } from "recompose";

const SingleItemPageImages = props => {
  const { images, navContainer, viewContainer } = props;

  const viewImage = {
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: viewContainer,
    ref: slider => {
      //this.slider1 = slider;
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
      // this.slider2 = slider;
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
};

const enhance = compose(
  withState("navContainer", "handleNavContainer", null),
  withState("viewContainer", "handleViewContainer", null),
  withState("slider1", "handleSlider1", null),
  withState("slider2", "handleSlider2", null),
  lifecycle({
    componentDidMount() {
      this.props.handleNavContainer(this.slider1);
      this.props.handleViewContainer(this.slider2);
    }
  }),
  withHandlers({})
);
export default enhance(SingleItemPageImages);
