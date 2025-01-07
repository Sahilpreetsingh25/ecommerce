import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;

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
    <Menu
      mode="horizontal"
      items={menuItems}
      style={{
        borderBottom: 'none',
        fontWeight: 500,
        fontSize: '14px',
      }}
    />
  );

  return (
    <Header style={{ background: '#fff', borderBottom: '1px solid #ddd', padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Section: Contact Information */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          <PhoneOutlined style={{ color: '#555' }} />
          <span style={{ color: '#555' }}>+62 819 821 967</span>
        </div>

        {/* Right Section: Navigation */}
        {!isMobileView && <div>{fullMenu}</div>}

        {/* Mobile Menu: Show Hamburger Icon */}
        {isMobileView && (
          <Button
            icon={<MenuOutlined />}
            type="text"
            onClick={() => setIsDrawerOpen(true)}
          />
        )}
      </div>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{
            fontWeight: 500,
            fontSize: '14px',
          }}
        />
      </Drawer>
    </Header>
  );
};

export default TopNavbar;
