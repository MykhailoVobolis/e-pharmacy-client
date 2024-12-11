import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFilterProducts } from "../../redux/filters/slice.js";

import StoreInfo from "../StoreInfo/StoreInfo.jsx";
import StoreContacts from "../StoreContacts/StoreContacts.jsx";

import css from "./AllStore.module.css";

export default function AllStore({ name, rating, address, city, phone, status }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      changeFilterProducts({
        name: "",
        category: "",
        page: 1,
        discount: "",
      })
    );
  };

  return (
    <div className={css.storeContainer}>
      <h3 className={css.name}>{name}</h3>
      <StoreContacts address={address} city={city} phone={phone} />
      <div className={css.container}>
        <Link className={css.link} to="/medicine" onClick={handleClick}>
          Visit Store
        </Link>
        <StoreInfo rating={rating} status={status} />
      </div>
    </div>
  );
}
