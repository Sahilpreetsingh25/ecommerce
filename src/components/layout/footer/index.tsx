import React from "react";
import Layout from "antd/es/layout";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Link } from "react-router";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-20 px-6 sm:px-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-center space-y-6 md:space-y-0 md:flex-row md:space-x-12">
          <div className="flex items-center justify-center bg-orange-500 w-16 h-16 rounded-full shadow-xl transition-transform transform hover:scale-110">
            <span className="text-white font-semibold text-xl">Sahil</span>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/shop" className="text-white hover:text-orange-500 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Shop
            </Link>
            <Link to="/promo" className="text-white hover:text-orange-500 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Promo
            </Link>
            <Link to="/about" className="text-white hover:text-orange-500 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-orange-500 text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Blog
            </Link>
          </div>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-8 mt-6 md:mt-0">
          <FacebookOutlined className="text-orange-500 text-3xl hover:text-white transition-transform transform hover:scale-110" />
          <InstagramOutlined className="text-orange-500 text-3xl hover:text-white transition-transform transform hover:scale-110" />
          <YoutubeOutlined className="text-orange-500 text-3xl hover:text-white transition-transform transform hover:scale-110" />
          <LinkedinOutlined className="text-orange-500 text-3xl hover:text-white transition-transform transform hover:scale-110" />
        </div>
      </div>

      {/* Footer Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Bottom Section - Privacy, Terms, and Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-6 sm:space-y-0">
          <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm font-medium transform transition-all duration-300 hover:scale-105">
            Privacy Policy
          </Link>
          <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white text-sm font-medium transform transition-all duration-300 hover:scale-105">
            Terms and Conditions
          </Link>
        </div>

        <span className="text-gray-400 text-sm">
          ©2025 Sahil. <Link to="https://tickmark.app/" className="text-white hover:text-orange-500 text-sm font-medium transform transition-all duration-300 hover:scale-105">
            Tickmark
          </Link>. All rights reserved.
        </span>
      </div>
    </Footer>
  );
};

export default AppFooter;
