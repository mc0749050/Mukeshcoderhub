import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../assets/teamlogo1.jpg";
const Team = () => {
  return (
    <div className="w-[100vw] text-center">
      <h1 className="font-[500] font-[Roboto] text-[35px] text-[#A17659] inline mt-14">
        Team
      </h1>
      <span className="text-[#A17659] font-[Roboto] text-[15px]  inline">
        @mukeshcoderhub
      </span>
      <div className="w-[70%] text-center mt-[70px] rounded-[15px]  ml-[15%] bg-[#DFDFDF] h-[50vh]  ">
        <div className="w-[100%] text-centet flex justify-center">
          {" "}
          <img src={logo} className="w-[100px] mt-4 rounded-[50%] " />
        </div>
        <h1 className="font-[Roboto] font-[500] text-[22px] mt-4 ">
          Mukesh Kumar
        </h1>
        <p className="font-[Roboto] text-[15px] mt-2 text-[#A17659] ">
          Founder
        </p>
        <p className="text-center w-[80%] ml-[10%] mt-8 text-[9px]">
          Hello, I'm Mukesh Kumar, the founder of MukeshCoderHub. With over 4
          years of experience as a software developer, I've honed my skills in
          various programming languages and technologies. My journey in the tech
          world has been driven by a passion for coding and innovation.{" "}
        </p>
        <div className="flex text-[18px] w-[50%] ml-[25%] mt-6 justify-around">
          <a href="https://www.facebook.com/Mukesh Kumar" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/mukeshjaat_20" target="_blank">
            <AiFillInstagram />
          </a>
          <a
            href="https://wa.me/9352577689?text=Hello,how mukeshcoderhub can help you.."
            target="_blank"
          >
            <IoLogoWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Team;
