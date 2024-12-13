import { useSelector } from "react-redux";
import { selectCartData } from "../../redux/cart/selectors.js";

import CartProductList from "../../components/CartProductList/CartProductList.jsx";
import Checkout from "../../components/Checkout/Checkout.jsx";

import css from "./CartPage.module.css";

export default function CartPage() {
  const cartData = useSelector(selectCartData);

  const { products } = cartData;

  return (
    <section className={css.pageContainer}>
      <div className={css.container}>
        <h2 className={css.title}>Cart</h2>
        <div className={css.secondaryContainer}>
          <Checkout cartData={cartData} />
          {products.length > 0 && <CartProductList products={products} />}
        </div>
      </div>
    </section>
  );
}
