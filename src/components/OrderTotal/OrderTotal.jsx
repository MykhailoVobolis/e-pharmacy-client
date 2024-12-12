import css from "./OrderTotal.module.css";

export default function OrderTotal({ totalPrice }) {
  return (
    <div className={css.orderTotalContainer}>
      <p>Total:</p>
      <p>&#x09F3; {totalPrice}</p>
    </div>
  );
}
