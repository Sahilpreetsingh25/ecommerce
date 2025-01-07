import React from "react";
import { Layout, Space } from "antd";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="bg-black text-white py-8 px-4 md:px-16">
      {/* Logo and Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo and Menu */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Logo */}
          <div className="flex items-center justify-center bg-orange-500 w-12 h-12 rounded-md">
            <span className="text-white font-bold text-lg">TA</span>
          </div>
          {/* Menu */}
          <Space size="large" className="flex text-center md:text-left">
            <Link to="/shop" className="text-white hover:text-orange-500 text-lg">
              Shop
            </Link>
            <Link to="/promo" className="text-white hover:text-orange-500 text-lg">
              Promo
            </Link>
            <Link to="/about" className="text-white hover:text-orange-500 text-lg">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-orange-500 text-lg">
              Blog
            </Link>
          </Space>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <FacebookOutlined className="text-orange-500 text-2xl hover:text-white cursor-pointer" />
          <InstagramOutlined className="text-orange-500 text-2xl hover:text-white cursor-pointer" />
          <YoutubeOutlined className="text-orange-500 text-2xl hover:text-white cursor-pointer" />
          <LinkedinOutlined className="text-orange-500 text-2xl hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left - Privacy Policy */}
        <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
          Privacy Policy
        </Link>

        {/* Center - Copyright */}
        <span className="text-gray-400 text-sm">
          ©2020 TanahAir Studio. All rights reserved.
        </span>

        {/* Right - Terms and Conditions */}
        <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm">
          Terms and Conditions
        </Link>
      </div>
    </Footer>
  );
};

export default AppFooter;
