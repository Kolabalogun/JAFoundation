import Twitter from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";

import TwitterI from "../../../assets/twitter - Copy.svg";
import InstagramI from "../../../assets/instagram - Copy.svg";

import FB from "../../../assets/fb.svg";
import FBc from "../../../assets/fbwhite.svg";

type NavLinksProps = {
  title: string;
  link: string;
  img?: string;
  img2?: string;
  date?: string;
};

export const NavLinks: NavLinksProps[] = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Articles",
    link: "/articles",
  },
  {
    title: "Donate",
    link: "/donations",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const SocialLinks: NavLinksProps[] = [
  {
    title: "Twitter",
    img: Twitter,
    img2: TwitterI,
    link: "/",
  },
  {
    title: "Instagram",
    img: Instagram,
    img2: InstagramI,
    link: "https://www.instagram.com/jafoundation/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
  },
  {
    title: "Facebook",
    img: FBc,
    img2: FB,
    link: "https://web.facebook.com/profile.php?id=61553071014063",
  },
];
export const EventLinks: NavLinksProps[] = [
  {
    title: "Empoweering Futures",
    date: "Aug 10, 2023",
    link: "/article/1",
  },
];
