import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { addProductsToCart } from "../../redux/cart/operations.js";
import { selectCartProducts } from "../../redux/cart/selectors.js";
import { openModal } from "../../redux/modal/slice.js";
import QuantitySelector from "../QuantitySelector/QuantitySelector.jsx";
import { useState } from "react";

import css from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const isLoggedin = useSelector(selectIsLoggedIn);
  const productsCart = useSelector(selectCartProducts);

  const { brand, category, name, photo, price, _id } = product;

  const { pathname } = useLocation();
  const isProductOverview = pathname.includes("product");

  const productExists = isLoggedin && productsCart && productsCart.some((product) => product._id === _id);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleClick = () => {
    if (isLoggedin) {
      if (productExists) {
        navigate("/cart");
      } else {
        const products = [
          {
            productId: _id,
            quantity: quantity,
            price: price,
          },
        ];
        dispatch(addProductsToCart(products))
          .unwrap()
          .then(() => {
            isProductOverview && setQuantity(1);
          });
      }
    } else {
      dispatch(openModal("login"));
    }
  };

  return (
    <div
      className={clsx(css.productContainer, {
        [css.productOverviewContainer]: isProductOverview,
      })}>
      <div
        className={clsx(css.imageWrapper, {
          [css.imageWrapperOverview]: isProductOverview,
        })}>
        <img className={css.imageProduct} src={photo} width={"100%"} height={"100%"} alt={`${name} image`} />
      </div>
      <div className={css.productInfoContainer}>
        <div
          className={clsx(css.nameContainer, {
            [css.nameContainerOverview]: isProductOverview,
          })}>
          <div className={css.titleContainer}>
            <h3 className={clsx(css.name, { [css.nameOverview]: isProductOverview })}>{name}</h3>
            <p className={css.category}>{isProductOverview ? `Brand: ${brand}` : category}</p>
          </div>
          <p className={clsx(css.price, { [css.priceOverview]: isProductOverview })}>&#x09F3;{price}</p>
        </div>
        <div className={css.actionBar}>
          {isProductOverview && (
            <QuantitySelector
              quantity={quantity}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
              productExists={productExists}
              isProductOverview={isProductOverview}
            />
          )}
          <button
            className={clsx(css.addButton, {
              [css.addButtonOverview]: isProductOverview,
            })}
            onClick={handleClick}>
            {productExists ? "In сart" : "Add to сart"}
          </button>
          {!isProductOverview && (
            <Link className={css.link} to={`/product/${_id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
