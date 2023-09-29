import React from "react";
import { FaPlus } from "react-icons/fa";
import SingleTask from "./SingleTask";

interface SingleTaskType {
  status: string;
  task_heading: string;
  progress: number;
  progress_color: string;
  deadline: number;
  assigned_users: number;
  tilted: Boolean;
}

interface KanBanListProps {
  list_heading: string;
  list_length: number;
  tasks_list: SingleTaskType[];
}

const KanBanList = ({
  list_heading,
  list_length,
  tasks_list,
}: KanBanListProps) => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-start items-start w-full p-2">
      <div className="list_heading_container w-full flex justify-between items-center mb-5 md:mb-10">
        <h1 className="text-[0.9rem] md:text-[1rem] font-semibold">
          {list_heading} ({list_length})
        </h1>

        {/* plus btn */}
        <button
          className={`p-2 md:p-3 rounded-lg ${
            list_heading === "To-Do List"
              ? "bg-[#6418C3]"
              : "text-[#6418C3] bg-[#211A75]"
          }  shadow-md text-[0.9rem] md:text-[1.1rem] cursor-pointer`}
        >
          <FaPlus />
        </button>
      </div>

      <div className="tasks_list_container flex flex-col justify-start items-start w-full">
        {tasks_list?.length > 0 ? (
          tasks_list.map((item, index) => {
            return <SingleTask {...item} key={index} />;
          })
        ) : (
          <div className="bg-[#211A75] p-3 rounded-lg w-full custom_shadow">
            <div className="rounded-lg w-full border-dashed border-2 flex justify-center items-center text-[0.7rem] font-medium border-white p-3 text-[#7879F1] bg-[#15132B]">
              Move Card Here
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KanBanList;
