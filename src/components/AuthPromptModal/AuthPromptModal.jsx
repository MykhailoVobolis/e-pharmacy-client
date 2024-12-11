import clsx from "clsx";
import css from "./AuthPromptModal.module.css";

export default function AuthPromptModal({ children, variant, onClick }) {
  return (
    <button className={clsx(css.togleButton, css[variant])} onClick={onClick}>
      {children}
    </button>
  );
}
