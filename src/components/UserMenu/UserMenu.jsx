import UserAvatar from "../UserAvatar/UserAvatar.jsx";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

import css from "./UserMenu.module.css";
import CartBadge from "../CartBadge/CartBadge.jsx";

export default function UserMenu({ variant }) {
  return (
    <div className={css.userMenuContainer}>
      <CartBadge />
      <UserAvatar variant={variant} />
      <LogoutButton variant={variant} />
    </div>
  );
}
