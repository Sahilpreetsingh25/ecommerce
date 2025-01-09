import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit sunt non. Exercitation veniam consequat sunt non.",
    name: "Michael Andrew",
    position: "CEO Apple Inc.",
    image: "https://o.aolcdn.com/hss/storage/midas/3846fd442f9fb0f61e3dfdcf9ed447f0/200048770/michael+scott+office+apple.jpg",
  },
  {
    id: 2,
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit sunt non. Exercitation veniam consequat sunt non.",
    name: "Sarah Johnson",
    position: "CTO Microsoft",
    image: "https://d2gjqh9j26unp0.cloudfront.net/profilepic/1d51510a3c05ba11b791b05ec704083f",
  },
  {
    id: 3,
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit sunt non. Exercitation veniam consequat sunt non.",
    name: "David Brown",
    position: "Founder Tesla",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6zLjWYL2FHsy26KpldILOYuKoQ_aM3CTwg&s",
  },
  {
    id: 4,
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit sunt non. Exercitation veniam consequat sunt non.",
    name: "Jessica Lee",
    position: "COO Amazon",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHKyQoUvGJO8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1549359232846?e=2147483647&v=beta&t=Qg1zGG0CCMXN7-YdvUX6zS8tlxMkS7unf4KkeiqVWOk",
  },
];

const CustomerTestimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-800">What Our Customers Say</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <p className="text-gray-800 text-lg mb-6">{testimonial.content}</p>
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-6 border-2 border-gray-200"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
