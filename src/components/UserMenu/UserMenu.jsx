import { useMedia } from "react-use";

import UserAvatar from "../UserAvatar/UserAvatar.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

import css from "./UserMenu.module.css";
import CartBadge from "../CartBadge/CartBadge.jsx";

export default function UserMenu({ variant }) {
  const isDesktop = useMedia("(min-width: 1440px)");

  return (
    <div className={css.userMenuContainer}>
      <CartBadge />
      <UserAvatar variant={variant} />
      {isDesktop && <LogoutButton variant={variant} />}
    </div>
  );
}
