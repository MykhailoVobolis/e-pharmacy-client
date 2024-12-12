import reviews from "../../data/reviews.json";
import ReviewItem from "../ReviewItem.jsx/ReviewItem.jsx";

import css from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div className={css.reviewsWrapper}>
      <ul className={css.reviewList}>
        {reviews.map((item, index) => (
          <li key={index}>
            <ReviewItem review={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
