import Contacts from "./Contacts/Contacts";
import News from "./News/News";
import Links from "./Links/Links";
import { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { RxInstagramLogo } from "react-icons/rx";
import { motion } from "framer-motion";

function Footer() {
  const contacts = [
    {
      id: 0,
      icon: <HiPhone></HiPhone>,
      text: "+1 323-913-4688",
      urlContact: "#",
    },
    {
      id: 1,
      icon: <HiMail></HiMail>,
      text: "info@demolink.org",
      urlContact: "#",
    },
    {
      id: 2,
      icon: <FaLocationArrow></FaLocationArrow>,
      text: "4730 Crystal Springs Dr, Los Angeles, CA 90027",
      urlContact: "#",
    },
  ];

  const news = [
    {
      id: 0,
      new: "Your Personal Guide to 5 Best Places to Visit on Earth",
      date: "May 04, 2019",
      urlNew: "#",
    },
    {
      id: 1,
      new: "Top 10 Hotels: Rating by Wonder Tour Travel Experts",
      date: "May 04, 2019",
      urlNew: "#",
    },
  ];

  const links = [
    {
      id: 0,
      text: "About us",
      urlLink: "#",
    },
    {
      id: 1,
      text: "Our Tours",
      urlLink: "#",
    },
    {
      id: 2,
      text: "Our Team",
      urlLink: "#",
    },
    {
      id: 3,
      text: "Gallery",
      urlLink: "#",
    },
    {
      id: 4,
      text: "Blog",
      urlLink: "#",
    },
  ];

  return (
    <footer>
      <div className="bg-[#162e44]">
        <div className="container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-16 md:gap-8 lg:gap-0 sm:gap-5 gap-10">
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <Contacts contacts={contacts}></Contacts>
          </motion.div>

          <motion.div
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <News news={news}></News>
          </motion.div>

          <motion.div
            initial={{ x: 400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.42, 0, 0.58, 1],
            }}
          >
            <Links links={links}></Links>
          </motion.div>
        </div>
      </div>

      <div className="bg-[#11263a] py-5 flex">
        <div className="container grid sm:grid-cols-3 items-center justify-center sm:gap-0 gap-3">
          <div className="max-w-[23rem] text-xs font-semibold tracking-[0.075em] text-[#5b6b6a] text-center sm:text-left">
            <span>© 2023 Wonder Tour. All Rights Reserved. Design by </span>
            <a className="hover:text-[#01b3a7]" href="#">
              TemplateMonster
            </a>
          </div>

          <div className="sm:order-2 order-first">
            <ul className="flex text-lg font-semibold text-[#5b6b6a] justify-center">
              <li className="p-2">
                <a className="hover:text-[#01b3a7]" href="#">
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
              <li className="p-2">
                <a className="hover:text-[#01b3a7]" href="#">
                  <AiOutlineTwitter></AiOutlineTwitter>
                </a>
              </li>
              <li className="p-2">
                <a className="hover:text-[#01b3a7]" href="#">
                  <AiOutlineGooglePlus></AiOutlineGooglePlus>
                </a>
              </li>
              <li className="p-2">
                <a className="hover:text-[#01b3a7]" href="#">
                  <RxInstagramLogo></RxInstagramLogo>
                </a>
              </li>
            </ul>
          </div>

          <a
            className="order-3 text-xs font-semibold tracking-[0.075em] text-[#5b6b6a] sm:text-right text-center hover:text-[#01b3a7]"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
