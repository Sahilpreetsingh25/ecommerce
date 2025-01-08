interface CardProps {
    name: string;
    price: number;
    originalPrice: number;
    seller: string;
    rating: number;
    reviews: number;
  }
  
  const Card: React.FC<CardProps> = ({ name, price, originalPrice, seller, rating, reviews }) => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between h-full">
        {/* Replace with an <img> tag if you have product images */}
        <div className="bg-gray-200 h-48 rounded-md flex justify-center items-center">
          <span className="text-gray-500 text-lg">Image</span>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-orange-500 text-xl font-bold">${price}</p>
          <p className="text-gray-400 line-through">${originalPrice}</p>
          <p className="text-sm text-gray-600 mt-1">{seller}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-sm">⭐ {rating}</span>
            <span className="text-gray-500 text-sm ml-2">({reviews} Reviews)</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  