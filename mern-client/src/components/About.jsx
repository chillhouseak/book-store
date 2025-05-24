import React from 'react';

const About = () => {
  return (
    <div className="px-6 pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white min-h-screen text-gray-800">

      <div className="max-w-[1180px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left section - Text content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About BookNest 📚</h2>
          <p className="text-lg mb-4 leading-relaxed">
            BookNest is more than a bookstore — it's a digital sanctuary for readers, learners, and storytellers. Our mission is to empower minds through books, from timeless classics to emerging authors. Whether you’re into fiction, self-help, programming, or history — there’s something here for every reader.
          </p>
          <p className="text-base text-gray-600 mb-6">
            We believe books should be accessible to all. That’s why BookNest offers free previews, PDF downloads, and the ability to upload your own works. Join our growing community of book lovers and share the joy of reading.
          </p>
          <ul className="space-y-2 text-sm text-blue-900 font-medium">
            <li>✔ 10,000+ Books Available</li>
            <li>✔ Upload & Manage Your Own Books</li>
            <li>✔ 100% Free Previews & Downloads</li>
            <li>✔ Responsive & User-Friendly Design</li>
          </ul>
        </div>

        {/* Right section - Image collage */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookshelf"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1582133776712-0b942f3ef601?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reading"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="Library"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
           <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
            alt="Library"
            className="rounded-xl shadow-lg w-full h-48 object-cover"
          />
          
        </div>
      </div>
    </div>
  );
};

export default About;
