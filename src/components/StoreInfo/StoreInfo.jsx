import clsx from "clsx";
import { AiFillStar } from "react-icons/ai";

import css from "./StoreInfo.module.css";

export default function StoreInfo({ rating, status }) {
  const isClose = status === "CLOSE";

  return (
    <div className={css.infoStore}>
      <div className={css.ratingWrapper}>
        <AiFillStar className={css.ratingIcon} size={16} />
        <span className={css.rating}>{rating}</span>
      </div>
      <div className={clsx(css.statusWrapper, isClose && css.statusWrapperClose)}>
        <span className={clsx(css.status, isClose && css.statusClose)}>{status}</span>
      </div>
    </div>
  );
}
