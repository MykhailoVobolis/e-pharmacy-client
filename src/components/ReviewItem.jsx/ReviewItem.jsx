import RatingStars from "../RatingStars/RatingStars.jsx";

import css from "./ReviewItem.module.css";

export default function ReviewItem({ review: { reviewer_avatar, reviewer_name, reviewer_rating, timeAgo, comment } }) {
  return (
    <div className={css.reviewWrapper}>
      <div className={css.titleReviewContainer}>
        <img src={reviewer_avatar} alt={reviewer_name} width={44} height={44} />
        <div className={css.titleWrapper}>
          <div className={css.authorInfo}>
            <h3 className={css.authorName}>{reviewer_name}</h3>
            <p className={css.timeAgo}>{timeAgo}</p>
          </div>
          <div className={css.ratingContainer}>
            <RatingStars count={reviewer_rating} />
            <p className={css.ratingValue}>{reviewer_rating}</p>
          </div>
        </div>
      </div>
      <p className={css.comment}>{comment}</p>
    </div>
  );
}
