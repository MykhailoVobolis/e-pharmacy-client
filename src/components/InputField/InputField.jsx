import { useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { IMaskInput } from "react-imask";
import clsx from "clsx";

import css from "./InputField.module.css";

export default function InputField({ name, label, type = "text", placeholder, setValue, variant }) {
  const location = useLocation();

  const adjustedVariant =
    location.pathname === "/medicine" ? "registerModal" : location.pathname === "/cart" ? "cartPage" : variant;
  const labelVariant = location.pathname === "/cart" ? "cartLabel" : "";
  const errorMessageVariant = location.pathname === "/cart" ? "cartErrorMessage" : "";

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={css.inputGroup}>
      <label className={clsx(css.label, css[labelVariant])} htmlFor={name}>
        {label}
      </label>
      {type === "tel" ? (
        <IMaskInput
          id={name}
          mask="+{38}(000)000-00-00"
          placeholder={placeholder}
          {...register(name)}
          onAccept={(value) => setValue(name, value)}
          className={clsx(css.inputField, errors[name] && css.inputError, adjustedVariant && css[adjustedVariant])}
        />
      ) : (
        <input
          id={name}
          type={type || "text"}
          placeholder={placeholder}
          {...register(name)}
          className={clsx(css.inputField, errors[name] && css.inputError, adjustedVariant && css[adjustedVariant])}
        />
      )}
      {errors[name] && (
        <p className={clsx(css.errorMessage, css[errorMessageVariant])}>
          <MdError size={16} /> {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
