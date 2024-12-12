import { useDispatch, useSelector } from "react-redux";
import { selectCartData } from "../../redux/cart/selectors.js";

import Checkout from "../../components/Checkout/Checkout.jsx";

import css from "./CartPage.module.css";

export default function CartPage() {
  const dispatch = useDispatch();

  const cartData = useSelector(selectCartData);

  return (
    <section className={css.pageContainer}>
      <div className={css.container}>
        <h2 className={css.title}>Cart</h2>
        <div className={css.secondaryContainer}>
          <Checkout cartData={cartData} />
        </div>
      </div>
    </section>
  );
}
