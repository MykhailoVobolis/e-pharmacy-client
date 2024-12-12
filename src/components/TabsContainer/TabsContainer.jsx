import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./TabsContainer.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active, css.default);
};

export default function TabsContainer() {
  return (
    <ul className={css.addInformationList}>
      <li>
        <NavLink to="description" className={getNavLinkClass}>
          Description
        </NavLink>
      </li>
      <li>
        <NavLink to="reviews" className={getNavLinkClass}>
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
