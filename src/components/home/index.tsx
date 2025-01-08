import Card from '../cards';
import TabBar from '../tabbar';
import Slider from './carousel';
import CategoryCard from './category-card';

const HomeCp = () => {
  const products = [
    {
      name: 'Nice Smartphone',
      price: 699,
      originalPrice: 999,
      seller: 'Berkah Jaya Phone',
      rating: 3.4,
      reviews: 11300,
    },
    {
      name: 'Amazing Laptop',
      price: 1299,
      originalPrice: 1599,
      seller: 'TechStore',
      rating: 4.5,
      reviews: 8700,
    },
    {
      name: 'Wireless Earbuds',
      price: 199,
      originalPrice: 299,
      seller: 'AudioMax',
      rating: 4.2,
      reviews: 5400,
    },
    {
      name: 'Gaming Console',
      price: 499,
      originalPrice: 599,
      seller: 'GameWorld',
      rating: 4.7,
      reviews: 12100,
    },
    {
      name: 'Gaming Console',
      price: 499,
      originalPrice: 599,
      seller: 'GameWorld',
      rating: 4.7,
      reviews: 12100,
    },
    {
      name: 'Gaming Console',
      price: 499,
      originalPrice: 599,
      seller: 'GameWorld',
      rating: 4.7,
      reviews: 12100,
    },
  ];

  return (
    <div className="py-5">
      <Slider />
      <div className="max-w-6xl m-auto py-6">
        <CategoryCard />
      </div>
      <div className="max-w-6xl m-auto px-6 px-6">
        <h1 className="text-4xl font-extrabold mb-6">New Items</h1>
        <TabBar />
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCp;
