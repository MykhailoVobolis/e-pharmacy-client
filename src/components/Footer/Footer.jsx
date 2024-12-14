import { useMedia } from "react-use";

import FooterDescription from "../FooterDescription/FooterDescription.jsx";
import FooterNavigation from "../FooterNavigation/FooterNavigation.jsx";
import LegalFooter from "../LegalFooter/LegalFooter.jsx";
import LineElement from "../LineElement/LineElement.jsx";
import SocialMediaList from "../SocialMediaList/SocialMediaList.jsx";
import MainLogo from "../MainLogo/MainLogo.jsx";

import css from "./Footer.module.css";

export default function Footer() {
  const isTablet = useMedia("(min-width: 768px)");
  const isMobile = useMedia("(max-width: 767px)");
  const isDesktop = useMedia("(min-width: 1440px)");

  return (
    <footer className={css.footerSection}>
      <div className={css.container}>
        <div className={css.footerNavBar}>
          {isMobile && <MainLogo variant={"white"} />}
          {isMobile && <FooterDescription />}
          {isTablet && <FooterNavigation />}
          {isDesktop && <SocialMediaList />}
        </div>
        {isMobile && <FooterNavigation />}
        <div className={css.isTabletContainer}>
          {isTablet && <FooterDescription />}
          {isTablet && !isDesktop && <SocialMediaList />}
        </div>
        <LineElement />
        <LegalFooter />
      </div>
    </footer>
  );
}
