import pic from "./offer.jpg";
import "./Offers.css";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

function Offers() {
  const offer = {
    id: 0,
    img: pic,
    title: "First-class Impressions are Waiting for You!",
    text: "Our agency offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!",
    URL: "#",
  };

  return (
    <div className="offer relative">
      <div className="h-[500px] overflow-hidden">
        <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
          <ParallaxBannerLayer speed={15}>
            <img className="h-[1000px] object-cover darking" src={offer.img} />
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>

      <div className="absolute top-[25%] w-full flex justify-center">
        <div className=" text-[#ffffff;] text-center px-[auto] max-w-[600px] leading-5">
          <h2 className="xl:text-5xl lg:text-[2.5rem] md:text-4xl sm:text-[2rem] text-[1.5rem] pb-2">
            {offer.title}
          </h2>
          <p className="text-sm leading-7 pb-7">{offer.text}</p>
          <a
            className="sm:py-4 sm:px-7 p-3 bg-[#01b3a7] text-slate-100 border-2 border-[#01b3a7] hover:border-white hover:bg-transparent ease-out duration-200 font-medium cursor-pointer"
            src={offer.URL}
          >
            Book a Tour Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offers;
