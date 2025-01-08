import Slider from "./carousel";
import CategoryCard from "./category-card";

const HomeCp = () => {
    return (
      <div className="py-5">
        <Slider/>
        <div className="max-w-6xl m-auto ">
        <CategoryCard/>
        </div>
        <p>This is the Home Component!</p>
      </div>
    );
  };
  
  export default HomeCp;
  