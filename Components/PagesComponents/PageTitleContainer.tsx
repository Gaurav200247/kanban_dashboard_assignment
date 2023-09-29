import React, { ReactNode } from "react";
import { BsFillArrowLeftCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import { HiUserAdd } from "react-icons/hi";
import { BiCommentDetail } from "react-icons/bi";
import ProgressBar from "../KanBan_Board_page/ProgressBar";
import PageButtons from "./PageButtons";

interface PageDetailsInterface {
  page_title: String;
  page_creator: String;
  created_At: String;
  num_of_comments: number;
  page_status: String;
}
interface CompanyInterface {
  company_logo: String;
  company_name: String;
  company_address: String;
}

interface PageTitleContainerProps {
  page_details: PageDetailsInterface;
  accessed_users: number;
  company_details: CompanyInterface;
  total_progress: number;
}

const PageTitleContainer = ({
  page_details: {
    page_title,
    page_creator,
    created_At,
    num_of_comments,
    page_status,
  },
  accessed_users,
  company_details: { company_logo, company_name, company_address },
  total_progress,
}: PageTitleContainerProps) => {
  const avatars = [
    {
      translate: "translate-x-8",
      z_index: "z-[1]",
    },
    {
      translate: "translate-x-6",
      z_index: "z-[2]",
    },
    {
      translate: "translate-x-4",
      z_index: "z-[3]",
    },
    {
      translate: "translate-x-2",
      z_index: "z-[4]",
    },
  ];

  return (
    <div className="bg-[#15132B] m-2 md:m-5 rounded-lg shadow-md flex justify-between items-center w-[95%] minh-[30vh] p-3 md:p-5">
      {/* left */}
      <div className="page_title_block flex items-start w-full md:w-[60%] lg:w-[70%] ">
        {/* title text*/}
        <p className="flex justify-start items-start md:items-center text-[1.3rem] md:text-[1.5rem] mb-2 font-bold">
          <BsFillArrowLeftCircleFill className="mr-3 text-[#A5A5A5] text-[1.8rem]" />{" "}
          {page_title}
        </p>

        {/* created at */}
        <p className="ml-8 text-[0.6rem] md:text-[0.8rem] text-[#A5A5A5] mb-5">
          Created by {page_creator} on {created_At}
        </p>

        {/* board info */}
        <div className="board_info_container flex justify-start items-center w-full">
          {/* users avatars */}
          <div className="user_avatars hidden lg:flex justify-center items-center">
            {avatars.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ${item.translate} bg-white  ${item.z_index}`}
                ></div>
              );
            })}

            <div className="avatar z-10 flex justify-center items-center p-3 font-semibold bg-pink-500">
              {accessed_users > 5 ? 6 : accessed_users}+
            </div>
          </div>
          {/* invite btn  */}
          <PageButtons
            btn_text="Invite People"
            btn_icon={<HiUserAdd />}
            btn_type="filled"
            btn_bg="bg-[#6418C3]"
          />
          {/* status btn */}
          <PageButtons
            btn_text={page_status}
            btn_type="outlined"
            styles="hidden lg:flex"
          />
          {/* edit btn */}{" "}
          <PageButtons
            btn_text="Edit"
            btn_type="filled"
            btn_bg="bg-[#7879F1]"
            styles="hidden lg:flex"
          />
          {/* comments btn */}
          <PageButtons
            btn_text={`${num_of_comments} Comments`}
            btn_icon={<BiCommentDetail />}
            btn_type="outlined"
          />
        </div>
      </div>

      {/* right */}
      <div className="page_title_block hidden md:flex items-end md:w-[40%] lg:w-[30%]">
        <div className="company_details_container flex justify-between items-center">
          {/* comapny details */}
          <div className="flex flex-col justify-between items-end mx-4">
            <p className="text-right text-[0.9rem] lg:text-[1rem] font-semibold">
              {company_name}
            </p>
            <p className="text-right text-[0.7rem] lg:text-[0.8rem] text-[#A5A5A5]">
              {company_address}
            </p>
          </div>

          {/* company logo */}
          <div className="company_logo mr-4 bg-white rounded-md overflow-hidden p-2">
            <img src={company_logo as string} alt={company_name as string} />
          </div>

          <BsThreeDotsVertical className="text-[1.5rem] text-[#A5A5A5]" />
        </div>

        <div className="progress_container w-full flex justify-between items-center mt-5  text-[0.7rem] lg:text-[0.8rem] font-medium">
          <p className="mr-3 text-right w-[60%] lg:w-[40%] truncate">
            Total Progress {total_progress}%
          </p>

          <div className="flex justify-start items-center w-[40%] lg:w-[60%]">
            <ProgressBar progress_color="#6418C3" progress={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitleContainer;
