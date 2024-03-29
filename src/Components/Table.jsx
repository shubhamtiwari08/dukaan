import React from "react";

const Table = ({ payout, data }) => {
  return (
    <div className="w-full overflow-x-auto">
    <table className="w-full text-[12px] lg:text-[14px] font-galano leading-[20px] text-['#1a181e]">
      <thead className="bg-[#f2f2f2] text-[10px] lg:text-[14px] font-galano leading-[20px] font text-['#1a181e] text-left">
        <tr>
          <th className="py-[10px] px-[12px] text-[#4d4d4d] rounded-l-[4px] lg:w-96">
            Order ID
          </th>
          <th className="py-[10px] px-[12px] text-[#4d4d4d] pl-2 lg:pl-10 lg:w-80">
            Status
          </th>
          <th className="py-[10px] px-[12px] text-[#4d4d4d] text-left lg:w-80">
            Transaction ID
          </th>
          <th className="py-[10px] px-[12px] text-[#4d4d4d] text-left lg:w-80">
            Refund date
          </th>
          <th className="py-[10px] px-[12px] text-[#4d4d4d] text-right lg:w-80">
            Order amount
          </th>
        </tr>
      </thead>
  
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.orderid}
            className={`${
              index === data.length - 1
                ? "border-b-0"
                : "border-b-2 border-custom-gray-100"
            }`}
          >
            <td className="py-[14px] px-[12px] text-custom-blue-400 font-semibold lg:w-80">
              {payout ? null : item.orderid}
            </td>
            <td className="py-[14px] px-[12px] flex items-center gap-[8px] text-[#1a181e] pl-2 mt-2 lg:mt-0 lg:pl-10 lg:w-80">
              <div
                className={`h-[10px] w-[10px] mt-[5px] rounded-full ${
                  item.status === "Processing" ? "bg-gray-400" : "bg-[#17b31b]"
                }`}
              ></div>
              {item.status}
            </td>
            <td className="py-[14px] px-[12px] h-8  text-[#4d4d4d] text-left lg:w-80">
              {item.transactionid}
            </td>
            <td
              className={`lg:py-[14px] text-[#1a181e] text-[8px] lg:text-[14px] px-[12px] text-left lg:w-80`}
            >
              {item.refundDate}
            </td>
            <td
              className={`py-[14px] px-[12px] pl-2 text-[#1a181e] text-right lg:w-80`}
            >
              {item.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Table;