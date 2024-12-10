import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchProductsCategories } from "../../redux/products/operations.js";
import { selectHasNextPage, selectHasPrevPage, selectLoading, selectProducts } from "../../redux/products/selectors.js";
import { selectFilterProducts } from "../../redux/filters/selectors.js";

import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import StoreProducts from "../../components/StoreProducts/StoreProducts.jsx";
import ProductsPagination from "../../components/ProductsPagination/ProductsPagination.jsx";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel.jsx";

import css from "./MedicinePage.module.css";

export default function MedicinePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const productsObject = useSelector(selectProducts);

  const { data } = productsObject;

  const hasNextPage = useSelector(selectHasNextPage);
  const hasPrevPage = useSelector(selectHasPrevPage);

  const filterParams = useSelector(selectFilterProducts);

  useEffect(() => {
    Promise.all([dispatch(fetchProducts(filterParams)), dispatch(fetchProductsCategories())]);
  }, [dispatch, filterParams]);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <section className={css.pageContainer}>
      <div className={css.container}>
        <h2 className={css.title}>Medicine</h2>
        <FiltersPanel />
        {data.length > 0 && <StoreProducts products={data} />}
        {data.length > 0 ? (
          (hasNextPage || hasPrevPage) && <ProductsPagination />
        ) : (
          <p className={css.notification}>Nothing was found for your request</p>
        )}
      </div>
    </section>
  );
}
