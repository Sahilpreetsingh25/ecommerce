import React from "react";

const DiscountBanner: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-6 rounded-lg md:p-8">

      <div className="flex-1">
        <p className="lg:text-2xl md:text-base">1 March 2021 - 30 March 2021</p>
        <h2 className="text-xl md:text-2xl lg:text-6xl font-bold mt-2">
          Discount Up To <br /> 50% All Items
        </h2>
      </div>

      <div className="flex-1 flex justify-center mt-4 md:mt-0">
        <img
          src="https://images.pexels.com/photos/1591055/pexels-photo-1591055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Discount Banner"
          className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default DiscountBanner;
