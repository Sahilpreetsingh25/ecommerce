import React from 'react';
import { Input, Badge } from 'antd';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';
import Layout from 'antd/es/layout';

const { Header } = Layout;

const BottomNavbar: React.FC = () => {
  const handleClick = (icon: string) => {
    console.log(`${icon} clicked`);
    // You can add more functionality here as needed.
  };

  return (
    <Header className="bg-black px-5 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2 text-white">
        <div className="text-2xl font-bold text-orange-500">Ndagang</div>
      </div>
      <Input
        placeholder="Search here"
        className="w-72 rounded-md"
        prefix={<SearchOutlined className="text-gray-500" />}
      />
      <div className="flex gap-5 items-center sm:text-sm">
        <button onClick={() => handleClick('Heart')}>
          <HeartOutlined className="text-white text-xl" />
        </button>
        <button onClick={() => handleClick('Cart')}>
          <Badge count={4}>
            <ShoppingCartOutlined className="text-white text-xl" />
          </Badge>
        </button>
        <button onClick={() => handleClick('User')}>
          <UserOutlined className="text-white text-xl" />
        </button>
        <button onClick={() => handleClick('Bell')}>
          <BellOutlined className="text-white text-xl" />
        </button>
      </div>
    </Header>
  );
};

export default BottomNavbar;
