import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { addProductsToCart } from "../../redux/cart/operations.js";
import { selectCartProducts } from "../../redux/cart/selectors.js";
import { openModal } from "../../redux/modal/slice.js";

import css from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const { brand, category, discount, name, photo, price, stock, suppliers, _id } = product;

  const dispatch = useDispatch();
  const isLoggedin = useSelector(selectIsLoggedIn);
  const productsCart = useSelector(selectCartProducts);

  const navigate = useNavigate();

  const productExists = isLoggedin && productsCart && productsCart.some((product) => product._id === _id);

  const handleClick = () => {
    if (isLoggedin) {
      if (productExists) {
        navigate("/cart");
      } else {
        const products = [
          {
            productId: _id,
            quantity: 1,
            price: price,
          },
        ];
        dispatch(addProductsToCart(products));
      }
    } else {
      dispatch(openModal("login"));
    }
  };

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
          <button className={css.addButton} onClick={handleClick}>
            {productExists ? "In сart" : "Add to сart"}
          </button>
          <Link className={css.link} to="/product">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
