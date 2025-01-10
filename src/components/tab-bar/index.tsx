import React, { useState } from 'react';

type TabBarProps = {
  categories: string[];
  onTabChange: (tab: string) => void;
};

const TabBar: React.FC<TabBarProps> = ({ categories, onTabChange }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    onTabChange(category);
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap bg-white py-4 px-2 border-b">
      <div className="flex space-x-4 md:justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className={`text-lg px-3 py-2 ${
              activeTab === category
                ? 'text-orange-500 font-semibold border-b-2 border-orange-500'
                : 'text-gray-400'
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
