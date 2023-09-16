import person1 from "./person-1.jpg";
import person2 from "./person-2.jpg";
import person3 from "./person-3.jpg";
import person4 from "./person-4.jpg";
import Person from "./Person/Person";
import { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import { motion } from "framer-motion";

function People() {
  const people = [
    {
      id: 0,
      img: person1,
      name: "Diana Robinson",
      title: "Founder, Owner",
      phone: "+1 323-913-4688",
      URL: "#",
    },

    {
      id: 1,
      img: person2,
      name: "Peter McMillan",
      title: "Travel Agent",
      phone: "+1 323-913-4688",
      URL: "#",
    },

    {
      id: 2,
      img: person3,
      name: "Jill Peterson",
      title: "Tour Consultant",
      phone: "+1 323-913-4688",
      URL: "#",
    },

    {
      id: 3,
      img: person4,
      name: "James Smith",
      title: "PR Manager",
      phone: "+1 323-913-4688",
      URL: "#",
    },
  ];

  return (
    <Wrapper>
      <h3 className="text-center text-4xl font-semibold pb-14 pt-32">
        Different People — One Mission
      </h3>
      <ul className="container grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center lg:gap-0 gap-7">
        {people.map((item, index) => {
          return (
            <motion.div
              initial={{ y: index * 100 + 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Person people={item} key={`servs-${item.id}`} />
            </motion.div>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default People;
