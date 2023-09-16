import React, { useState } from "react";
import tab from "./tab.jpg";
import TabsContainer from "./TabsContainer/TabsContainer";
import { motion } from "framer-motion";

function Tabs() {
  // const [tabState, setTabState] = useState({
  //     tabs: [
  //         { text: 'About us' },
  //         { text: 'Why choose us' },
  //         { text: 'Our mission' }
  //     ],

  //     explains: [
  //         { text: 'Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the worlds wonders with you.' },
  //         { text: 'We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.' },
  //         { text: 'Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.' }
  //     ],

  //     currentExplain: [
  //         { text: 'Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the worlds wonders with you.' }
  //     ]

  // })

  // function changeP(index) {
  //     setTabState({
  //         tabs: [
  //             { text: 'About us' },
  //             { text: 'Why choose us' },
  //             { text: 'Our mission' }
  //         ],

  //         explains: [
  //             { text: 'Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the worlds wonders with you.' },
  //             { text: 'We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.' },
  //             { text: 'Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.' }
  //         ],

  //         currentExplain: [
  //             { text: tabState.explains[index].text }
  //         ]
  //     })
  // }

  const [tabState, setTabState] = useState([
    {
      id: 0,
      title: "About us",
      text: "Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the worlds wonders with you.",
      buttons: [
        {
          title: "Get in Touch",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 bg-[#01b3a7] text-slate-100 mr-5 border-2 border-[#01b3a7] hover:text-black hover:border-black hover:bg-white",
        },
        {
          title: "Read More",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 hover:bg-[#01b3a7] hover:border-[#01b3a7] border-2 border-black",
        },
      ],
    },

    {
      id: 1,
      title: "Why choose us",
      text: "We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.",
      buttons: [
        {
          title: "Get in Touch",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 bg-[#01b3a7] text-slate-100 mr-5 border-2 border-[#01b3a7] hover:text-black hover:border-black hover:bg-white",
        },
        {
          title: "Read More",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 hover:bg-[#01b3a7] hover:border-[#01b3a7] border-2 border-black",
        },
      ],
    },

    {
      id: 2,
      title: "Our mission",
      text: "Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry.",
      buttons: [
        {
          title: "Get in Touch",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 bg-[#01b3a7] text-slate-100 mr-5 border-2 border-[#01b3a7] hover:text-black hover:border-black hover:bg-white",
        },
        {
          title: "Read More",
          URL: "#",
          style:
            "duration-200 ease-in-out py-4 px-7 hover:bg-[#01b3a7] hover:border-[#01b3a7] border-2 border-black",
        },
      ],
    },
  ]);

  return (
    <div className="container px-4 py-28 items-center grid lg:grid-cols-2 grid-cols-1">
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <div className="flex justify-center">
          <img src={tab}></img>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <div className="flex justify-center">
          <div className="max-w-[90%]">
            <h3 className="text-4xl font-semibold pb-3 lg:pt-0 pt-10">
              Discover New Horizons
            </h3>
            <TabsContainer tabs={tabState} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Tabs;
