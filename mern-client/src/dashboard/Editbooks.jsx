import React, { useState } from 'react';
import { useParams, useNavigate, useLoaderData } from 'react-router-dom';

const Editbooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loadedBook = useLoaderData();

  const [selectbookcategory, setSelectbookcategory] = useState(loadedBook.category);
  const [formData, setFormData] = useState({
    bookTitle: loadedBook.bookTitle,
    authorName: loadedBook.authorName,
    imageUrl: loadedBook.imageUrl,
    description: loadedBook.description,
    bookpdfUrl: loadedBook.bookpdfUrl
  });

  const bookcategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Biography", "Autobiography", "History",
    "Self-Help", "Memoir", "Business", "Children Book", "Travel",
    "Religion", "Art and Design"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryChange = (e) => {
    setSelectbookcategory(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...formData,
      category: selectbookcategory
    };

    fetch(`https://book-store-pp85.vercel.app//book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Book updated successfully");
          navigate("/admin/dashboard/manage");
        } else {
          alert("Failed to update book");
        }
      })
      .catch(err => {
        console.error("Update error:", err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update Book Details</h2>
      <form onSubmit={handleUpdate} className="lg:w-[1180px] flex flex-wrap gap-4">

        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Book Title</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Author</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Category</label>
          <select
            value={selectbookcategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border rounded"
          >
            {bookcategories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">PDF URL</label>
          <input
            type="text"
            name="bookpdfUrl"
            value={formData.bookpdfUrl}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>

        <div className="mt-4 w-full">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editbooks;
