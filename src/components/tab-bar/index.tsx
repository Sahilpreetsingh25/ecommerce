import React, { useState } from 'react';

const categories = [
  'All',
  'Grocery',
  'Home And Living',
  'Electronics',
  'Health And Beauty',
  'Fashion',
];

const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

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
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabBar;
