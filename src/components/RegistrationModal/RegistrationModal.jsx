import AboutForm from "../AboutForm/AboutForm.jsx";
import AuthFormModal from "../AuthFormModal/AuthFormModal.jsx";

import css from "./RegistrationModal.module.css";

export default function RegistrationModal({ onClose }) {
  return (
    <div className={css.modalContainer}>
      <AboutForm title="Sign Up" description="Before proceeding, please register on our site." />
      <AuthFormModal onClose={onClose} type={"register"} title={"Sign Up"} authPromt={"Already have an account?"} />
    </div>
  );
}
