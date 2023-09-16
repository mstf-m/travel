import { useState } from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { ImHeadphones } from "react-icons/im";
import { AiOutlineFire } from "react-icons/ai";
import { SlWallet } from "react-icons/sl";
import Serv from "./Serv/Serv";
import { motion } from "framer-motion";

function Servs() {
  const servs = [
    {
      id: 0,
      logo: <HiOutlineAdjustments></HiOutlineAdjustments>,
      title: "Personalized Matching",
      text: "Our unique matching system lets you find just the tour you want for your next holiday.",
      URL: "#",
    },
    {
      id: 1,
      logo: <FaGlobeAmericas></FaGlobeAmericas>,
      title: "Wide Variety of Tours",
      text: "We offer a wide variety of personally picked tours with destinations all over the globe.",
      URL: "#",
    },
    {
      id: 2,
      logo: <AiOutlineStar></AiOutlineStar>,
      title: "Highly Qualified Service",
      text: "Our tour managers are qualified, skilled, and friendly to bring you the best service.",
      URL: "#",
    },
    {
      id: 3,
      logo: <ImHeadphones></ImHeadphones>,
      title: "24/7 Support",
      text: "You can always get professional support from our staff 24/7 and ask any question you have.",
      URL: "#",
    },
    {
      id: 4,
      logo: <AiOutlineFire></AiOutlineFire>,
      title: "Handpicked Hotels",
      text: "Our team offers only the best selection of affordable and luxury hotels to our clients.",
      URL: "#",
    },
    {
      id: 5,
      logo: <SlWallet></SlWallet>,
      title: "Highly Qualified Service",
      text: "If you find tours that are cheaper than ours, we will compensate the difference.",
      URL: "#",
    },
  ];

  return (
    <div className="container ">
      <h3 className="text-center text-4xl font-semibold pb-10">Our Services</h3>
      <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 sm:mx-4 mx-12">
        {servs.map((item) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.42, 0, 0.58, 1],
              }}
            >
              <Serv servs={item} key={`servs-${item.id}`} />
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
}

export default Servs;
