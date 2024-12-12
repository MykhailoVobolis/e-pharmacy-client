import css from "./CheckoutStep.module.css";

export default function CheckoutStep({ stepName, stepDescription }) {
  return (
    <div className={css.checkoutStepContainer}>
      <h3 className={css.stepName}>{stepName}</h3>
      <p className={css.stepDescription}>{stepDescription}</p>
    </div>
  );
}
