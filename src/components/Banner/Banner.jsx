import { Link } from "react-router-dom";

import css from "./Banner.module.css";

export default function Banner({ href, number, name, value, action }) {
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
        <Link className={css.link} to={href}>
          {action}
        </Link>
      </div>
    </>
  );
}
