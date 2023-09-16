import "./Tour.css";
import { useSelector, useDispatch } from "react-redux";
import {
  minusCart,
  plusCart,
  removeFromCart,
  addToCart,
} from "./../../../store/Slices/cartSlice";
import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Tour({ tours }) {
  var t = useSelector((state) => state.cart.Tours)
  var initial = 0;
  const dispatch = useDispatch();
  const [Count, setCount] = useState(initial);

  useEffect(() => {
    t.forEach((element) => {
      if (element.id == tours.id) {
        initial = element.count;
        return;
      }
    });
  }, [])
  

  useEffect(() => {
    t.forEach((element) => {
      if (element.id == tours.id) {
        setCount(element.count);
        return;
      }
    });
  });

  let cartManager = (
    <div className="flex items-center gap-4 font-semibold">
      <div className="manage flex gap-4 text-[#01b3a7] w-[6rem] justify-between h-[3rem] rounded-lg text-lg items-center px-2">
        <span>
          {Count > 1 ? (
            <AiOutlineMinus
              onClick={() => {
                dispatch(minusCart({ id: tours.id }));
              }}
              className='cursor-pointer'
            ></AiOutlineMinus>
          ) : (
            <FaTrashAlt
              onClick={() => {
                dispatch(removeFromCart({ id: tours.id }), setCount(0));
              }}
              className='cursor-pointer'
            ></FaTrashAlt>
          )}
        </span>
        <span style={{userSelect: 'none'}} className="cursor-default">{Count}</span>
        <span>
          <AiOutlinePlus
            onClick={() => {
              dispatch(plusCart({ id: tours.id }));
            }}
            className='cursor-pointer'
          ></AiOutlinePlus>
        </span>
      </div>

      <Link to="/Cart" className="text-[#48c2c2] text-sm font-semibold" style={{userSelect: 'none'}}>
        go to cart
      </Link>
    </div>
  );

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:border-[1px] md:border-[#e1e1e1;] mb-10 relative">
      <div className="overflow-hidden">
        <img
          className="scale-110 hover:scale-100 ease-out duration-500 object-cover w-full h-full"
          src={tours.img}
        ></img>
      </div>

      <div className="flex flex-col justify-center max-w-[80%] md:mx-auto pl-5 lg:py-0 py-8">
        <h5>
          <a
            href={tours.URL}
            className="text-xl font-semibold hover:text-[#01b3a7] cursor-pointer"
          >
            {tours.title}
          </a>
        </h5>

        <div className="flex py-2">
          <div className="pr-3">{tours.rating}</div>
          <a className="text-[#9b9b9b] text-xs hover:text-[#01b3a7] cursor-pointer">
            {tours.reviews}
          </a>
        </div>

        <p className="text-[#9b9b9b] pb-5">{tours.text}</p>

        {Count == 0 ? (
          <span
            onClick={() => {
              dispatch(addToCart({ id: tours.id, count: 1 }));
            }}
            className="border-2 border-[#151515] w-fit px-6 py-3 hover:bg-[#01b3a7] hover:border-[#01b3a7] hover:text-white cursor-pointer duration-200 ease-in-out"
          >
            Buy This Tour
          </span>
        ) : (
          cartManager
        )}
      </div>

      <div className="absolute right-0 top-0 text-white text-xl bg-[#01b3a7] flex justify-center items-center rounded-bl-md p-3 sm:p-1 lg:p-3">
        <span>{tours.price}</span>
      </div>
    </div>
  );
}

export default Tour;
