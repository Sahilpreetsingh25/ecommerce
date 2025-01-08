// Card.jsx
import { useAtom } from "jotai";
import { wishlistAtom } from "../../store/wishlistAtom"; // Import the atom
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface CardProps {
  name: string;
  price: number;
  originalPrice: number;
  seller: string;
  rating: number;
  reviews: number;
}

const Card: React.FC<CardProps> = ({ name, price, originalPrice, seller, rating, reviews }) => {
  const [wishlist, setWishlist] = useAtom(wishlistAtom);


  const isWishlisted = wishlist.includes(name);


  const toggleWishlist = () => {
    setWishlist((prev) =>
      isWishlisted ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4">
    
      <button
        className="absolute bottom-5 right-3 text-gray-400 hover:text-red-500 transition"
        onClick={toggleWishlist}
      >
        {isWishlisted ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </button>


      <div className="bg-gray-200 h-48 rounded-md flex justify-center items-center">
        <span className="text-gray-500 text-lg">Image</span>
      </div>


      <div className="mt-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>
          <span className="text-orange-500 text-xl font-bold">${price}</span>
          <span className="text-gray-400 line-through ml-2">
            ${originalPrice}
          </span>
        </p>
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
