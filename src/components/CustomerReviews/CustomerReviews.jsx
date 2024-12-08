import { useSelector } from "react-redux";
import { selectCustomerReviews } from "../../redux/stores/selectors.js";

import Review from "../Review/Review.jsx";

import userReviewImage1 from "../../assets/images/user-review-1.png";
import userReviewImage2 from "../../assets/images/user-review-2.png";
import userReviewImage3 from "../../assets/images/user-review-3.png";

import userReviewImage1_2x from "../../assets/images/user-review-1@2x.png";
import userReviewImage2_2x from "../../assets/images/user-review-2@2x.png";
import userReviewImage3_2x from "../../assets/images/user-review-3@2x.png";

import css from "./CustomerReviews.module.css";

export default function CustomerReviews() {
  const reviews = useSelector(selectCustomerReviews);

  const photosSrc = [userReviewImage1, userReviewImage2, userReviewImage3];
  const photosSrcSet = [userReviewImage1_2x, userReviewImage2_2x, userReviewImage3_2x];

  return (
    <section className={css.customerReviewsSection}>
      <h2 className={css.title}>Reviews</h2>
      <p className={css.description}>Search for Medicine, Filter by your location</p>
      {reviews.length > 0 && (
        <ul className={css.reviewsContainer}>
          {reviews.map((review, index) => (
            <li className={css.reviewItem} key={review._id}>
              <Review
                name={review.name}
                testimonial={review.testimonial}
                imageSrc={photosSrc[index]}
                imageSrcSet={photosSrcSet[index]}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
