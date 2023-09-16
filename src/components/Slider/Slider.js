// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import img1 from "./slider-1.jpg"
// import img2 from "./slider-2.jpg"
// import img3 from "./slider-3.jpg"

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// export default () => {
//   return (
//     <Swiper
//     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//       spaceBetween={0}
//       slidesPerView={1}
//       autoplay={true}
//       pagination={{ clickable: true }}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide><div><img src={img1}></img></div></SwiperSlide>
//       <SwiperSlide><div><img src={img2}></img></div></SwiperSlide>
//       <SwiperSlide><div><img src={img3}></img></div></SwiperSlide>
//     </Swiper>
//   );
// };

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./Slider.css";
// import img1 from "./slider-1.jpg"
// import img2 from "./slider-2.jpg"
// import img3 from "./slider-3.jpg"

// // import required modules
// import { Mousewheel, Pagination } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         direction={"vertical"}
//         slidesPerView={1}
//         spaceBetween={30}
//         mousewheel={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Mousewheel, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><div><img src={img1}></img></div></SwiperSlide>
//         <SwiperSlide><div><img src={img2}></img></div></SwiperSlide>
//         <SwiperSlide><div><img src={img3}></img></div></SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "./slider-1.jpg";
import img2 from "./slider-2.jpg";
import img3 from "./slider-3.jpg";
import "@splidejs/react-splide/css";
import "./Slider.css";
import { motion } from "framer-motion";

export default () => {
  const images = [
    { id: 0, img: img1 },
    { id: 1, img: img2 },
    { id: 2, img: img3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 4,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mt-[68px]"
    >
      <div className="relative">
        <Splide
          options={{
            direction: "ttb",
            height: "75vh",
            autoplay: "true",
            interval: 3000,
            type: "loop",
            cover: "true",
          }}
          aria-label="My Favorite Images"
        >
          {images.map((item) => {
            return (
              <SplideSlide>
                <img src={item.img} key={`slider-${item.id}`}></img>
              </SplideSlide>
            );
          })}
        </Splide>

        <div className="md:col-span-10 absolute top-36 md:left-[10%] left-1 text-slate-100 font-body">
          <h6 className="md:text-lg text-[1.14rem]  uppercase">
            Enjoy the Best Destinations with Our Travel Agency
          </h6>
          <h2 className="block md:text-6xl text-[2.5rem] md:pt-4 md:pb-12 pb-9">
            <span>Explore</span>
            <span className="font-black"> The World</span>
          </h2>
          <a className="border-2 px-6 py-4 cursor-pointer">Get in touch</a>
        </div>
      </div>
    </motion.div>
  );
};
