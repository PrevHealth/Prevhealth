import React from "react";

const ProductCard = ({ data, index }) => {
  return (
    <div
      className={` flex ${
        data.id == 1 ? "lg:flex-row " : "lg:flex-row-reverse "
      } flex-col-reverse  justify-center rounded-xl items-cente gap-10 border-[2px] lg:p-10 p-5`}
    >
      <div className="flex flex-col  justify-start">
        <span>
          {data.heading && (
            <h1 className="text-primary text-[24px] italic font-bold  ">
              {data.heading}
            </h1>
          )}
        </span>
        <span>
          {data.title && (
            <span className="text-[24px] text-secondary font-medium">
              {data.title}
            </span>
          )}
        </span>
        <span className="mt-10">
          {data.subtext && (
            <span className="text-[20px] font-normal">{data.subtext}</span>
          )}
        </span>
      </div>
      <div
        className={`w-full flex  ${
          data.id == 1 ? "lg:justify-end" : "lg:justify-start"
        } items-center justify-center`}
      >
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
