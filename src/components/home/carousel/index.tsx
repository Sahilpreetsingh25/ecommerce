import React, { useState, useEffect } from "react";

const Slider: React.FC = () => {
  const slides = [
    {
      dateRange: "1 March 2021 - 30 March 2021",
      title: "Discount",
      subtitle: "50% All Items",
      bgColor: "#FFA500", // Orange background
      textColor: "#fff", // White text
      imageUrl: "https://via.placeholder.com/600x400?text=Discount", // Example image URL
    },
    {
      dateRange: "1 April 2021 - 30 April 2021",
      title: "Special Offer",
      subtitle: "Buy 1 Get 1 Free",
      bgColor: "#FF5722", // Another color for variety
      textColor: "#fff",
      imageUrl: "https://via.placeholder.com/600x400?text=Special+Offer", // Example image URL
    },
    {
      dateRange: "1 April 2021 - 30 April 2021",
      title: "Special Offer",
      subtitle: "Buy 1 Get 1 Free",
      bgColor: "#FF5722", // Another color for variety
      textColor: "#fff",
      imageUrl: "https://via.placeholder.com/600x400?text=Special+Offer", // Example image URL
    },
    {
      dateRange: "1 April 2021 - 30 April 2021",
      title: "Special Offer",
      subtitle: "Buy 1 Get 1 Free",
      bgColor: "#FF5722", // Another color for variety
      textColor: "#fff",
      imageUrl: "https://via.placeholder.com/600x400?text=Special+Offer", // Example image URL
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isReversed, setIsReversed] = useState(false); // Boolean to track direction

  useEffect(() => {
    const interval = setInterval(() => {
      if (isReversed) {
        setCurrentSlide((prevSlide) => {
          const prevSlideIndex = prevSlide === 0 ? slides.length - 1 : prevSlide - 1;
          return prevSlideIndex;
        });
      } else {
        setCurrentSlide((prevSlide) => {
          const nextSlide = (prevSlide + 1) % slides.length;
          return nextSlide;
        });
      }
    }, 3000); // 3 seconds for each slide

    return () => clearInterval(interval);
  }, [isReversed, slides.length]);

  useEffect(() => {
    if (currentSlide === slides.length - 1) {
      setIsReversed(true);
    } else if (currentSlide === 0) {
      setIsReversed(false);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="relative max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-72 sm:h-80 md:h-96 lg:h-96 flex items-center justify-between p-5 sm:py-2 gap-1 md:p-10 rounded-lg"
            style={{
              backgroundColor: slide.bgColor,
              color: slide.textColor,
            }}
          >
            <div className="text-center  sm:text-left sm:mr-6">
              <p className="lg:text-3xl sm:text-xl font-medium">{slide.dateRange}</p>
              <h1 className=" mt-2 lg:text-8xl sm:text-4xl md:text-5xl font-bold">{slide.title}</h1>
              <h2 className="mt-2 lg:text-4xl text-sm sm:text-2xl font-bold">{slide.subtitle}</h2>
            </div>


            <div className="w-48 sm:w-56 md:w-72 lg:w-96 h-40 sm:h-48 md:h-72 lg:h-80 flex justify-center items-center overflow-hidden">
             
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-5 space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-orange-500" : "bg-gray-300"
            } sm:w-4 sm:h-4`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
