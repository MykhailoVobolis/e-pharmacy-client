import { useLocation } from "react-router-dom";
import { useMedia } from "react-use";

import MainLogo from "../MainLogo/MainLogo.jsx";
import NavigationList from "../NavigationList/NavigationList.jsx";
// import BurgerButton from "../BurgerButton/BurgerButton.jsx";
// import UserAvatar from "../UserAvatar/UserAvatar.jsx";

import css from "./Navigation.module.css";

export default function Navigation() {
  const isDesktop = useMedia("(min-width: 1440px)");

  const { pathname } = useLocation();
  const isHome = pathname.includes("home");

  return (
    <div className={css.barContainer}>
      <nav className={css.navigation}>
        <MainLogo variant={isHome && "white"} />
        {isDesktop && <NavigationList />}
      </nav>
      {/* {!isDesktop && isLoggedIn && <UserAvatar />}
      {!isDesktop && isLoggedIn && <BurgerButton />} */}
    </div>
  );
}
