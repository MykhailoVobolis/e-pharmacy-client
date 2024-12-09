import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectTotalProducts } from "../../redux/cart/selectors.js";

import css from "./CartBadge.module.css";

export default function CartBadge() {
  const totalProducts = useSelector(selectTotalProducts);

  return (
    <Link className={css.cartBadgeContainer} to="/cart">
      <FiShoppingCart className={css.cartBadgeIcon} size={16} />
      <span className={css.badge}>{totalProducts}</span>
    </Link>
  );
}
