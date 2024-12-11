import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthPrompt.module.css";

export default function AuthPrompt({ link, children, variant }) {
  return (
    <Link className={clsx(css.link, css[variant])} to={link}>
      {children}
    </Link>
  );
}
