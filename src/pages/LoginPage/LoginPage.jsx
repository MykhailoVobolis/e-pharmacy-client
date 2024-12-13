import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/auth/selectors.js";

import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import MainLogo from "../../components/MainLogo/MainLogo.jsx";

import css from "./LoginPage.module.css";

export default function LoginPage() {
  const isLoading = useSelector(selectLoading);

  return isLoading ? (
    <CustomLoader />
  ) : (
    <section className={css.pageContainer}>
      <MainLogo />
      <div className={css.container}>
        <MainContent />
        <AuthForm type={"login"} title={"Log in"} link={"/register"} authPromt={"Don't have an account?"} />
      </div>
    </section>
  );
}
