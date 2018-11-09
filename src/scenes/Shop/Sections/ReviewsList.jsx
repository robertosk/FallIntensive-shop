import React from "react";
import { reviews } from "../../../data/reviews";

const ReviewItem = ({ review }) => {
  return (
    <li>
      <div className="review-heading">
        <h5 className="name">{review.user}</h5>
        <p className="date">27 DEC 2018, 8:0 PM</p>
        <div className="review-rating">
          <i className="mdi mdi-star" />
          <i className="mdi mdi-star" />
          <i className="mdi mdi-star" />
          <i className="mdi mdi-star" />
          <i className="mdi mdi-star-o empty" />
        </div>
      </div>
      <div className="review-body">
        <p>{review.reviewText}</p>
      </div>
    </li>
  );
};

const ReviewsList = () => {
  return (
    <div id="reviews">
      <ul className="reviews">
        {reviews.map(review => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <ul className="reviews-pagination">
        <li className="active">1</li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsList;
