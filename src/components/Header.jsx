import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { DataContext } from "../data-store/Datacontextapi";
const Header = () => {
  const { sidebar, setsidebar } = useContext(DataContext);

  return (
    <div className="flex justify-between py-[15px] px-[25px] font-[Roboto] all">
      <div>
        <p className="text-[25px]">Mukesh</p>
        <p className="text-[10px] mt-[-8px] ml-2 font-[500]">Desh Ka Coder</p>
      </div>
      {sidebar === false ? (
        <HiMenuAlt1
          onClick={() => {
            setsidebar((prevState) => !prevState);
          }}
          className="text-[40px]"
        />
      ) : (
        <RxCross2
          onClick={() => {
            setsidebar((prevState) => !prevState);
          }}
          className="text-[40px]"
        />
      )}
    </div>
  );
};
export default Header;
