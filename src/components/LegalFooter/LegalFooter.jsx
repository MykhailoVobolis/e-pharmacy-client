import css from "./LegalFooter.module.css";

export default function LegalFooter() {
  return (
    <ul className={css.legalList}>
      <li className={css.legalItem}>© E-Pharmacy 2023. All Rights Reserved</li>
      <li className={css.legalItem}>Privacy Policy</li>
      <li className={css.legalItem}>Terms & Conditions</li>
    </ul>
  );
}
