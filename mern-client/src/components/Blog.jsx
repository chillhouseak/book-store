import React from 'react';

const blogs = [
  {
    id: 1,
    title: "How Reading Changes Your Brain",
    author: "Dr. Riya Kapoor",
    date: "May 20, 2025",
    excerpt: "Discover how reading boosts empathy, vocabulary, and neural connectivity in ways no other activity can.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 2,
    title: "Top 5 Books Every Developer Should Read",
    author: "Aman Sharma",
    date: "May 15, 2025",
    excerpt: "From clean code to soft skills, here's our handpicked list of essential books for software developers.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
  },
  {
    id: 3,
    title: "The Rise of Audiobooks in 2025",
    author: "Neha Sethi",
    date: "May 10, 2025",
    excerpt: "With the boom in multitasking, audiobooks are dominating how we consume content. Here’s why.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

const Blog = () => {
  return (
    <div className="px-6 pt-32 pb-16 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-12">📖 Our Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map(blog => (
            <div
              key={blog.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                  By <span className="font-medium">{blog.author}</span> • {blog.date}
                </p>
                <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                <a
                  href="#"
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
