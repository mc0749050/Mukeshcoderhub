import { useContext, useRef, useState } from "react";
import { DataContext } from "../data-store/Datacontextapi";
import emailjs from "emailjs-com";
import logo from "../assets/logo.png";
const Login = () => {
  let inputvalueName = useRef("");
  const setusername = useContext(DataContext).setusername;
  const setcurrentpage = useContext(DataContext).setcurrentpage;
  function handleChange(event) {
    inputvalueName.current = event.target.value;
  }
  let inputvalueEmail = useRef("");
  function handleChangeEmail(event) {
    inputvalueEmail.current = event.target.value;
    setTo(event.target.value);
  }

  function isValidEmail(email) {
    // Define a regular expression for validating an email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input value against the regular expression
    return emailRegex.test(email);
  }
  const [Errormsg, setErrormsg] = useState("");

  let [successful, setsuccessful] = useState("");
  let setloginstatus = useContext(DataContext).setloginstatus;

  const formsubmit = () => {
    if (
      inputvalueName.current.length <= 0 ||
      inputvalueEmail.current.length <= 0
    ) {
      setErrormsg("Input can't be Empty");
    } else if (!isValidEmail(inputvalueEmail.current)) {
      setErrormsg("Invalid Email");
    } else {
      let newusername = inputvalueName.current;
      setusername(newusername);
      setsuccessful("Login successfull !");
      setloginstatus("Logout");
      setErrormsg("");
      setTimeout(() => {
        setcurrentpage("Home");
      }, 2000);
      sendMail(newusername);
    }
  };

  //Email send function
  const [to, setTo] = useState("");

  const sendMail = async (newusername) => {
    try {
      await emailjs.send(
        "service_g1vt7qj", // Service ID
        "template_tyckx3d", // Template ID
        {
          to,
          name: newusername,
        },
        "uLw1r1sPka7r3QCIk", // User ID
      );
      console.log("Email sent successfully!");
    } catch (error) {
      console.log("Email sent failed!");
    }
  };

  return (
    <form>
      <div className="text-center w-[100%] h-[100%] ">
        <img className="w-[50%] m-auto" src={logo} />
        <p className="font-sans text-[28px] font-[500] text-center ">
          Welcome Back!
        </p>
        <p className="w-[80vw] text-center  ml-[10vw] font-sans text-lime-600 z-40 animate-bounce mt-2">
          {successful}
        </p>
        <div className="font-[Roboto] text-rose-600 animate-bounce mt-2">
          {Errormsg}
        </div>
        <input
          onChange={handleChange}
          className=" w-[75%] h-10 border-1 bg-slate-200 rounded-[20px] p-[5%] mt-8 font-sans text-[16px] font-[400]"
          type="text"
          placeholder="Enter Your Name.."
          required
        />
        <input
          value={to}
          onChange={handleChangeEmail}
          className="w-[75%] h-10 border-1 bg-slate-200 rounded-[20px] p-[5%] mt-8 font-sans text-[16px] font-[400]"
          type="email"
          placeholder="Enter your Gmail.."
          required
        />
        <button
          className=" w-[78%] py-[2.5%] text-[16px] font-[400] mt-8 bg-[#A17659] text-[white] rounded-[20px]"
          onClick={formsubmit}
          type="button"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default Login;
