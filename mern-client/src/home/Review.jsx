import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const customerReviews = [
  {
    name: "Priya Sharma",
    role: "Book Enthusiast",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review: "This bookstore is a hidden gem! I found exactly what I needed and the service was fantastic. Highly recommended!"
  },
  {
    name: "Rohan Mehta",
    role: "College Student",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    review: "Great selection of academic books and fast delivery. Helped me prepare for my semester really well!"
  },
  {
    name: "Sana Ali",
    role: "Freelance Designer",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    review: "Love the interface, love the books. It's so easy to find and order what I want. Plus, the UI is beautiful!"
  },
  {
    name: "Kabir Singh",
    role: "IT Professional",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    review: "Super convenient. Got my technical books within two days. Nice clean layout and ordering process."
  },
  {
    name: "Aditi Chauhan",
    role: "UI/UX Intern",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    review: "User-friendly experience with plenty of design books to inspire me. I keep coming back!"
  },
  {
    name: "Rahul Verma",
    role: "School Teacher",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    review: "Good for basic needs. A few more educational resources would make it perfect for teachers."
  }
];

// Render star ratings dynamically
const renderStars = (count) => {
  return "⭐️".repeat(count) + "☆".repeat(5 - count);
};

function Review() {
  return (
    <div className='my-20 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug text-black'>
        What Our <span className='text-blue-700'>Customers Say</span>
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {customerReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full mx-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full object-cover shadow"
                />
                <h3 className="text-xl font-semibold text-black">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.role}</p>
                <div className="text-yellow-500 text-lg">{renderStars(review.rating)}</div>
                <p className="text-gray-700 text-base italic">“{review.review}”</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
