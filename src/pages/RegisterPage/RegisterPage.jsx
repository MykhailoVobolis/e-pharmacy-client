import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors.js";

import MainLogo from "../../components/MainLogo/MainLogo.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const isLoading = useSelector(selectLoading);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <section className={css.pageContainer}>
      <MainLogo />
      <div className={css.container}>
        <MainContent />
        <AuthForm type={"register"} title={"Register"} link={"/login"} authPromt={"Already have an account?"} />
      </div>
    </section>
  );
}
