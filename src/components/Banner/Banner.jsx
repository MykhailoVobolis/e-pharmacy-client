import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFilterProducts } from "../../redux/filters/slice.js";

import css from "./Banner.module.css";

export default function Banner({ href, number, name, value, action }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    (value === "70%" || value === "35%") &&
      dispatch(
        changeFilterProducts({
          name: "",
          category: "",
          page: 1,
          discount: value,
        })
      );
  };

  return (
    <>
      <div className={css.bannerNameContainer}>
        <div className={css.bannerNumber}>
          <p className={css.bannerNumberValue}>{number}</p>
        </div>
        <h3 className={css.bannerName}>{name}</h3>
      </div>
      <div className={css.linkContainer}>
        <p className={css.value}>{value}</p>
        <Link className={css.link} to={href} onClick={handleClick}>
          {action}
        </Link>
      </div>
    </>
  );
}
