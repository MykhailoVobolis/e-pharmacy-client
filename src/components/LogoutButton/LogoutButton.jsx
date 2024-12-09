import toast from "react-hot-toast";
import clsx from "clsx";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations.js";
// import { closeModalMobile } from "../../redux/modal/slice.js";

import css from "./LogoutButton.module.css";

export default function LogoutButton({ variant }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    // dispatch(closeModalMobile());
    dispatch(logOut())
      .unwrap()
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <button className={clsx(css.logoutBtn, css[variant])} onClick={handleClick}>
      <span>Log out</span>
    </button>
  );
}
