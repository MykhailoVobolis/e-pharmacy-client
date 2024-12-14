import { useLocation } from "react-router-dom";
import { useMedia } from "react-use";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

import MainLogo from "../MainLogo/MainLogo.jsx";
import NavigationList from "../NavigationList/NavigationList.jsx";
import BurgerButton from "../BurgerButton/BurgerButton.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";

import css from "./Navigation.module.css";

export default function Navigation() {
  const isDesktop = useMedia("(min-width: 1440px)");
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { pathname } = useLocation();
  const isHome = pathname.includes("home");

  return (
    <div className={css.barContainer}>
      <nav className={css.navigation}>
        <MainLogo variant={isHome && "white"} />
        {isDesktop && <NavigationList />}
      </nav>
      {isLoggedIn && !isDesktop && <UserMenu variant={isHome && "white"} />}
      {!isDesktop && <BurgerButton />}
    </div>
  );
}
