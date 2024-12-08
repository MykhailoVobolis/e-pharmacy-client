import NearestStore from "../NearestStore/NearestStore.jsx";

import css from "./Stores.module.css";

export default function Stores({ stores }) {
  return (
    <ul className={css.storesContainer}>
      {stores.map((store) => (
        <li key={store._id} className={css.storeItem}>
          <NearestStore
            name={store.name}
            rating={store.rating}
            address={store.address}
            city={store.city}
            phone={store.phone}
            status={store.status}
          />
        </li>
      ))}
    </ul>
  );
}
