import React from "react";

const Table = ({ payout, data }) => {
  return (
    <div className=" w-full">
      <table className="w-full text-[14px]  text-[Galano Grotesque]  leading-[20px] font-normal text-['#1a181e]">
        <thead className="bg-[#f2f2f2] text-[14px] text-[Galano Grotesque]  leading-[20px] font-normal text-['#1a181e] text-left  ">
          <tr>
            <th className="py-[10px] px-[12px] font-medium text-[#4d4d4d] rounded-l-[4px]">
             Order ID
            </th>
            <th className="py-[10px] px-[12px] font-medium text-[#4d4d4d] ">
            Status
            </th>
            <th className="py-[10px] px-[12px] font-medium marker: text-[#4d4d4d] text-left ">
              Transaction ID
            </th>

            <th className="py-[10px] px-[12px] font-medium  text-[#4d4d4d] text-left  ">
            Refund date
            </th>
            <th
              className={`py-[10px] px-[12px] font-medium text-[#4d4d4d] text-right`}
            >
              Order amount
            </th>
             
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <>
              <tr
                key={item.orderid}
                className={` ${
                  index === data.length - 1
                    ? "border-b-0"
                    : "border-b-2 border-custom-gray-100"
                }`}
              >
                <td className="py-[14px] px-[12px] text-custom-blue-400 font-medium w-64">
                  {payout ? null : item.orderid}
                </td>
                <td className="py-[14px] px-[12px] flex items-center gap-[8px] text-[#1a181e]  w-64">
                  <div
                    className={`h-[8px] w-[8px] rounded-full ${
                      item.status === "Processing"
                        ? "bg-gray-400"
                        : "bg-[#17b31b]"
                    }`}
                  ></div>
                  {item.status}
                </td>
                <td className="py-[14px] px-[12px] text-[#4d4d4d] text-left w-64">
                  {item.transactionid}
                </td>
                <td
                  className={`py-[14px]  text-[#1a181e] px-[12px] text-left w-64`}
                >
                   {item.refundDate}
                </td>
                <td
                  className={`py-[14px] px-[12px] pl-14  text-[#1a181e] text-right w-64`}
                >
                  {item.amount}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;