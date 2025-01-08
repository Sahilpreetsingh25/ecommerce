import React from 'react';

const CategoryCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
 
      <div className="col-span-1 lg:col-span-3 flex flex-col sm:flex-row lg:justify-center items-center bg-pink-400 rounded-lg p-6 text-white font-bold text-lg lg:text-2xl">
        <div className="text-center lg:text-4xl mb-4 sm:mb-0 sm:mr-6">Home & Living</div>
        <div className="w-32 sm:w-48 md:w-56 lg:w-80 h-32 sm:h-40 md:h-48 lg:h-64 flex justify-center items-center overflow-hidden">
          <img
            src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original"
            alt="Home & Living"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

     
      <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row lg:justify-center items-center bg-lime-400 rounded-lg p-6 text-white font-bold text-lg lg:text-2xl">
        <div className="text-center lg:text-4xl mb-4 sm:mb-0 sm:mr-6">Grocery</div>
        <div className="w-32 sm:w-48 md:w-56 lg:w-80 h-32 sm:h-40 md:h-48 lg:h-64 flex justify-center items-center overflow-hidden">
          <img
            src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original"
            alt="Grocery"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row lg:justify-center items-center bg-orange-400 rounded-lg p-6 text-white font-bold text-lg lg:text-2xl">
        <div className="text-center lg:text-4xl mb-4 sm:mb-0 sm:mr-6">Fashion</div>
        <div className="w-32 sm:w-48 md:w-56 lg:w-80 h-32 sm:h-40 md:h-48 lg:h-64 flex justify-center items-center overflow-hidden">
          <img
            src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KsMrRZaciFcAAAAAAAAAAAAADrJ8AQ/original"
            alt="Fashion"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

     
      <div className="col-span-1 lg:col-span-3 flex flex-col sm:flex-row lg:justify-center items-center bg-teal-700 rounded-lg p-6 text-white font-bold text-lg lg:text-2xl">
        <div className="text-center lg:text-4xl mb-4 sm:mb-0 sm:mr-6">Electronics</div>
        <div className="w-32 sm:w-48 md:w-56 lg:w-80 h-32 sm:h-40 md:h-48 lg:h-64 flex justify-center items-center overflow-hidden">
          <img
            src="https://git-scm.com/images/branching-illustration@2x.png"
            alt="Electronics"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
