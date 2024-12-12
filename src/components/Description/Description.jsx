import descriptionProduct from "../../data/descriptionProduct.json";

import css from "./Description.module.css";

export default function Description() {
  const {
    description,
    antioxidantProperties,
    antiDiabeticEffects,
    heartHealth,
    antiCancerProperties,
    immuneSupport,
    digestiveAid,
  } = descriptionProduct;

  return (
    <div>
      <p className={css.description}>{description}</p>
      <ul className={css.descriptionList}>
        <li>
          <span className={css.descriptionItemName}>Medicinal Uses: Antioxidant Properties: </span>
          {antioxidantProperties}
        </li>
        <li>
          <span className={css.descriptionItemName}>Anti-Diabetic Effects: </span>
          {antiDiabeticEffects}
        </li>
        <li>
          <span className={css.descriptionItemName}>Heart Health: </span>
          {heartHealth}
        </li>
        <li>
          <span className={css.descriptionItemName}>Anti-Cancer Properties: </span>
          {antiCancerProperties}
        </li>
        <li>
          <span className={css.descriptionItemName}>Immune Support: </span>
          {immuneSupport}
        </li>
        <li>
          <span className={css.descriptionItemName}>Digestive Aid: </span>
          {digestiveAid}
        </li>
      </ul>
    </div>
  );
}
