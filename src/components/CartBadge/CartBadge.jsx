import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import css from "./CartBadge.module.css";

export default function CartBadge() {
  return (
    <Link className={css.cartBadgeContainer} to="/cart">
      <FiShoppingCart className={css.cartBadgeIcon} size={16} />
      <span className={css.badge}>0</span>
    </Link>
  );
}
