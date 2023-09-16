import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import toursData from "../../components/Data/Data";
import Tour from "../../components/Tours/Tour/Tour";
import { useEffect, useState } from "react";
import img from "./preview.png";
import { motion, AnimatePresence } from "framer-motion";

function Cartpage() {
  var Tours = useSelector((state) => state.cart.Tours);
  const [updatedTourData, setUpdatedTourData] = useState([]);

  useEffect(() => {
    var t = [];
    Tours.forEach((element) => {
      t.push(toursData[element.id]);
    });

    setUpdatedTourData(t);

    // return () => {
    //   second;
    // };
  }, [Tours]);

  return (
    <>
      <Header />

      {Tours.length != 0 ? (
        <AnimatePresence onExitComplete={true}>
          <section className="container mt-10">
            {updatedTourData.map((item, index) => {
              const dir = index % 2 === 0 ? 1 : -1;
              return (
                <motion.div
                  initial={{ x: dir * 600, opacity: 0  }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                  exit={{
                    x: -300,
                    transition: {
                      duration: 1,
                    },
                  }}
                  className=""
                >
                  <Tour tours={item} key={`tours-${item.id}`} />
                </motion.div>
              )
            })}
          </section>
        </AnimatePresence>
      ) : (
        <section className="flex items-center flex-col mb-10 relative">
          <img className="max-w-2xl" src={img}></img>
          <h3 className="font-medium text-4xl absolute z-10 bottom-10">
            Cart is empty!
          </h3>
        </section>
      )}

      <Footer />
    </>
  );
}

export default Cartpage;
