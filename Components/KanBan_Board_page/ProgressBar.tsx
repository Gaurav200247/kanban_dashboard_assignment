import React from "react";

interface ProgressBarProps {
  progress_color: string;
  progress: number;
}

const ProgressBar = ({ progress, progress_color }: ProgressBarProps) => {
  return (
    <div className="w-full flex justify-start items-start bg-[#1E1C3A] h-2 rounded-md overflow-hidden shadow-md">
      <div
        className={`progress_bar  h-full`}
        style={{ backgroundColor: progress_color, width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
