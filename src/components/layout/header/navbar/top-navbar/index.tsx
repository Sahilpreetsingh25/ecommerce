import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  const menuItems = [
    { key: 'home', label: 'Home' },
    { key: 'shop', label: 'Shop' },
    { key: 'about', label: 'About' },
    { key: 'articles', label: 'Articles' },
  ];

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);

      if (!isMobile) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    if (isMobileView) {
      setIsDrawerOpen(false); // Close the drawer on menu click for mobile/tablet
    }
  };

  const fullMenu = (
    <div className="flex space-x-6">
      {menuItems.map(item => (
        <Link
          to={`/${item.key}`}
          key={item.key}
          className="text-gray-800 font-medium text-sm hover:text-blue-600"
          onClick={handleMenuClick} // Close the menu when clicking a link
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const drawerMenu = (
    <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="text-lg font-bold">Menu</div>
        <button className="text-2xl" onClick={() => setIsDrawerOpen(false)}>
          ✖
        </button>
      </div>
      <div className="flex flex-col space-y-4 p-6">
        {menuItems.map(item => (
          <Link
            to={`/${item.key}`}
            key={item.key}
            className="text-gray-800 font-medium text-lg hover:text-blue-600"
            onClick={handleMenuClick} // Close the menu when clicking a link
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="bg-white border-b border-gray-300 px-5 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>📞</span>
          <span>+91 8198014292</span>
        </div>

        {!isMobileView && <div>{fullMenu}</div>}

        {isMobileView && (
          <button className="text-2xl" onClick={() => setIsDrawerOpen(true)}>
            ☰
          </button>
        )}
      </div>

      {isDrawerOpen && drawerMenu}
    </header>
  );
};

export default TopNavbar;
