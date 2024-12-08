import css from "./MainBanner.module.css";

export default function MainBanner() {
  return (
    <section className={css.hero}>
      <div className={css.titleWrapper}>
        <h1 className={css.mainTitle}>Your medication delivered</h1>
        <p className={css.text}>Say goodbye to all your healthcare worries with us</p>
      </div>
    </section>
  );
}
