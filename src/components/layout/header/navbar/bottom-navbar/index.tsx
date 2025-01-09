import React, { useState, useEffect } from "react";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useAtom } from "jotai";
import { wishlistAtom } from "../../../../../store/wishlistAtom"; 

const BottomNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [wishlist] = useAtom(wishlistAtom);


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);

      
      if (!isMobile) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (icon: string) => {
    console.log(`${icon} clicked`);
  };


  const drawerMenu = (
    <div className="fixed inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 z-50 flex flex-col p-6">
      <button
        className="text-2xl self-end mb-4"
        onClick={() => setIsDrawerOpen(false)}
      >
        ✖
      </button>
      <div className="flex items-center bg-white rounded-md px-4 mb-6 shadow-md">
        <SearchOutlined className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border-none outline-none"
        />
      </div>
      <div className="flex flex-col gap-6 items-center text-white">

        <button onClick={() => handleClick("Heart")} className="relative text-3xl">
          <HeartOutlined />
          {wishlist.length > 0 && (
            <span className="absolute top-[-3px] right-[-6px] bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
              {wishlist.length}
            </span>
          )}
        </button>

        <button onClick={() => handleClick("Cart")} className="relative text-3xl">
          <ShoppingCartOutlined />
          <span className="absolute top-[-3px] right-[-6px] bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
            4
          </span>
        </button>
        <button onClick={() => handleClick("User")} className="text-3xl">
          <UserOutlined />
        </button>
        <button onClick={() => handleClick("Bell")} className="text-3xl">
          <BellOutlined />
        </button>
      </div>
    </div>
  );

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-800 px-4 py-3 flex items-center justify-between">
   
      <div className="flex items-center gap-2 text-white">
        <div className="text-2xl font-bold text-orange-500">Sahil</div>
      </div>

     
      {!isMobileView && (
        <>
   
          <div className="w-full max-w-xs sm:max-w-sm mx-4">
            <div className="flex items-center bg-white rounded-md px-4 shadow-md">
              <SearchOutlined className="text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 border-none outline-none"
              />
            </div>
          </div>


          <div className="flex gap-5 items-center text-white">

            <button onClick={() => handleClick("Heart")} className="relative text-xl">
              <HeartOutlined />
              {wishlist.length > 0 && (
                <span className="absolute top-[-3px] right-[-6px] bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button onClick={() => handleClick("Cart")} className="relative text-2xl">
              <ShoppingCartOutlined />
              <span className="absolute top-[-3px] right-[-6px] bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </button>
            <button onClick={() => handleClick("User")} className="text-xl">
              <UserOutlined />
            </button>
            <button onClick={() => handleClick("Bell")} className="text-xl">
              <BellOutlined />
            </button>
          </div>
        </>
      )}


      {isMobileView && (
        <button
          className="text-2xl text-white"
          onClick={() => setIsDrawerOpen(true)}
        >
          ☰
        </button>
      )}


      {isDrawerOpen && drawerMenu}
    </header>
  );
};

export default BottomNavbar;
