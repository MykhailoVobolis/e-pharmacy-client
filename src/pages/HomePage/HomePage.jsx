import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCustomerReviews, fetchNearestStores } from "../../redux/stores/operations.js";
import { selectLoading } from "../../redux/stores/selectors.js";

import PromoBanners from "../../components/PromoBanners/PromoBanners.jsx";
import MainBanner from "../../components/MainBanner/MainBanner.jsx";
import MedicineStores from "../../components/MedicineStores/MedicineStores.jsx";
import AddPharmacyPromo from "../../components/AddPharmacyPromo/AddPharmacyPromo.jsx";
import CustomerReviews from "../../components/CustomerReviews/CustomerReviews.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

import css from "./HomePage.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    Promise.all([dispatch(fetchNearestStores()), dispatch(fetchCustomerReviews())]);
  }, [dispatch]);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <div className={css.pageContainer}>
      <MainBanner />
      <div className={css.container}>
        <PromoBanners />
        <MedicineStores />
        <AddPharmacyPromo />
        <CustomerReviews />
      </div>
    </div>
  );
}
