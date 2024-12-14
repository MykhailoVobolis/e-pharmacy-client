import clsx from "clsx";
import css from "./FormButton.module.css";
import { useLocation } from "react-router-dom";

export default function FormButton({ onSubmit, variant, children }) {
  const location = useLocation();

  const adjustedVariant =
    location.pathname === "/medicine"
      ? "registerModal"
      : location.pathname === "/cart"
      ? "orderFormBtn"
      : location.pathname === "/register"
      ? "buttonRegisterMobile"
      : location.pathname === "/login"
      ? "buttonLoginMobile"
      : variant;

  return (
    <button className={clsx(css.formButton, css[adjustedVariant])} type="submit" onClick={onSubmit}>
      {children}
    </button>
  );
}
