import clsx from "clsx";
import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { AiFillStar } from "react-icons/ai";

import css from "./NearestStore.module.css";

export default function NearestStore({ name, rating, address, city, phone, status }) {
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(`${address}, ${city}`)}`;
  const digitsOnly = phone.replace(/\D/g, "");
  const isClose = status === "CLOSE";

  return (
    <div className={css.storeContainer}>
      <div className={css.aboutContainer}>
        <h3 className={css.name}>{name}</h3>
        <div className={css.infoStore}>
          <div className={css.ratingWrapper}>
            <AiFillStar className={css.ratingIcon} size={16} />
            <span className={css.rating}>{rating}</span>
          </div>
          <div className={clsx(css.statusWrapper, isClose && css.statusWrapperClose)}>
            <span className={clsx(css.status, isClose && css.statusClose)}>{status}</span>
          </div>
        </div>
      </div>
      <ul className={css.contactsContainer}>
        <li className={css.addressWrapper}>
          <FiMapPin className={css.mapIcon} size={18} />
          <div className={css.addressContainer}>
            <a className={css.address} href={googleMapsLink} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
            <p className={css.city}>{city}</p>
          </div>
        </li>
        <li className={css.phoneWrapper}>
          <LuPhone className={css.phoneIcon} size={18} />
          <a className={css.phone} href={`tel:${digitsOnly}`}>
            {phone}
          </a>
        </li>
      </ul>
    </div>
  );
}
