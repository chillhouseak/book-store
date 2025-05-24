import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineBookOpen,
  HiUserGroup,
  HiCloudUpload
} from 'react-icons/hi';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]); // Placeholder for future
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/all-books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => console.error("Failed to fetch books", err));
  }, []);

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen w-full">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-10">📊 Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow p-6 rounded-xl flex items-center gap-4">
            <HiOutlineBookOpen size={40} className="text-blue-600" />
            <div>
              <p className="text-2xl font-semibold">{books.length}</p>
              <p className="text-gray-500">Total Books</p>
            </div>
          </div>
          
          <div className="bg-white shadow p-6 rounded-xl flex items-center gap-4">
            <HiCloudUpload size={40} className="text-purple-600" />
            <div>
              <p className="text-2xl font-semibold">{books.length}</p>
              <p className="text-gray-500">Total Uploads</p>
            </div>
          </div>
        </div>

        {/* Recent Uploads Table */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto">
          <h2 className="text-xl font-semibold px-6 py-4 border-b text-gray-700">📚 Recent Book Uploads</h2>
          {
            loading ? (
              <p className="text-center p-6 text-gray-400">Loading books...</p>
            ) : (
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Author</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.slice(0, 7).map((book) => (
                      <tr key={book._id} className="border-t hover:bg-gray-50">
                        <td className="px-6 py-4">{book.bookTitle}</td>
                        <td className="px-6 py-4">{book.authorName}</td>
                        <td className="px-6 py-4">{book.category}</td>
                        <td className="px-6 py-4 space-x-4">
                          <Link
                            to={`/admin/dashboard/edit/${book._id}`}
                            className="text-blue-600 hover:underline"
                          >
                            Edit
                          </Link>
                          <Link
                            to="/admin/dashboard/manage"
                            className="text-red-600 hover:underline"
                          >
                            Manage
                          </Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
