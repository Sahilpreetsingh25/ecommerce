import React, { useState, useEffect } from 'react';

const TopNavbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const menuItems = [
    { key: '1', label: 'Shop' },
    { key: '2', label: 'Promo' },
    { key: '3', label: 'About' },
    { key: '4', label: 'Blog' },
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

  const fullMenu = (
    <div className="flex space-x-6">
      {menuItems.map(item => (
        <a href={`#${item.key}`} key={item.key} className="text-gray-800 font-medium text-sm hover:text-blue-600">
          {item.label}
        </a>
      ))}
    </div>
  );

  return (
    <header className="bg-white border-b border-gray-300 px-5 py-3">
      <div className="flex justify-between items-center">
     
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>📞</span>
          <span>+62 819 821 967</span>
        </div>

    
        {!isMobileView && <div>{fullMenu}</div>}

       
        {isMobileView && (
          <button className="text-xl" onClick={() => setIsDrawerOpen(true)}>
            ☰
          </button>
        )}
      </div>

  
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-end z-50">
          <div className="w-64 bg-white p-6">
            <button className="text-xl text-gray-600" onClick={() => setIsDrawerOpen(false)}>
              ✖
            </button>
            <div className="flex flex-col space-y-4 mt-6">
              {menuItems.map(item => (
                <a href={`#${item.key}`} key={item.key} className="text-gray-800 font-medium text-lg hover:text-blue-600">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavbar;
