import { useSelector } from "react-redux";
import Stores from "../Stores/Stores.jsx";
import { selectNearestStores } from "../../redux/stores/selectors.js";

import css from "./MedicineStores.module.css";

export default function MedicineStores() {
  const stores = useSelector(selectNearestStores);

  return (
    <section className={css.medicineStoresSection}>
      <h2 className={css.title}>Your Nearest Medicine Store</h2>
      <p className={css.description}>Search for Medicine, Filter by your location</p>
      {stores.length > 0 && <Stores stores={stores} />}
    </section>
  );
}
