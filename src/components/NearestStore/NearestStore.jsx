import css from "./NearestStore.module.css";
import StoreInfo from "../StoreInfo/StoreInfo.jsx";
import StoreContacts from "../StoreContacts/StoreContacts.jsx";

export default function NearestStore({ name, rating, address, city, phone, status }) {
  return (
    <div className={css.storeContainer}>
      <div className={css.aboutContainer}>
        <h3 className={css.name}>{name}</h3>
        <StoreInfo rating={rating} status={status} />
      </div>
      <StoreContacts address={address} city={city} phone={phone} />
    </div>
  );
}
