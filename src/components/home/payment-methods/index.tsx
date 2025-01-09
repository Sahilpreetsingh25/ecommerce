// src/components/PaymentMethods.tsx
import React from 'react';

const PaymentMethods: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Payment Method</h2>
      <div className="flex flex-wrap justify-center gap-12 opacity-60">
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52  flex items-center justify-center">
          <img src="https://media.designrush.com/inspirations/656399/conversions/1-preview.jpg" alt="Company Logo 1" className="w-4/5 h-4/5 object-contain" />
        </div>
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52  flex items-center justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLuDWk0wR8frw4Y0UyF92bKKEI6hWRuQ53Q&s" alt="Company Logo 2" className="w-4/5 h-4/5 object-contain" />
        </div>
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52  flex items-center justify-center">
          <img src="https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp" alt="Company Logo 3" className="w-4/5 h-4/5 object-contain" />
        </div>
        <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 flex items-center justify-center">
          <img src="https://omni-pay.com/images/OmnipayLogo.png" alt="Company Logo 4" className="w-4/5 h-4/5 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
