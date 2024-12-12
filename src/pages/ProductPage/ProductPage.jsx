import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/products/operations.js";
import { selectCurentProduct, selectLoading } from "../../redux/products/selectors.js";

import ProductOverview from "../../components/ProductOverview/ProductOverview.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import ProductDetails from "../../components/ProductDetails/ProductDetails.jsx";

import css from "./ProductPage.module.css";

export default function ProductPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const { productId } = useParams();

  const curentProduct = useSelector(selectCurentProduct);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <section className={css.pageContainer}>
      <div className={css.container}>
        <ProductOverview product={curentProduct} />
        <ProductDetails />
      </div>
    </section>
  );
}
