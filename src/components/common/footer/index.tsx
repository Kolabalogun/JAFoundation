import { Link } from "react-router-dom";
import { EventLinks, NavLinks, SocialLinks } from "./links";

import phone from "../../../assets/phone-solid.svg";
import mail from "../../../assets/envelope-solid.svg";
import location from "../../../assets/location-dot-solid.svg";

const Footer = () => {
  return (
    <section className="bg-[#262626]  py-40">
      <div className="center flex justify-between items-start">
        <div style={{ flex: 2 }} className="flex flex-1 flex-col">
          <div className="text-white">
            <p className="font-semibold">JA FOUNDATION</p>
          </div>

          <div className="flex gap-4 mt-5">
            {SocialLinks.map((social) => (
              <a className="border rounded-md p-1 cursor-pointer">
                <img src={social.img} alt={social.title} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-white">
            <p className="font-semibold">LINKS</p>
          </div>

          <div className="flex flex-col text-white gap-4 mt-5">
            {NavLinks.map((social) => (
              <Link to={social.link}>
                <p className="text-sm">{social.title}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-white">
            <p className="font-semibold">EVENTS</p>
          </div>

          <div className="flex flex-col text-white gap-4 mt-5">
            {EventLinks.map((social) => (
              <Link to={social.link}>
                <p className="text-sm font-medium ">{social.title}</p>
                <p className="text-xs text-[#b11a85] mt-3 font-medium">
                  {social.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="text-white">
            <p className="font-semibold">HAVE ANY QUESTION?</p>
          </div>

          <div className="flex flex-col text-white gap-5 mt-5">
            <div className="flex items-center gap-5">
              <img src={location} alt="" className="h-4" />
              <p className="text-sm font-medium">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <a href="" className="flex items-center gap-5">
              <img src={phone} alt="" className="h-4" />
              <p className="text-sm font-medium">+1 234 5677 890</p>
            </a>
            <a href="" className="flex items-center gap-5">
              <img src={mail} alt="" className="h-4" />
              <p className="text-sm font-medium">jafoundation@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
