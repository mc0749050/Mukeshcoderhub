import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import React, { useRef, useState } from "react";
const Projects = () => {
  const projectobj = [
    {
      img: img1,
      name: "Travel Romio",
      paragraph:
        "TravelRomio is your ultimate companion for discovering the world's hidden gems and must-see destinations. We offer personalized travel guides, expert tips, and curated itineraries to help you explore with ease and confidence.",
      link: "http://travelromio.online/",
    },
    {
      img: img2,
      name: "Food Ecomerce",
      paragraph:
        "Mukesh Kumar's latest project is a food e-commerce website designed to revolutionize the online grocery shopping experience. The platform will offer a wide range of fresh and packaged foods, catering to diverse culinary preferences.",
      link: "https://mc0749050.github.io/Food-ecomerce-website-/",
    },
    {
      img: img3,
      name: "Todo App",
      paragraph:
        "Mukesh Kumar's Todo app is a sleek and intuitive tool designed to help users manage their tasks efficiently. It features an easy-to-use interface that allows for quick task addition, categorization, and prioritization. With reminders and due date alerts.",
      link: "https://mc0749050.github.io/Todo/",
    },
    {
      img: img4,
      name: "Calculator",
      paragraph:
        "Mukesh Kumar's Calculator app project focuses on providing a simple yet powerful tool for performing a wide range of mathematical calculations. The app features a clean, user-friendly interface that supports basic arithmetic operations as well as advanced functions like trigonometry and logarithms.",
      link: "https://mc0749050.github.io/React-calculator/",
    },
    {
      img: img5,
      name: "Cricket Game",
      paragraph:
        "Mukesh Kumar's cricket game project aims to bring the excitement of cricket to digital platforms. The game features realistic graphics, intuitive controls, and multiple gameplay modes, allowing players to experience everything from quick matches to full tournaments.",
      link: "https://mc0749050.github.io/Cricket-Game/",
    },
    {
      img: img6,
      name: "Intrest Calculator",
      paragraph:
        "Mukesh Kumar's interest calculator project is designed to help users quickly and accurately compute interest on various financial instruments. The app supports both simple and compound interest calculations, catering to different financial needs.",
      link: "https://mc0749050.github.io/Intrest-calculator-/",
    },
    {
      img: img7,
      name: "Music Player",
      paragraph:
        "Mukesh Kumar's music player app project aims to deliver a high-quality audio experience with a sleek, intuitive interface. The app supports a wide range of audio formats, ensuring compatibility with all your favorite tracks.",
      link: "https://mc0749050.github.io/Music---website-/",
    },
    {
      img: img8,
      name: "Codewithmukesh",
      paragraph:
        "Mukesh Kumar's CodeWithMukesh project is an innovative platform designed to provide coding enthusiasts with comprehensive resources and tutorials. The website features in-depth guides on various programming languages and technologies.",
      link: "https://codewithmukesh.online/",
    },
  ];

  const divRefs = useRef({});
  const [targetDiv, setTargetDiv] = useState("");

  const handleInputChange = (event) => {
    setTargetDiv(event.target.value);
  };

  const handleClick = () => {
    if (divRefs.current[targetDiv]) {
      divRefs.current[targetDiv].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setTargetDiv("");
    }
  };

  return (
    <div className="w-[100vw] text-center font-sans h-[100vh]">
      <h1 className="text-[37px] font-[500] mt-6 font-[Roboto]">Projects</h1>
      <p className="text-[12px] leading-relaxed text-left font-sans mt-6 w-[85%] ml-[7.5%]">
        Welcome to my Projects page! I'm Mukesh Kumar, founder of MukeshCoderHub
        and the creative force behind TravelRomio. With a passion for coding and
        web development, I've created a diverse portfolio showcasing innovative
        solutions and engaging user experiences. From developing dynamic travel
        platforms to crafting personal portfolio websites, my projects reflect a
        commitment to quality and functionality. Explore my work to see how I
        blend technology and creativity to deliver exceptional digital
        experiences.
      </p>
      <div>
        <input
          className="w-[62vw] h-[43px] bg-[#F4E9DC] px-[3vw]  rounded-l-full mt-8"
          type="text"
          placeholder="Search Projects.."
          value={targetDiv}
          onChange={handleInputChange}
        />{" "}
        <button
          onClick={handleClick}
          className="w-[20vw] h-[43px] bg-[#A17659] rounded-r-full text-[#DCC0A9] mt-8 "
        >
          Search
        </button>
      </div>

      {projectobj.map((item) => (
        <div
          key={item.name}
          ref={(el) => (divRefs.current[item.name] = el)}
          className="w-[85%] h-[220px] bg-[#F4E9DC] ml-[7.5%] mt-14 rounded-[25px] flex"
        >
          <div className="bg-[#A17659] h-[100%] w-[40%] rounded-[25px] text-center ">
            <img className="w-full" src={item.img} />
          </div>
          <div className="w-[60%]">
            <h1 className="font-sans font-[500] text-[17px] mt-6">
              {item.name}
            </h1>{" "}
            <p className="text-[8px] font-sans text-center w-[80%] ml-[10%]  mt-2 mb-6">
              {item.paragraph}
            </p>
            <a
              className=" rounded-[15px] text-[#DCC0A9] py-[10px] px-[27px] bg-[#A17659]"
              href={item.link}
            >
              Explore
            </a>
          </div>
        </div>
      ))}
      <div className="w-[100vw] h-[70px] "></div>
    </div>
  );
};
export default Projects;
