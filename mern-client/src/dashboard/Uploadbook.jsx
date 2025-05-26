import React, { useState } from 'react';

const Uploadbook = () => {
  const bookcategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction",
    "Fantasy", "Horror", "Biography", "Autobiography", "History",
    "Self-Help", "Memoir", "Business", "Children Book", "Travel",
    "Religion", "Art and Design"
  ];

  const [selectbookcategory, setSelectbookcategory] = useState(bookcategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectbookcategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const author = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const description = form.description.value;
    const bookpdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      title: bookTitle,
      author,
      imageUrl,
      category: selectbookcategory,
      description,
      bookpdfUrl
    };

    fetch("https://book-store-y21m.onrender.com/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
      alert("Book uploaded successfully");
      form.reset();
      setSelectbookcategory(bookcategories[0]);
    } else {
      alert(data.message || "Failed to upload book");
    }
      })
      .catch(err => {
        console.error("Upload error:", err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form onSubmit={handleSubmit} className="lg:w-[1180px] flex flex-wrap gap-4">

        {/* Book Title */}
        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Book Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter book title"
            required
          />
        </div>

        {/* Author */}
        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Author</label>
          <input
            type="text"
            name="author"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter author name"
            required
          />
        </div>
         <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Price (₹)</label>
          <input type="number" name="price" className="w-full px-4 py-2 border rounded" required />
        </div>

        {/* Category */}
        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Category</label>
          <select
            name="category"
            className="w-full px-4 py-2 border rounded"
            value={selectbookcategory}
            onChange={handleChangeSelectedValue}
          >
            {bookcategories.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Image URL */}
        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* PDF URL */}
        <div className="w-full lg:w-[48%]">
          <label className="block mb-2 text-sm font-medium">PDF URL</label>
          <input
            type="text"
            name="bookpdfUrl"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter PDF download link"
            required
          />
        </div>

        {/* Description */}
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full px-4 py-2 border rounded"
            placeholder="Write a short description..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4 w-full">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded"
          >
            Upload Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Uploadbook;
