import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="xs:mx-5 sm:mx-20 md:mx-30 flex flex-col pb-24 bg-white">
      <div className="xs:border-[1px] xs:border-dark-100 rounded-xl bg-white xs:p-6 mb-2">
        {/* Content Section */}
        <div className="sm:flex flex-col justify-between items-center xs:mb-6 bg-white w-full">
          <div className="flex justify-between w-full items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-dark-400 text-lg font-semibold flex flex-col">
                <span>{title}</span>
                <span className="text-dark-300 text-sm font-normal">
                  {description}
                </span>
              </h1>
            </div>

            {/* Price Section and Button at the Right End */}
            <div className="flex flex-col items-end justify-end mx-3">
              <div className="flex flex-row justify-end items-baseline mb-2">
                <span className="text-dark-400 font-poppins text-lg font-semibold">₹ 29K </span>
                <span className="text-dark-400 text-sm font-medium">/Month</span>
              </div>
              <a
                style={{ textDecoration: 'none' }}
                className="cursor-pointer mt-1 text-right text-info-400 text-sm font-normal tracking-[0.182px]"
                href="#price_section"
              >
                See Pricing Details
              </a>
                        </div>
                         {/* View Number Button */}
              <div className="mt-0">
                <button className="bg-blue-400 rounded-[10px] py-3 px-4 sm:py-3 sm:px-7.5 cursor-pointer w-full flex items-center justify-center font-semibold text-white hover:bg-blue-500 active:bg-blue-600 text-xs sm:text-sm">
                  View Number
                </button>
              </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div id="imagesection" class="grid gap-2 sm:grid-cols-2">
      {image && (
        <div className="w-1/3 bg-red-500">
          <img src={image} alt={title} className="w-auto h-auto rounded-l-lg" />
        </div>
      )}
      </div>
    </div>

  );
};

export default Card;
