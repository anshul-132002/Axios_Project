import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FetchdataPagination() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPage, setRowPage] = useState(10);

  const indexofLastItem = currentPage * rowPage;
  const indexofFirstItem = indexofLastItem - rowPage;
  const currentItems = data.slice(indexofFirstItem, indexofLastItem);

  const totalPages = Math.ceil(data.length / rowPage);

  const Fetchapi = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users?limit=100");
      setData(response.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    Fetchapi();
  }, []);

  const handleCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <div>
      <div className="flex justify-center py-8">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-left">
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">Name</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">Gender</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">Phone</th>
              <th className="py-3 px-6 font-semibold text-sm uppercase tracking-wider">Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="py-8 text-center">
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : (
              currentItems.map((user, index) => (
                <tr key={index}>
                  <td className="py-3 px-6">{user.id}</td>
                  <td className="py-3 px-6">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user.gender}</td>
                  <td className="py-3 px-6">{user.phone}</td>
                  <td className="py-3 px-6">{user.bloodGroup}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center py-8">
        <nav className="flex items-center space-x-1">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleCurrentPage(index + 1)}
              className={`px-4 py-2 text-sm font-medium ${
                currentPage === index + 1
                  ? "text-white bg-blue-500"
                  : "text-gray-500 bg-white"
              } border border-gray-300 hover:bg-gray-100`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
    
        

      </div>
      <div className="flex justify-center items-center mb-5 bg-gray-100">
  <Link to="/"  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300" >
Go To HOME PAGE  </Link>
</div>

    </div>
  );
}

export default FetchdataPagination;
