import { HiOutlineLightningBolt } from "react-icons/hi";

import css from "./FeaturesList.module.css";

export default function FeaturesList() {
  const features = [
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed",
  ];

  return (
    <ul className={css.featureContainer}>
      {features.map((feature, index) => (
        <li className={css.featureItem} key={index}>
          <HiOutlineLightningBolt className={css.featureIcon} />
          {feature}
        </li>
      ))}
    </ul>
  );
}
