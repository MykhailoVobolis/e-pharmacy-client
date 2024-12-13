import CartProduct from "../CartProduct/CartProduct.jsx";

import css from "./CartProductList.module.css";

export default function CartProductList({ products }) {
  return (
    <ul className={css.productsContainer}>
      {products.map((product) => (
        <li key={product._id} className={css.productsItem}>
          <CartProduct product={product} />
        </li>
      ))}
    </ul>
  );
}
