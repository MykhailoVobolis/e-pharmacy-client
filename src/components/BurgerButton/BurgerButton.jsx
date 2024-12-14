import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModalMobile } from "../../redux/modal/slice.js";
import { IoIosMenu } from "react-icons/io";
import clsx from "clsx";

import css from "./BurgerButton.module.css";

export default function BurgerButton() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const isHome = pathname.includes("home");

  const handleClick = () => {
    dispatch(openModalMobile());
  };

  return (
    <button className={css.burgerBtn} onClick={() => handleClick()}>
      <IoIosMenu className={clsx(css.burgerIcon, { [css.greenBurgerIcon]: !isHome })} />
    </button>
  );
}
