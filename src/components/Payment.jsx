import { useContext } from "react";
import { DataContext } from "../data-store/Datacontextapi";
const Payment = () => {
  const cartlist = [
    {
      type: "Basic",
      price: "₹499.00",
      discount: "Save 61%",
      priceafterdiscount: "₹199.00",
      link: "upi://pay?pa=mc0749050@ybl&pn=mukeshcoderhub &am=199&tn=Payment%20for%20services",
      list1: "Maximum 5 pages website",
      list2: "Website delivered in 1 week",
      list3: "Domain name is available",
      list4: ".online Domain is used",
    },
    {
      type: "Normal",
      price: "₹1999.00",
      discount: "Save 73%",
      priceafterdiscount: "₹599.00",
      link: "upi://pay?pa=mc0749050@ybl&pn=mukeshcoderhub &am=599&tn=Payment%20for%20services",
      list1: "Maximum 15 pages website",
      list2: "Website delivered in 2 week",
      list3: "Domain name is available",
      list4: ".in Domain is used",
    },
    {
      type: "Enhance",
      price: "₹4599.00",
      discount: "Save 76%",
      priceafterdiscount: "₹1099.00",
      link: "upi://pay?pa=mc0749050@ybl&pn=mukeshcoderhub &am=1099&tn=Payment%20for%20services",
      list1: "required pages website",
      list2: "Website delivered in 5 week",
      list3: "Domain name is available",
      list4: ".com Domain is used",
    },
  ];
  const setcurrentpage = useContext(DataContext).setcurrentpage;
  const loginstatus = useContext(DataContext).loginstatus;
  const loginCheckfun = (link) => {
    if (loginstatus === "Logout") {
      window.location.href = link;
    } else {
      setcurrentpage("Login");
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] text-center font-sans">
      <h1 className="font-sans font-[500] text-[27px] mt-12">
        Want your own website ?{" "}
      </h1>
      <p className="font-sans text-[13px] mt-6 text-left w-[85%] ml-[7.5%] ">
        &nbsp;&nbsp;&nbsp; Welcome to MukeshCoderHub,I am Mukesh Kumar. your
        go-to solution for affordable and professional website building
        services. With over 3 years of experience in the industry, I specialize
        in creating custom websites tailored to meet your unique needs and
        preferences. Whether you're a small business owner, an entrepreneur, or
        an individual looking to establish an online presence, I offer
        high-quality website development at a low cost. Let me help you bring
        your vision to life with a website that stands out and drives success.
        Contact me today to get started!
      </p>
      <p className="text-[30px] font-sans font-[500] text-center mt-24">
        Packages
      </p>

      {cartlist.map((item) => (
        <div className="w-[85%] h-[70vh] ml-[7.5%] mt-14 rounded-[20px] border-2 border-[#95A8FF]">
          <div className="w-[100%]  border-2 border-[#95A8FF] bg-[#95A8FF] text-center font-sans text-[25px] font-[500] text-[white] rounded-t-[20px] py-[10px]  mt-[-2px]">
            {item.type}
          </div>

          <div className="w-[80%] ml-[10%]">
            <p className="font-sans text-[12px] ml-[-4px]  mt-6">
              {item.type} pakage is for basic level website.{" "}
            </p>
            <div className="flex mt-8 w-[80vw]">
              <p className="font-sans text-[20px] text-gray-500 line-through">
                {item.price}
              </p>
              <p className="ml-4 text-[13px] rounded-full  font-sans uppercase py-[4px] px-[20px] bg-[#6782FF] text-white ">
                {item.discount}
              </p>
            </div>
            <p className="font-sans font-[500] text-[25px] mt-4 text-left ">
              {item.priceafterdiscount}
            </p>
            <p className="font-sans text-[10px] mt-4 text-left">
              Proceed to Pay, over Team will be contact you soon !
            </p>
            <div className="mt-6">
              {" "}
              <a
                className=" py-[9px] text-white font-sans font-[500] bg-[#6782FF] px-[100px] rounded-[5px]"
                href="#"
                onClick={(e) => {
                  loginCheckfun(item.link);
                }}
              >
                PAY
              </a>
            </div>
            <ul className="list-disc text-left font-sans text-[15px] ml-4 mt-16">
              <li>{item.list1}</li>
              <li>{item.list2}</li>
              <li>{item.list3}</li>
              <li>{item.list4}</li>
            </ul>
          </div>
        </div>
      ))}

      <div className=" w-[100vw] mt-[50px] text-transparent">.</div>
    </div>
  );
};
export default Payment;
