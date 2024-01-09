import React, { useState } from "react";
import AmountCard from "../Components/AmountCard";
import Table from "../Components/Table";
import { payments, refunds } from "../utils/data";

function Payout() {
  return (
    <div className="m-[32px] max-h-svh overflow-scroll-y">
      {/* overview tab */}
      <div className="flex justify-between items-center">
        <p className="leading-[28px] font-semibold font-galano text-[20px] text-[#1a181e] ">
          Overview
        </p>
        <div className="w-[140px] h-[36px] rounded-[4px] flex items-center  px-[14px] pb-[8px] gap-x-[6px] bg-[#ffffff] border-[1px] border-[#d9d9d9]">
          <p className="leading-[24px] text-[16px] font-normal font-galano text-[#4D4D4D]   ">
            This Month
          </p>
          <img
            src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704807284/arrodown_rdlxkv.svg"
            alt="dropdown"
            className="w-4 mt-1"
          />
        </div>
      </div>

      {/* amount cards */}

      <div className="mt-[24px] flex justify-between gap-x-[20px] w-full">
        <AmountCard
          title={"Next Payout"}
          orderNumber={23}
          bg={"#216eb4"}
          color="white"
          nextPayout={"04:00PM"}
        />

        <AmountCard
          title={"Amount Pending"}
          orderNumber={13}
          orderColor={"#146eb4"}
        />
        <AmountCard title={"Amount Processed"} />
      </div>

      {/* table and tabs */}

      <div className=" mt-[32px] ">
        <div>
          <p className="text-[20px] font-galano leading-[28px] font-semibold text-[#1a181e] ">
            Transactions | This Month
          </p>
          <div className="mt-[20px] flex gap-[16px]">
            <button
              className={`py-[6px] px-[16px] bg-custom-gray-200 font-inter  rounded-full text-sm text-custom-gray-600`}
            >
              Payouts (22)
            </button>
            <button
              className={`py-[6px] px-[16px] bg-[#146eb4] font-inter rounded-full text-sm text-[#fff]`}
            >
              Refunds (6)
            </button>
          </div>

          <div className=" mt-[24px] p-[12px] shadow-sm shadow-[rgba(26, 24, 30, 0.04)] box-shadow-table pb-0 rounded-[8px] bg-white">
            {/* table input and filter */}

            <div className="flex items-center justify-between ">
              <div className="px-[16px] py-[10px] border border-custom-gray-300 rounded flex gap-[8px]  w-60  text-custom-gray-600 items-center ">
                <img
                  src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704744891/search_qx2ki6.svg"
                  alt="search-icon"
                  className="mt-[2px]"
                />
                <input
                  className="font-galano w-full bg-inherit placeholder-[#999]
                text-[14px] leading-[20px] pb-[3px]
                "
                  type="text"
                  placeholder="Order ID or transaction ID"
                />
              </div>

              <div className="flex gap-[20px] ">
                <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-custom-gray-300 rounded bg-white text-custom-gray-700">
                  <p>Sort</p>

                  <img
                    src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704746180/sortbtn_riji7m.svg"
                    alt="sort svg"
                  />
                </div>

                <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-custom-gray-300 rounded bg-white text-custom-gray-700">
                  <img
                    src="https://res.cloudinary.com/dmyost0l3/image/upload/v1704746181/downloadbtn_unkgtw.png"
                    alt="download svg"
                  />
                </div>
              </div>
            </div>

            {/* table */}
            <div className="mt-[10px] ">
              <Table data={refunds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payout;
