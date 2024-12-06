import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthNav.module.css";

export default function AuthNav({ onClose, variantRegister, variantLogin }) {
  return (
    <div className={css.authContainer}>
      <Link className={clsx(css.registerLink, css[variantRegister])} to="/register" onClick={() => onClose()}>
        Register
      </Link>
      <Link className={clsx(css.loginLink, css[variantLogin])} to="/login" onClick={() => onClose()}>
        Login
      </Link>
    </div>
  );
}
