import React from "react";
import '../../src/index.css'

const AmountCard = ({
  orderNumber,
  title,
  bg,
  color,
  nextPayout,
  orderColor,
}) => {
  const questionMarkImage = color
    ? "https://res.cloudinary.com/dmyost0l3/image/upload/v1704782318/white_svg_cawwpi.svg"
    : "https://res.cloudinary.com/dmyost0l3/image/upload/v1704782319/blackquestion_h0oxbs.svg";

  const rightArrowImage = color
    ? "https://res.cloudinary.com/dmyost0l3/image/upload/v1704746182/rightarrow_mi1xj0.svg"
    : "https://res.cloudinary.com/dmyost0l3/image/upload/v1704746362/bluerightarrow_wwdp7c.svg";

  const cardBackgroundColor = bg || "transparent";
  const containerBackgroundColor = bg || "white";
  const textColor = color || "neutral-600";
  const orderTextColor = orderColor || color || "#146eb4";
  const arrowColor = orderColor || color || "#146eb4";

  return (
    <div className={`rounded-2xl w-full`} style={{ backgroundColor: cardBackgroundColor }}>
      <div
        className={`h-[118px] p-5 ${
          nextPayout ? "rounded-t-lg" : "rounded-lg"
        } shadow flex-col justify-start items-start gap-4 flex box-shadow-amount-card`}
        style={{ backgroundColor: containerBackgroundColor }}
      >
        <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-2 flex">
            <p
              className={`text-${textColor} text-base font-normal font-[Inter] leading-normal`}
            >
              {title}
            </p>
            <img src={questionMarkImage} alt="question mark" />
          </div>
          <div className="self-stretch justify-between items-center flex">
            <div
              className={`text-${textColor} text-[32px] font-[500] font-inter leading-[38px] font-galano font-semibold`}
            >
              ₹2,312.20
            </div>
            {orderNumber && (
              <div className="justify-start items-center flex">
                <div className="justify-start items-start flex">
                  <p
                    className={`text-base font-medium font-galano underline leading-normal`}
                    style={{ color: orderTextColor }}
                  >
                    {orderNumber} orders
                  </p>
                  <img src={rightArrowImage} alt="arrow" className="mt-[3px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {nextPayout && (
        <div className="flex justify-between bg-[#164f82] rounded-lg text-custom-white-100 px-[24px] py-[12px] ">
          <p className="font-galano text-[14px] leading-[20px] font-normal">
            Next payout date:
          </p>
          <p className="font-galano text-[14px] leading-[20px] font-normal">
            Today, {nextPayout}
          </p>
        </div>
      )}
    </div>
  );
};

export default AmountCard;
