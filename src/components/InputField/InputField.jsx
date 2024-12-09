import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { IMaskInput } from "react-imask";
import clsx from "clsx";

import css from "./InputField.module.css";

export default function InputField({ name, label, type = "text", placeholder, setValue, variant }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={css.inputGroup}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      {type === "tel" ? (
        <IMaskInput
          id={name}
          mask="+{38}(000)000-00-00"
          placeholder={placeholder}
          {...register(name)}
          onAccept={(value) => setValue(name, value)}
          className={`${css.inputField} ${errors[name] ? css.inputError : ""}`}
        />
      ) : (
        <input
          id={name}
          type={type || "text"}
          placeholder={placeholder}
          {...register(name)}
          className={clsx(css.inputField, errors[name] && css.inputError, variant && css[variant])}
        />
      )}
      {errors[name] && (
        <p className={css.errorMessage}>
          <MdError size={16} /> {errors[name]?.message}
        </p>
      )}
    </div>
  );
}
