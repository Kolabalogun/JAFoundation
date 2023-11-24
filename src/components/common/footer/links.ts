import Twitter from "../../../assets/twitter.svg";
import Instagram from "../../../assets/instagram.svg";
import LinkedIn from "../../../assets/linkedin.svg";
import TwitterI from "../../../assets/twitter - Copy.svg";
import InstagramI from "../../../assets/instagram - Copy.svg";
import LinkedInI from "../../../assets/linkedin - Copy.svg";

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
    link: "home",
  },
  {
    title: "About",
    link: "about",
  },
  {
    title: "Portfolio",
    link: "portfolio",
  },
  {
    title: "Contact",
    link: "contact",
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
    link: "/",
  },
  {
    title: "LinkedIn",
    img: LinkedIn,
    img2: LinkedInI,
    link: "/",
  },
];
export const EventLinks: NavLinksProps[] = [
  {
    title: "Empoweering Futures",
    date: "Aug 10, 2023",
    link: "/",
  },
];
