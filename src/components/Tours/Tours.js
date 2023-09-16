import Tour from "./Tour/Tour";
import { useState } from "react";
import tour1 from "./tour-1.jpg";
import tour2 from "./tour-2.jpg";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import Wrapper from "../../hoc/Wrapper";
import { motion } from "framer-motion";

function Tours() {
  const [tours, setTours] = useState([
    {
      id: 0,
      img: tour1,
      title: "Benidorm, Spain",
      rating: (
        <div className="flex text-yellow-400">
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStarOutline></IoIosStarOutline>
        </div>
      ),
      reviews: "4 customer reviews",
      text: "Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...",
      URL: "#",
      price: "$790",
      // count: 0
    },

    {
      id: 1,
      img: tour2,
      title: "Mauritius Island, Africa",
      rating: (
        <div className="flex text-yellow-400">
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStar></IoIosStar>
          <IoIosStarHalf></IoIosStarHalf>
        </div>
      ),
      reviews: "5 customer reviews",
      text: "The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...",
      URL: "#",
      price: "$890",
      // count: 0
    },
  ]);

  return (
    <Wrapper>
      <h3 className="text-center text-4xl font-semibold pb-10 pt-32">
        Hot Tours
      </h3>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-0 sm:gap-8 md:gap-0">
        {tours.map((item,index) => {
          const dir = index % 2 === 0 ? 1 : -1;
          return (
            <motion.div
              initial={{ x: dir * 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Tour tours={item} key={`tours-${item.id}`} />
            </motion.div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Tours;
