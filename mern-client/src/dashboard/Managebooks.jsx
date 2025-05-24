import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch all books from backend
  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Failed to fetch books:', err));
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/book/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.success) {
        alert("Book deleted successfully!");
        setBooks(books.filter(book => book._id !== id));
      } else {
        alert("Failed to delete book.");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Something went wrong while deleting.");
    }
  };

  // Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/admin/dashboard/edit/${id}`);
  };

  return (
    <div className="px-4 my-12">
      <div className="max-w-[1180px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">📚 Manage Books</h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg border">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-6 py-3 border">#</th>
                <th className="px-6 py-3 border">Title</th>
                <th className="px-6 py-3 border">Author</th>
                <th className="px-6 py-3 border">Category</th>
                <th className="px-6 py-3 border">Price (₹)</th>
                <th className="px-6 py-3 border">Image</th>
                <th className="px-6 py-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book, index) => (
                  <tr key={book._id} className="hover:bg-gray-50 text-center">
                    <td className="px-6 py-4 border">{index + 1}</td>
                    <td className="px-6 py-4 border">{book.bookTitle}</td>
                    <td className="px-6 py-4 border">{book.authorName}</td>
                    <td className="px-6 py-4 border">{book.category}</td>
                    <td className="px-6 py-4 border">₹{book.Price || '—'}</td>
                    <td className="px-6 py-4 border">
                      <img
                        src={book.imageUrl}
                        alt={book.bookTitle}
                        className="w-16 h-16 object-cover mx-auto rounded"
                      />
                    </td>
                    <td className="px-6 py-4 border space-x-2">
                      <button
                        onClick={() => handleEdit(book._id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-10">
                    No books found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooks;
