import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchAllStores } from "../../redux/stores/operations.js";
import { selectAllStores, selectLoading } from "../../redux/stores/selectors.js";

import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

import css from "./MedicineStorePage.module.css";
import Stores from "../../components/Stores/Stores.jsx";

export default function MedicineStorePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const stores = useSelector(selectAllStores);

  useEffect(() => {
    dispatch(fetchAllStores());
  }, [dispatch]);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <section className={css.pageContainer}>
      <div className={css.container}>
        <h2 className={css.title}>Medicine store</h2>
        {stores.length > 0 && <Stores stores={stores} />}
      </div>
    </section>
  );
}
