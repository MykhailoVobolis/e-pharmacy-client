import clsx from "clsx";
import AllStore from "../AllStore/AllStore.jsx";
import NearestStore from "../NearestStore/NearestStore.jsx";

import css from "./Stores.module.css";

export default function Stores({ stores, variant }) {
  return (
    <ul
      className={clsx(css.storesContainer, {
        [css.containerVariant]: variant === "nearest",
      })}>
      {stores.map((store) => (
        <li
          key={store._id}
          className={clsx(css.storeItem, {
            [css.itemVariant]: variant === "nearest",
          })}>
          {variant === "nearest" ? (
            <NearestStore
              name={store.name}
              rating={store.rating}
              address={store.address}
              city={store.city}
              phone={store.phone}
              status={store.status}
            />
          ) : (
            <AllStore
              name={store.name}
              rating={store.rating}
              address={store.address}
              city={store.city}
              phone={store.phone}
              status={store.status}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
