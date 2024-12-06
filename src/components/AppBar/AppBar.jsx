import { useMedia } from "react-use";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

import css from "./AppBar.module.css";

export default function AppBar() {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = true;

  const { pathname } = useLocation();
  const isHome = pathname.includes("home");

  const isDesktop = useMedia("(min-width: 1440px)");

  return (
    <header className={clsx(css.header, { [css.green]: isHome })}>
      <div className={css.navContainer}>
        <Navigation />
        {isDesktop && isLoggedIn ? (
          <UserMenu variant={isHome && "white"} />
        ) : (
          <AuthNav variantRegister={isHome && "whiteRegister"} variantLogin={isHome && "whiteLogin"} />
        )}
      </div>
    </header>
  );
}
