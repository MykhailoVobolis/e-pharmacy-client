import { Link } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import css from "./SocialMediaList.module.css";

export default function SocialMediaList() {
  const socialMediaLinks = [
    { href: "https://www.facebook.com/goITclub/", icon: TfiFacebook, size: 20 },
    { href: "https://www.instagram.com/goitclub/", icon: AiFillInstagram, size: 28 },
    { href: "https://www.youtube.com/c/GoIT", icon: AiFillYoutube, size: 25 },
  ];

  return (
    <ul className={css.socialListContainer}>
      {socialMediaLinks.map(({ href, icon: Icon, size }, index) => (
        <li key={index}>
          <Link className={css.link} to={href}>
            <Icon className={css.socialIcon} size={size} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
