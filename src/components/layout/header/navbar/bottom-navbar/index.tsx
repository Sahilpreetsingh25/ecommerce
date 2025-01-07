import React from 'react';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';

const BottomNavbar: React.FC = () => {
  const handleClick = (icon: string) => {
    console.log(`${icon} clicked`);
  };

  return (
    <header className="bg-black px-4 py-3 flex items-center justify-between flex-col sm:flex-row">
      {/* Logo */}
      <div className="flex items-center gap-2 text-white mb-3 sm:mb-0">
        <div className="text-2xl font-bold text-orange-500">Ndagang</div>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-xs sm:max-w-sm mb-3 sm:mb-0">
        <div className="flex items-center bg-white rounded-md px-4  shadow-md">
          <SearchOutlined className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border-none outline-none rounded-none "
          />
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="flex gap-5 items-center text-white sm:text-sm sm:flex-row flex-wrap justify-center sm:justify-start mt-3 sm:mt-0">
        <button onClick={() => handleClick('Heart')} className="relative text-xl">
          <HeartOutlined />
        </button>
        <button onClick={() => handleClick('Cart')} className="relative text-2xl">
          <ShoppingCartOutlined />
          <span className="absolute top-[-3px] right-[-6px] bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">4</span>
        </button>
        <button onClick={() => handleClick('User')} className="text-xl">
          <UserOutlined />
        </button>
        <button onClick={() => handleClick('Bell')} className="text-xl">
          <BellOutlined />
        </button>
      </div>
    </header>
  );
};

export default BottomNavbar;
