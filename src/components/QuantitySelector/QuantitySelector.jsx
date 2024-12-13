import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import css from "./QuantitySelector.module.css";

export default function QuantitySelector({ quantity, handleQuantityChange, productExists, isProductOverview }) {
  return (
    <div className={css.selectorContainer}>
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
