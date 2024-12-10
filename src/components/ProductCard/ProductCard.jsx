import { Link } from "react-router-dom";

import css from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { brand, category, discount, name, photo, price, stock, suppliers, _id } = product;

  return (
    <div className={css.productContainer}>
      <div className={css.imageWrapper}>
        <img className={css.imageProduct} src={photo} width={"100%"} height={"100%"} alt={`${name} image`} />
      </div>
      <div className={css.productInfoContainer}>
        <div className={css.nameContainer}>
          <div className={css.titleContainer}>
            <h3 className={css.name}>{name}</h3>
            <p className={css.category}>{category}</p>
          </div>
          <p className={css.price}>&#x09F3;{price}</p>
        </div>
        <div className={css.actionBar}>
          <button className={css.addButton}>Add to cart</button>
          <Link className={css.link} to="/product">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
