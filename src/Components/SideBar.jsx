import React from "react";
import { sideBarOptionDetails } from "../utils/options";
import SidebarOptions from "./SidebarOptions";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="py-[16px] px-[10px]  text-custom-gray-300 h-screen flex flex-col justify-between bg-[#1E2640] text-white ">
      <>
        <div className="flex flex-col gap-y-[24px]  ">
          <div>
            <div
              className=" w-[192px] flex items-center justify-between  gap-x-[12px] 
            
           box-border px-[6px] h-[42px] 
            "
            >
              <div>
                <img
                  className="w-[43px] h-[39px] rounded"
                  src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704737193/enterprise_u6ujq7.png"
                  alt="logo-enterprise"
                />
              </div>

              <div className=" flex justify-between flex-col w-[108px] gap-[4px]">
                <p className="font-galano text-white text-[15px] leading-[22px] ">
                  Nishyan
                </p>
                <p className=" text-custom-gray-300 text-[13px] underline leading-[14px] ">
                  Visit store
                </p>
              </div>

              <div className=" h-full items-center flex">
                <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704744116/Chevron_Down_paqtya.svg" alt="downarrow" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[4px] font-inter text-[#FFF]" >
            {sideBarOptionDetails.map((ele) => {
              return (
                <NavLink key={ele.id} to={ele.path}>
                  <SidebarOptions
                    key={ele.id}
                    svg={ele.svg}
                    title={ele.title}
                    path={ele.path}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </>

      <div className="bg-[#ffffff0d] rounded-[4px] w-[192px] mx-auto">
        <div className="py-[6px] px-[12px] flex items-center gap-[10px]  text-sm ">
          <div className="p-[6px] bg-[#495064] rounded-[4px] ">
            <img src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704744195/wallet_ytnr3g.svg" alt="wallet" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span>Available credits</span>
            <span className="text-white text-sm font-[500]">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;