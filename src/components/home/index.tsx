import LatestArticles from '../blogs';
import Card from '../cards';
import TabBar from '../tab-bar';
import Slider from './carousel';
import CategoryCard from './category-card';
import CustomerTestimonials from './customer-testimonial';
import DiscountBanner from './discount-banner';
import PaymentMethods from './payment-methods';

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
    ];

    return (
        <div className="py-5">
            <Slider />
            <div className="max-w-6xl m-auto py-6">
                <CategoryCard />
            </div>
            <div className="max-w-6xl m-auto px-6 py-6">
                <h1 className="text-4xl font-extrabold mb-6">New Items</h1>
                <TabBar />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {products.map((product, index) => (
                        <Card key={index} {...product} />
                    ))}
                </div>
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
      <div className="max-w-6xl m-auto px-6 py-6">
        <CustomerTestimonials />
      </div>
      <div className="max-w-6xl m-auto  py-6">
        <LatestArticles />
      </div>
        </div>
    );
};

export default HomeCp;
