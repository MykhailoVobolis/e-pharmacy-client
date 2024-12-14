import clsx from "clsx";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

import css from "./QuantitySelector.module.css";

export default function QuantitySelector({ quantity, handleQuantityChange, productExists, isProductOverview }) {
  const selectorContainerVariant = location.pathname === "/cart" ? "cartSelectorContainer" : "";

  return (
    <div className={clsx(css.selectorContainer, selectorContainerVariant && css[selectorContainerVariant])}>
      <button
        className={css.selectorBtn}
        onClick={() => handleQuantityChange("increase")}
        disabled={productExists & isProductOverview}>
        <FiPlus className={css.selectorIcon} size={20} />
      </button>
      <span className={css.quantity}>{quantity}</span>
      <button
        className={css.selectorBtn}
        onClick={() => handleQuantityChange("decrease")}
        disabled={quantity === 1 || productExists & isProductOverview}>
        <FiMinus className={css.selectorIcon} size={20} />
      </button>
    </div>
  );
}
