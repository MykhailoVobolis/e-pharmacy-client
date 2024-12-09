import AuthForm from "../../components/AuthForm/AuthForm.jsx";
import MainContent from "../../components/MainContent/MainContent.jsx";
import MainLogo from "../../components/MainLogo/MainLogo.jsx";

import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <section className={css.pageContainer}>
      <MainLogo />
      <div className={css.container}>
        <MainContent />
        <AuthForm type={"login"} title={"Login"} link={"/register"} authPromt={"Don't have an account?"} />
      </div>
    </section>
  );
}
