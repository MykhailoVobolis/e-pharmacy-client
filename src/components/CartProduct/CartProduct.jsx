import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addProductsToCart, deleteProductCart } from "../../redux/cart/operations.js";

import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";

import css from "./CartProduct.module.css";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();

  const { category, name, photo, price, quantity, _id } = product;

  const handleQuantityChange = (type) => {
    const newQuantity = type === "decrease" ? quantity - 1 : quantity + 1;

    if (type === "decrease" && quantity <= 1) return;

    const products = [
      {
        productId: _id,
        quantity: newQuantity,
        price: price,
      },
    ];

    dispatch(addProductsToCart(products))
      .unwrap()
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleRemoveClick = () => {
    dispatch(deleteProductCart(_id))
      .unwrap()
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className={css.cartProductContainer}>
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
          <QuantitySelector quantity={quantity} handleQuantityChange={handleQuantityChange} />
          <button className={css.removeButton} onClick={handleRemoveClick}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
