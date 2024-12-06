import { Outlet } from "react-router-dom";

import AppBar from "../AppBar/AppBar.jsx";
import Footer from "../Footer/Footer.jsx";
// import ModalWindow from "../ModalWindow/ModalWindow.jsx";
// import ModalMobileMenu from "../ModalMobileMenu/ModalMobileMenu.jsx";

import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.pageContainer}>
      <AppBar />
      <main className={css.mainContainer}>
        <Outlet />
      </main>
      <Footer />
      {/* <ModalWindow />
      <ModalMobileMenu /> */}
    </div>
  );
}
