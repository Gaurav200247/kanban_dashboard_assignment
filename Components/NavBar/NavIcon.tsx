import React, { ReactNode } from "react";

interface NavIconProps {
  icon: any;
  popup_value: ReactNode;
  active_icon: Boolean;
  active_popup: Boolean;
}

const NavIcon = ({
  icon,
  popup_value,
  active_icon,
  active_popup,
}: NavIconProps) => {
  return (
    <div className="flex justify-center items-center mx-2 lg:mx-4 relative">
      <p
        className={` ${
          active_popup ? "bg-[#E328AF]" : "bg-blue-400"
        } absolute top-[-8px] right-[-7px] rounded-full w-5 h-5 flex justify-center items-center  text-[0.7rem] text-black font-bold`}
      >
        {popup_value}
      </p>
      <p
        className={`${
          active_icon ? "text-[#7879F1]" : "text-[#464366]"
        } text-[1.4rem]`}
      >
        {icon}
      </p>
    </div>
  );
};

export default NavIcon;
