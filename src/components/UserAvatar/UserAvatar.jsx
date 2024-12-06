import clsx from "clsx";

import { useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors.js";

import css from "./UserAvatar.module.css";

export default function UserAvatar({ variant }) {
  //   const user = useSelector(selectUser);
  const user = {
    name: "Admin",
  };

  const avatarLetter = user?.name ? user.name[0] : null;

  return (
    avatarLetter && (
      <div className={clsx(css.userAvatar, css[variant])}>
        <span className={css.avatarLetter}>{avatarLetter}</span>
      </div>
    )
  );
}
