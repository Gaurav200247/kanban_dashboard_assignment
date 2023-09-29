import React from "react";

interface PageButtonsProps {
  btn_text: String | string | number | undefined;
  btn_icon?: any;
  btn_type: String;
  btn_bg?: String;
  styles?: String;
}

const PageButtons = ({
  btn_text,
  btn_icon,
  btn_type,
  btn_bg,
  styles,
}: PageButtonsProps) => {
  return (
    <button
      className={` ${btn_type === "filled" ? "filled_btn" : "outlined_btn"} ${
        btn_bg || "bg-[#15132B]"
      } ${styles} flex justify-center items-center py-2 px-4 rounded-xl text-[0.5rem]  md:text-[0.9rem] mx-2 text-left`}
    >
      {btn_icon && (
        <span className="mr-2 text-[0.9rem]  md:text-[1.2rem]">{btn_icon}</span>
      )}{" "}
      {btn_text}
    </button>
  );
};

export default PageButtons;
