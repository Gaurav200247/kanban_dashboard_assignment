import React from "react";
import { FaBars } from "react-icons/fa";
import {
  AiFillDashboard,
  AiOutlineShop,
  AiTwotoneSetting,
} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import {
  BsChatDotsFill,
  BsCalendarEventFill,
  BsPersonVideo3,
  BsChevronRight,
  BsChevronDown,
} from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { RiLayoutGridFill, RiFilePaper2Line } from "react-icons/ri";
import Image from "next/image";

const SideBar = () => {
  const SideBar_Links = [
    {
      icons: <AiFillDashboard />,
      link_title: "Dashboard",
      active_link: false,
      active_icon: false,
      dropdown: false,
      tag: null,
      selected: false,
    },
    {
      icons: <IoMdMail />,
      link_title: "Email",
      active_link: false,
      active_icon: false,
      dropdown: true,
      tag: 17,
      selected: false,
    },
    {
      icons: <BsChatDotsFill />,
      link_title: "Chat",
      active_link: true,
      active_icon: true,
      dropdown: false,
      tag: null,
      selected: false,
    },
    {
      icons: <RiLayoutGridFill />,
      link_title: "Kanban",
      active_link: true,
      active_icon: true,
      dropdown: true,
      tag: null,
      selected: true,
    },
    {
      icons: <BiSolidContact />,
      link_title: "Contact",
      active_link: true,
      active_icon: true,
      dropdown: false,
      tag: "New",
      selected: false,
    },
    {
      icons: <BsCalendarEventFill />,
      link_title: "Calender",
      active_link: true,
      active_icon: true,
      dropdown: false,
      tag: null,
      selected: false,
    },
    {
      icons: <BsPersonVideo3 />,
      link_title: "Courses",
      active_link: true,
      active_icon: false,
      dropdown: true,
      tag: null,
      selected: false,
    },
    {
      icons: <AiOutlineShop />,
      link_title: "Shop",
      active_link: true,
      active_icon: false,
      dropdown: false,
      tag: null,
      selected: false,
    },
    {
      icons: <RiFilePaper2Line />,
      link_title: "Invoices",
      active_link: true,
      active_icon: true,
      dropdown: true,
      tag: null,
      selected: false,
    },
    {
      icons: <AiTwotoneSetting />,
      link_title: "Settings",
      active_link: true,
      active_icon: true,
      dropdown: false,
      tag: null,
      selected: false,
    },
  ];

  return (
    <div className="bg-[#15132b] text-white w-full h-full shadow-md">
      <div className="logo_container  mt-5 md:mt-0">
        <h1 className="mr-5 text-[1rem] hidden md:inline font-medium">
          weframetech
        </h1>
        <FaBars className="active_link" />
      </div>

      <div className="links_container">
        <h3 className="font-medium mb-3 text-[0.5rem] sm:text-[0.8rem] px-5">
          MAIN MENU
        </h3>

        {/* links list */}
        <ul className="flex flex-col justify-start items-start w-full ">
          {SideBar_Links.map((item, index) => {
            return (
              <li
                key={index}
                className={`single_sidebar_link px-5 ${
                  item.selected && "border-r-4 border-[#6418C3]"
                } `}
              >
                <p className="w-full">
                  {/* icons */}
                  <span
                    className={`${
                      item.selected
                        ? "selected_link"
                        : item.active_icon
                        ? "active_link"
                        : "inactive_link"
                    }  mr-0 md:mr-4 text-[1.3rem] flex justify-center items-center w-full md:w-auto`}
                  >
                    {item.icons}
                  </span>

                  {/* title */}
                  <span
                    className={`${
                      item.selected
                        ? "selected_link"
                        : item.active_icon
                        ? "active_link"
                        : "inactive_link"
                    } font-medium hidden md:inline`}
                  >
                    {item.link_title}
                  </span>
                </p>

                <p className="w-[30%]">
                  {/* tag */}
                  {item.tag && (
                    <span
                      className={`${
                        typeof item.tag === "string"
                          ? "string_tag"
                          : "number_tag"
                      } mr-3 hidden lg:inline`}
                    >
                      {item.tag}
                    </span>
                  )}

                  {/* dropdown btn */}
                  {item.dropdown && (
                    <span
                      className={`active_link font-bold text-[0.9rem] hidden md:inline`}
                    >
                      {item.link_title === "Email" ? (
                        <BsChevronDown />
                      ) : (
                        <BsChevronRight />
                      )}
                    </span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="promo_container">
        <div className="promo_block relative w-[12rem] h-[10rem]">
          <img
            src="/assets/promo_banner_design_1.png"
            alt="promo_banner_design_1"
            className="absolute top-5 left-5"
          />

          <h1 className="w-full font-medium text-[0.9rem]">
            Increase your work with kanban
          </h1>

          <img
            src="/assets/promo_banner_design_2.png"
            alt="promo_banner_design_2"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
