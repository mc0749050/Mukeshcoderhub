import Home from "./Home";
import { useContext } from "react";
import { DataContext } from "../data-store/Datacontextapi";
import About from "./About";
import Projects from "./Projects";
import Contect from "./Contect";
import Team from "./Team";
import Login from "./Login";
import Payment from "./Payment";
import Course from "./Course";
const Mainbody = () => {
  // pagechanging function
  const currentpage = useContext(DataContext).currentpage;
  let setloginstatus = useContext(DataContext).setloginstatus;
  let setusername = useContext(DataContext).setusername;
  let page;
  if (currentpage === "Logout") {
    setTimeout(() => {
      setloginstatus("Login");
      localStorage.removeItem("username");
      setusername("User");
    }, 1000);

    page = <Home />;
  } else if (currentpage === "Home") {
    page = <Home />;
  } else if (currentpage === "Projects") {
    page = <Projects />;
  } else if (currentpage === "Contact") {
    page = <Contect />;
  } else if (currentpage === "Team") {
    page = <Team />;
  } else if (currentpage === "About") {
    page = <About />;
  } else if (currentpage === "Login") {
    page = <Login />;
  } else if (currentpage === "Payment") {
    page = <Payment />;
  }
  else if (currentpage === "Course"){
    page = <Course />
  }

  return <div>{page}</div>;
};
export default Mainbody;
