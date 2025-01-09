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
    <section className=" py-16 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 md:mb-0 text-center md:text-left">
          Read Our Latest Articles
        </h2>
        <button className="text-orange-500 border border-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-orange-500 hover:text-white transition-all text-base sm:text-lg md:text-base">
          View More
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
          >
            <div className="h-56 bg-gray-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {article.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm md:text-base">
                <p className="mr-4">{article.author}</p>
                <p className="mr-4">{article.date}</p>
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
