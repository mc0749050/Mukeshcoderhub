import profileimg from "../assets/profileimg.jpg";
import logo from "../assets/logo.png";
import { FaSwatchbook } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaWindowRestore } from "react-icons/fa6";
import { FaTeamspeak } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import { useContext } from "react";
import { DataContext } from "../data-store/Datacontextapi";
const Sidenavbar = () => {
  let loginstatus = useContext(DataContext).loginstatus;
  const sidenavbarlinkitems = [
    {
      icon: <IoHomeOutline />,
      name: "Home",
    },
    {
      icon: <FaWindowRestore />,
      name: "Projects",
    },
    {
      icon: <FaTeamspeak />,
      name: "Team",
    },
    {
      icon: <IoIosMail />,
      name: "Contact",
    },
    {
      icon: <IoInformationCircleSharp />,
      name: "About",
    },
    {
      icon: <FaSwatchbook />,
      name: "Course"
    },
    {
      icon: <IoLogInOutline />,
      name: loginstatus,
    },
  ];

  const setcurrentpage = useContext(DataContext).setcurrentpage;

  const username = useContext(DataContext).username;

  return (
    <div className="w-[70vw] h-[100vh] bg-[#ffffff] fixed top-0 z-50 sidenavbar ">
      <div className="w-[100%] ml-[10%] mt-[15%] flex h-[10%] text-center">
        <img className="w-[60px] h-[60px]" src={profileimg} />
        <p className="font-[500] font-[Roboto] mt-4 ml-2">Hi, {username}</p>
      </div>
      <div className="h-[65%] mt-[-20px]">
        <div className="mt-[50px]">
          <ul>
            {sidenavbarlinkitems.map((item) => (
              <li
                onClick={() => {
                  setcurrentpage(item.name);
                }}
                className="flex text-[20px] ml-10 font-sans mt-8"
              >
                {item.icon} <p className="ml-4 mt-[-4px]">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-[30%] mt-[-80px]">
        <img className="w-[140px] m-auto mt-6" src={logo} />
      </div>
    </div>
  );
};
export default Sidenavbar;
