import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import ProgressBar from "./ProgressBar";

interface SingleTaskProps {
  status: string;
  task_heading: string;
  progress: number;
  progress_color: string;
  deadline: number;
  assigned_users: number;
  tilted: Boolean;
}

const SingleTask = ({
  status,
  task_heading,
  progress,
  progress_color,
  assigned_users,
  deadline,
  tilted,
}: SingleTaskProps) => {
  let avatars = [];

  for (let index = 0; index < assigned_users; index++) {
    avatars[index] = {
      translate: `translate-x-${(assigned_users - index) * 2}`,
      z_index: `z-[${index + 1}]`,
    };
  }

  return (
    <div className="w-full h-[25vh] mb-8  rounded-lg bg-[#07051A] flex justify-center items-center">
      {/* child */}
      <div
        className={`flex flex-col justify-between items-start rounded-lg w-full h-full bg-[#211A75] p-4  ${
          tilted && "rotate-[6deg] translate-x-5 translate-y-2 z-50"
        } custom_shadow`}
      >
        <div className="task_status_container flex justify-between items-center w-full">
          <div className="flex justify-start items-center">
            <div
              className={`dot w-1 h-1 p-1 rounded-full mr-3 `}
              style={{ backgroundColor: progress_color }}
            ></div>
            <p
              className={`text-[0.9rem] font-medium `}
              style={{ color: progress_color }}
            >
              {status}
            </p>
          </div>

          <BsThreeDots className="text-gray-400" />
        </div>

        <h1 className="task_heading text-[0.8rem] lg:text-[0.8rem] font-medium">
          {task_heading}
        </h1>

        <div className="task_progress_bar w-full">
          <ProgressBar progress={progress} progress_color={progress_color} />
        </div>

        <div className="task_additional_info_container flex justify-between items-center w-full">
          <div
            className={` z-10 avatars_container flex justify-start items-center`}
            style={{ transform: `translateX(-${avatars.length - 2}rem)` }}
          >
            {avatars.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`task_avatars ${item.translate} bg-white  ${item.z_index}`}
                ></div>
              );
            })}
          </div>

          {/* deadline */}
          <p className="flex justify-end items-center text-[0.8rem] truncate z-20">
            <FiClock className="mr-2" /> Due in {deadline} days
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
