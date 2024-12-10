import clsx from "clsx";
import ProductCard from "../ProductCard/ProductCard.jsx";

import css from "./StoreProducts.module.css";

export default function StoreProducts({ products, variant }) {
  return (
    <ul
      className={clsx(css.productsContainer, {
        [css.containerVariant]: variant === "details",
      })}>
      {products.map((product) => (
        <li
          key={product._id}
          className={clsx(css.productsItem, {
            [css.itemVariant]: variant === "details",
          })}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
