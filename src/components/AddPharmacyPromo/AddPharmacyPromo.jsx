import { Link } from "react-router-dom";
import { useMedia } from "react-use";

import FeaturesList from "../FeaturesList/FeaturesList.jsx";

import css from "./AddPharmacyPromo.module.css";

import mainImageMobile from "../../assets/images/mobile/main-Image-mobile.png";
import mainImageMobile2x from "../../assets/images/mobile/main-Image-mobile@2x.png";
import mainImage from "../../assets/images/main-image.png";
import mainImage2x from "../../assets/images/main-image@2x.png";

export default function AddPharmacyPromo() {
  const isTablet = useMedia("(min-width: 768px)");

  const imageSrc = isTablet ? mainImage : mainImageMobile;
  const imageSrcSet = isTablet ? mainImage2x : mainImageMobile2x;

  const imageWidth = isTablet ? 608 : 295;
  const imageHeight = isTablet ? 406 : 335;

  return (
    <section className={css.AddPharmacyPromoSection}>
      <div className={css.pharmacyPromoContainer}>
        <div className={css.aboutPromoContainer}>
          <h2 className={css.title}>Add the medicines you need online now</h2>
          <p className={css.description}>
            Enjoy the convenience of having your prescriptions filled from home by connecting with your community
            pharmacy through our online platform.
          </p>
          <Link className={css.link} to="/medicine-store">
            Buy medicine
          </Link>
        </div>
        <img
          width={imageWidth}
          height={imageHeight}
          src={imageSrc}
          srcSet={`${imageSrc} 1x, ${imageSrcSet} 2x`}
          alt="Promo image"
        />
      </div>
      <FeaturesList />
    </section>
  );
}
