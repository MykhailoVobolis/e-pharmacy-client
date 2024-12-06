import { Link } from "react-router-dom";
import { useMedia } from "react-use";
import clsx from "clsx";

import logoWhiteMobile from "../../assets/images/mobile/logo-white-mobile.png";
import logoWhiteMobile2x from "../../assets/images/mobile/logo-white-mobile@2x.png";
import logoWhite from "../../assets/images/logo-white.png";
import logoWhite2x from "../../assets/images/logo-white@2x.png";

import logoGreenMobile from "../../assets/images/mobile/logo-mobile.png";
import logoGreenMobile2x from "../../assets/images/mobile/logo-mobile@2x.png";
import logoGreen from "../../assets/images/logo.png";
import logoGreen2x from "../../assets/images/logo@2x.png";

import css from "./MainLogo.module.css";

export default function MainLogo({ variant }) {
  const isTablet = useMedia("(min-width: 768px)");

  let logoSrc, logoSrcSet;

  if (variant === "white") {
    logoSrc = isTablet ? logoWhite : logoWhiteMobile;
    logoSrcSet = isTablet ? logoWhite2x : logoWhiteMobile2x;
  } else {
    logoSrc = isTablet ? logoGreen : logoGreenMobile;
    logoSrcSet = isTablet ? logoGreen2x : logoGreenMobile2x;
  }

  const logoSize = isTablet ? 44 : 32;

  return (
    <Link className={clsx(css.mainLogo, css[variant])} to="/home">
      <img width={logoSize} height={logoSize} src={logoSrc} srcSet={`${logoSrcSet} 2x`} alt="logo" />
      E-Pharmacy
    </Link>
  );
}
