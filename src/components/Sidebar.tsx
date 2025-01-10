import React from "react";
import app from "../assets/apps.png"
import bell from "../assets/bell.png"
import box from "../assets/box.png"
import calendar from "../assets/calendar.png"
import help from "../assets/help.png"
import logout from "../assets/logout.png"
import pickupCar from "../assets/pickupCar.png"
import settings from "../assets/settings.png"
import like from "../assets/like.png"

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="m-5 flex flex-col gap-5 align-center items-center">
        <div className="px-2 "><img src={app}/></div>
        <div className="px-2 "><img src={pickupCar}/></div>
        <div className="px-2 "><img src={calendar}/></div>
        <div className="px-2 "><img src={like}/></div>
        <div className="px-2 "><img src={box}/></div>
      </div>
      <div className="m-5 flex flex-col gap-5 align-center items-center">
        <div className="px-2 "><img src={bell}/></div>
        <div className="px-2 "><img src={help}/></div>
        <div className="px-2 "><img src={settings}/></div>
        <div className="px-2 "><img src={logout}/></div>
      </div>
    </>
  );
};

export default Sidebar;
