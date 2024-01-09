import React from "react";

const AmountCard = ({
  orderNumber,
  title,
  bg,
  color,
  nextPayout,
  orderColor,
}) => {
  return (
    <div
      style={{ backgroundColor: bg ? bg : "transparent" }}
      className="rounded-2xl w-full"
    >
      <div
        className={`h-[118px] p-5 } ${
          nextPayout ? "rounded-t-lg" : "rounded-lg"
        } shadow flex-col justify-start items-start gap-4 flex`}
        style={{ backgroundColor: bg ? bg : "white" }}
      >
        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-2 flex">
            <p
              className={`text-${
                color || "neutral-600"
              } text-base font-normal font-[Inter] leading-normal`}
            >
              {title}
            </p>
            <img
              src={color ? "https://res.cloudinary.com/dmyost0l3/image/upload/v1704782318/white_svg_cawwpi.svg" : "https://res.cloudinary.com/dmyost0l3/image/upload/v1704782319/blackquestion_h0oxbs.svg"}
              alt="question mark"
            />
          </div>
          <div className="self-stretch justify-between items-center flex">
            <div
              className={`text-${
                color || "zinc-900"
              } text-[32px] font-[500] font-[Galano Grotesque] leading-[38px]`}
            >
              ₹92,312.20
            </div>
            {orderNumber ? (
              <div className="justify-start items-center flex">
                <div className="justify-start items-start  flex">
                  <p
                    className={`*:text-base font-medium font-['Galano Grotesque'] underline leading-normal`}
                    style={
                      {
                        color:`${orderColor ? orderColor : color ? color :"#146eb4"}` 
                      }
                    }
                  >
                    {orderNumber} orders
                  </p>
                  <img
                    src={
                      color ? "https://res.cloudinary.com/dmyost0l3/image/upload/v1704746182/rightarrow_mi1xj0.svg" : "https://res.cloudinary.com/dmyost0l3/image/upload/v1704746362/bluerightarrow_wwdp7c.svg"
                    }
                    alt="arrow"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {nextPayout ? (
        <div className="flex justify-between bg-[#164f82] rounded-lg text-custom-white-100 px-[24px] py-[12px] ">
          <p className="text-[Galano Grotesque] text-[14px] leading-[20px] font-normal">
            Next payout date:
          </p>
          <p className="text-[Galano Grotesque] text-[14px] leading-[20px] font-normal">
            Today, {nextPayout}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default AmountCard;