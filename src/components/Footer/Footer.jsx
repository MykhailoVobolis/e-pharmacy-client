import FooterDescription from "../FooterDescription/FooterDescription.jsx";
import FooterNavigation from "../FooterNavigation/FooterNavigation.jsx";
import LegalFooter from "../LegalFooter/LegalFooter.jsx";
import LineElement from "../LineElement/LineElement.jsx";
import SocialMediaList from "../SocialMediaList/SocialMediaList.jsx";

import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footerSection}>
      <div className={css.container}>
        <div className={css.footerNavBar}>
          <FooterNavigation />
          <SocialMediaList />
        </div>
        <FooterDescription />
        <LineElement />
        <LegalFooter />
      </div>
    </footer>
  );
}
