import { FiMapPin } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import css from "./StoreContacts.module.css";

export default function StoreContacts({ address, city, phone }) {
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(`${address}, ${city}`)}`;
  const digitsOnly = phone.replace(/\D/g, "");

  return (
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
  );
}
