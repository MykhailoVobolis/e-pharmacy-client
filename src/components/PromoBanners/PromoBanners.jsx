import Banner from "../Banner/Banner.jsx";

import css from "./PromoBanners.module.css";

export default function PromoBanners() {
  const bannersData = [
    { href: "/medicine", number: 1, name: "Huge Sale", value: "70%", action: "Shop now" },
    { href: "/home", number: 2, name: "Secure delivery", value: "100%", action: "Read more" },
    { href: "/medicine", number: 3, name: "Off", value: "35%", action: "Shop now" },
  ];

  return (
    <section className={css.promoSection}>
      <ul className={css.bannersList}>
        {bannersData.map((banner, index) => (
          <li key={index} className={css.bannerItem}>
            <Banner
              href={banner.href}
              number={banner.number}
              name={banner.name}
              value={banner.value}
              action={banner.action}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
