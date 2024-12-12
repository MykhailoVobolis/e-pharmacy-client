import OrderForm from "../OrderForm/OrderForm.jsx";

import css from "./Checkout.module.css";

export default function Checkout({ cartData }) {
  const { totalPrice } = cartData;

  return (
    <div className={css.checkoutWrapper}>
      <OrderForm totalPrice={totalPrice} />
    </div>
  );
}
