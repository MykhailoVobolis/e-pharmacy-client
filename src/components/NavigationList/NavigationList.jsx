import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./NavigationList.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function NavigationList({ onClose }) {
  return (
    <ul className={css.navMenu}>
      <li className={css.navItem}>
        <NavLink to="/home" className={getNavLinkClass} onClick={onClose}>
          Home
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink to="/medicine-store" className={getNavLinkClass} onClick={onClose}>
          Medicine store
        </NavLink>
      </li>
      <li className={css.navItem}>
        <NavLink to="/medicine" className={getNavLinkClass} onClick={onClose}>
          Medicine
        </NavLink>
      </li>
    </ul>
  );
}
