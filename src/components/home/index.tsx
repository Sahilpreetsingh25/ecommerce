import  { useState } from 'react';
import Articles from '../articles';
import Card from '../cards';
import TabBar from '../tab-bar';
import Slider from './carousel';
import CategoryCard from './category-card';
import CustomerTestimonials from './customer-testimonial';
import DiscountBanner from './discount-banner';
import PaymentMethods from './payment-methods';

const HomeCp = () => {
    const categories = [
        'All',
        'Grocery',
        'Home And Living',
        'Electronics',
        'Health And Beauty',
        'Fashion',
      ];
  const [activeTab, setActiveTab] = useState<string>('All');

  const products = [
    { name: 'Nice Smartphone', category: 'Electronics', price: 699, originalPrice: 999, seller: 'Berkah Jaya Phone', rating: 3.4, reviews: 11300 },
    { name: 'Amazing Laptop', category: 'Electronics', price: 1299, originalPrice: 1599, seller: 'TechStore', rating: 4.5, reviews: 8700 },
    { name: 'Wireless Earbuds', category: 'Electronics', price: 199, originalPrice: 299, seller: 'AudioMax', rating: 4.2, reviews: 5400 },
    { name: 'Gaming Console', category: 'Electronics', price: 499, originalPrice: 599, seller: 'GameWorld', rating: 4.7, reviews: 12100 },
    { name: 'Fresh Vegetables', category: 'Grocery', price: 20, originalPrice: 30, seller: 'FreshMart', rating: 4.8, reviews: 540 },
    { name: 'Modern Sofa', category: 'Home And Living', price: 499, originalPrice: 599, seller: 'HomeStyle', rating: 4.3, reviews: 2200 },
  ];


  const filteredProducts =
    activeTab === 'All' ? products : products.filter(product => product.category === activeTab);

  return (
    <div className="py-5">
      <Slider />
      <div className="max-w-6xl m-auto py-6">
        <CategoryCard />
      </div>
      <div className="max-w-6xl m-auto px-6 py-6">
        <h1 className="text-4xl font-extrabold mb-6">New Items</h1>
        <TabBar categories={categories} onTabChange={(tab) => setActiveTab(tab)} />

 
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-xl font-medium mt-10">
            No items available.
          </div>
        )}
      </div>

      <div className="max-w-6xl m-auto px-6 py-6">
        <DiscountBanner />
      </div>

      <div className="max-w-6xl m-auto px-4 sm:px-6 py-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-extrabold text-center mb-6">
          Recommended For You
        </h1>
        <p className="text-sm sm:text-base font-light text-center max-w-xl m-auto mb-10 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A est cumque, culpa quisquam accusamus vitae facilis maxime eveniet blanditiis, libero corrupti. Magnam distinctio vero maxime molestias dicta, mollitia nulla tenetur?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl m-auto px-6 py-6">
        <PaymentMethods />
      </div>
      <div className="max-w-6xl m-auto px-4 py-6">
        <CustomerTestimonials />
      </div>
      <div className="max-w-6xl m-auto py-6">
        <Articles />
      </div>
    </div>
  );
};

export default HomeCp;
