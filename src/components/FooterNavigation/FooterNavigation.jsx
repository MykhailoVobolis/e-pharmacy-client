import MainLogo from "../MainLogo/MainLogo.jsx";
import FooterNavigationList from "../FooterNavigationList/FooterNavigationList.jsx";

import css from "./FooterNavigation.module.css";

export default function FooterNavigation() {
  return (
    <nav className={css.navigation}>
      <MainLogo variant={"white"} />
      <FooterNavigationList />
    </nav>
  );
}
