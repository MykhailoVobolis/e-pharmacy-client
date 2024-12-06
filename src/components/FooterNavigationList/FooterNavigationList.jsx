import { Link } from "react-router-dom";

import css from "./FooterNavigationList.module.css";

export default function FooterNavigationList({ onClose }) {
  return (
    <ul className={css.navMenu}>
      <li>
        <Link to="/home" className={css.link} onClick={onClose}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/medicine-store" className={css.link} onClick={onClose}>
          Medicine store
        </Link>
      </li>
      <li>
        <Link to="/medicine" className={css.link} onClick={onClose}>
          Medicine
        </Link>
      </li>
    </ul>
  );
}
