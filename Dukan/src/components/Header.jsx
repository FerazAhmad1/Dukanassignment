import { CiCircleQuestion } from "react-icons/ci";
import { RiMessage2Fill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

export const Header = () => {
  return (
    <div className=" flex  justify-between items-center flex-1 p-2">
      <div id="first" className="flex justify-center items-center">
        <h3 className="ml-1.5">Payouts</h3>
        <CiCircleQuestion className="ml-1.5 " />
        <div className=" flex ">
          <p className="ml-1.5 text-xs text-gray-500 ">How it Works</p>
        </div>
      </div>

      <div id="search" className="flex  ml-4    ">
        <label className="flex w-max  ">
          <input
            className=" flex p-1 w-96 border-none outline-none   bg-gray-100"
            type="text"
            placeholder="Search , features , tutorials etc "
          />
        </label>
      </div>

      <div id="headers-Icon" className="flex">
        <RiMessage2Fill className=" w-4 h-4 " />
        <IoMdArrowDropdown />
      </div>
    </div>
  );
};
