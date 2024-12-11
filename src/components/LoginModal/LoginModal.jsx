import AboutForm from "../AboutForm/AboutForm.jsx";
import AuthFormModal from "../AuthFormModal/AuthFormModal.jsx";

import css from "./LoginModal.module.css";

export default function LoginModal({ onClose }) {
  return (
    <div className={css.modalContainer}>
      <AboutForm title="Log in to your account" description="Please login to your account before continuing." />
      <AuthFormModal onClose={onClose} type={"login"} title={"Log in"} authPromt={"Don't have an account?"} />
    </div>
  );
}
