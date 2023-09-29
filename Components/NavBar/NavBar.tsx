import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCardChecklist, BsCalendarFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import NavIcon from "./NavIcon";

const NavBar = () => {
  const Nav_Icons_list = [
    {
      icon: <IoNotificationsSharp />,
      popup_value: 12,
      active_icon: true,
      active_popup: false,
    },
    {
      icon: <BsCardChecklist />,
      popup_value: 5,
      active_icon: false,
      active_popup: false,
    },
    {
      icon: <BiTask />,
      popup_value: 2,
      active_icon: true,
      active_popup: false,
    },
    {
      icon: <BsCalendarFill />,
      popup_value: 1,
      active_icon: true,
      active_popup: true,
    },
  ];

  return (
    <header className="flex justify-between items-center w-full p-4 md:p-5 bg-[#15132B]">
      <div className="nav_search_bar flex justify-start items-start w-[50%] md:w-[30%] bg-[#201b75] p-2 md:p-3 rounded-3xl">
        <PiMagnifyingGlassBold className="ml-2 mr-3 active_link text-[0.5rem] sm:text-[0.8rem] md:text-[1.1rem]" />
        <input
          className="text-[0.5rem] md:text-[0.9rem] placeholder:text-gray-200 outline-none w-full bg-transparent"
          placeholder="Search Here"
        />
      </div>

      {/* other menus link */}
      <p className="hidden sm:inline underline text-[#6418C3] font-semibold text-[0.8rem]">
        OTHER MENUS
      </p>

      {/* nav notification icons */}
      <ul className="hidden md:flex justify-center items-center">
        {Nav_Icons_list.map((item, index) => {
          return <NavIcon key={index} {...item} />;
        })}
      </ul>

      {/* change language btn */}
      <div className="change_language_btn hidden lg:flex justify-between items-center rounded-full bg-[#211A75] p-3">
        <img src="/assets/us_flag.png" alt="us_flag" />
        <span className="text-[0.8rem] mx-2 font-medium">ENGLISH</span>
        <AiOutlineCaretDown className="text-[#6418C3]" />
      </div>

      {/* user nav dial */}
      <div className="user_nav_dial flex justify-between items-center border-l-2 border-[#1E1C3A]">
        {/* rounded rectangle */}
        <div className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] rounded-lg shadow-md bg-[#C4C4C4] mr-3 ml-2 md:ml-7">
          {" "}
        </div>

        <div className=" flex flex-col justify-between items-start">
          <p className="font-semibold text-[0.7rem] md:text-[0.8rem]">
            Instructor Day
          </p>
          <p className=" text-[0.5rem] md:text-[0.7rem] text-[#7879F1]">
            Super Admin
          </p>
        </div>

        <AiOutlineCaretDown className="text-[#6418C3] ml-3 hidden md:inline" />
      </div>
    </header>
  );
};

export default NavBar;
