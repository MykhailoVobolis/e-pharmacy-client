import { nanoid } from "nanoid";
import { AiFillStar } from "react-icons/ai";

import css from "./RatingStars.module.css";

export default function RatingStars({ count }) {
  const totalStars = 5;

  const iconsArray = Array.from({ length: totalStars }, (_, index) => (
    <AiFillStar className={index < count ? css.starIcon : css.starIconGrey} key={nanoid()} size={16} />
  ));

  return <div className={css.starsContainer}>{iconsArray}</div>;
}
