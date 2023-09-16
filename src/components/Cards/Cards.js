import card1 from "./card-1.jpg";
import card2 from "./card-2.jpg";
import card3 from "./card-3.jpg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./Cards.css";
import Card from "./Card/Card";
import { motion } from "framer-motion";

function Cards() {
  const cards = [
    {
      id: 0,
      img: card1,
      link: "#",
      title: "Balloon Flights",
    },

    {
      id: 1,
      img: card2,
      link: "#",
      title: "Mountain Holiday",
    },

    {
      id: 2,
      img: card3,
      link: "#",
      title: "Beach Holidays",
    },
  ];

  return (
    <div className="part">
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className=""
      >
        <ul className="container grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-8 md:pt-0 pt-8">
          {cards.map((item) => {
            return <Card data={item} key={`cards-${item.id}`}></Card>;
          })}
        </ul>
      </motion.div>

      <div className="py-10 font-medium hover:font-bold">
        <a href="#" className="flex justify-center items-center">
          <span>Other Tours </span>
          <span className="text-xl pl-1">
            <HiOutlineArrowNarrowRight></HiOutlineArrowNarrowRight>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Cards;
