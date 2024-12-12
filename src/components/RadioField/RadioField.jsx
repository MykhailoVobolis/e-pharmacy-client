import clsx from "clsx";
import { useFormContext } from "react-hook-form";

import css from "./RadioField.module.css";

export default function RadioField({ name, label }) {
  const { register, watch } = useFormContext();

  const selectedValue = watch(name);

  return (
    <div className={css.radioGroup}>
      <label className={css.label}>{label}</label>
      <div className={css.labelContainer}>
        <label className={css.radioItem} htmlFor="cash">
          <input className={css.hiddenRadioButton} id="cash" type="radio" value="cash" {...register(name)} />
          <span className={css.customRadio}></span>
          <span
            className={clsx(css.labelText, {
              [css.activeText]: selectedValue === "cash",
            })}>
            Cash On Delivery
          </span>
        </label>
        <label className={css.radioItem} htmlFor="bank">
          <input className={css.hiddenRadioButton} id="bank" type="radio" value="bank" {...register(name)} />
          <span className={css.customRadio}></span>
          <span
            className={clsx(css.labelText, {
              [css.activeText]: selectedValue === "bank",
            })}>
            Bank
          </span>
        </label>
      </div>
    </div>
  );
}
