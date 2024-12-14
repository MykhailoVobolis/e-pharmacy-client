import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

import NavigationList from "../NavigationList/NavigationList.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

import css from "./MobileMenu.module.css";

export default function MobileMenu({ onClose }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isHome = true;

  return (
    <div className={css.mobileMenu}>
      <button className={css.closeBtn} onClick={() => onClose()}>
        <MdClose size={32} className={css.closeIcon} />
      </button>
      <NavigationList onClose={onClose} />
      {isLoggedIn ? (
        <LogoutButton variant={isHome && "white"} />
      ) : (
        <AuthNav variantRegister={isHome && "whiteRegister"} variantLogin={isHome && "whiteLogin"} />
      )}
    </div>
  );
}
