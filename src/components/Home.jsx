import { useContext } from "react";
import { DataContext } from "../data-store/Datacontextapi";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
const Home = () => {
  const setcurrentpage = useContext(DataContext).setcurrentpage;
  // Create a reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Mukesh Coder Hub",
        "If you want your own Website then click on button below",
      ],
      typeSpeed: 75,
      backSpeed: 80,
      loop: true,
      startDelay: 2000,
    };

    // Create a new Typed instance and pass the reference to the element
    const typed = new Typed(el.current, options);

    // Destroy the Typed instance during cleanup to stop the animation
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-[100%] h-[80vh] text-center">
      <h1 className="text-[40px] font-sans font-[600] pt-10">Welcome to</h1>
      <p className=" w-[80%] ml-[10%] text-[20px] font-sans font-[500] text-black">
        <span className="font-sans" ref={el}></span>
      </p>

      <button
        onClick={() =>
          setTimeout(() => {
            setcurrentpage("Payment");
          }, 1000)
        }
        className=" animate-bounce px-10 text-[18px] text-[white] rounded-[100px] mt-[100px] bg-[#A17659] py-2 font-[sans] hover:bg-transparent focus:border-[0.8px] focus:border-[black] focus:text-[black]"
      >
        Place an order
      </button>
    </div>
  );
};
export default Home;
