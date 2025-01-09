import React from 'react';

const articles = [
  {
    id: 1,
    title: "How To Keep Fruits And Vegetables Fresh Longer Until 4 Weeks",
    author: "Admin",
    date: "July 4, 2021",
    comments: 0,
    image: "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "How To Keep Fruits And Vegetables Fresh Longer Until 4 Weeks",
    author: "Admin",
    date: "July 4, 2021",
    comments: 0,
    image: "https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "How To Keep Fruits And Vegetables Fresh Longer Until 4 Weeks",
    author: "Admin",
    date: "July 4, 2021",
    comments: 0,
    image: "https://images.pexels.com/photos/14979021/pexels-photo-14979021/free-photo-of-gadgets-on-white-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/path/to/article-image3.png",
  },
  {
    id: 4,
    title: "How To Keep Fruits And Vegetables Fresh Longer Until 4 Weeks",
    author: "Admin",
    date: "July 4, 2021",
    comments: 0,
    image: "https://images.pexels.com/photos/6915960/pexels-photo-6915960.png",
  },
];

const Articles: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 md:mb-0 text-center md:text-left">
          Read Our Latest Articles
        </h2>
        <button className="text-orange-500 border border-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-orange-500 hover:text-white transition-all text-sm sm:text-base md:text-lg">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <div className="h-48 sm:h-56 bg-gray-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                {article.title}
              </h3>
              <div className="flex items-center text-gray-600 text-xs sm:text-sm md:text-base">
                <p className="mr-3">{article.author}</p>
                <p className="mr-3">{article.date}</p>
                <p>{article.comments} Comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
