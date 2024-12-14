import { useMedia } from "react-use";
import MainLogo from "../MainLogo/MainLogo.jsx";
import FooterNavigationList from "../FooterNavigationList/FooterNavigationList.jsx";

import css from "./FooterNavigation.module.css";

export default function FooterNavigation() {
  const isTablet = useMedia("(min-width: 768px)");

  return (
    <nav className={css.navigation}>
      {isTablet && <MainLogo variant={"white"} />}
      <FooterNavigationList />
    </nav>
  );
}
