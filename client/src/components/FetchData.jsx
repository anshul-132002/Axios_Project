import axios from "axios";
import React, { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import { ShimmerTable, ShimmerTitle } from "shimmer-effects-react";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inpData, setinpData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    birthDate: "",
  });

  const updateFormvalue = (event, key) => {
    setinpData((oldobj) => ({ ...oldobj, [key]: event.target.value }));
  };

  const addnewUser = async () => {
    try {
      const res = await axios.post("https://dummyjson.com/users/add", inpData);
      setData((prevData) => [...prevData, res.data]); // Add the new user to the existing data
      setinpData({
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        birthDate: "",
      }); // Reset the form
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setData(response.data.users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center shadow-lg">User Data 👇</h1>
      <div className="flex justify-between items-start min-h-screen bg-gray-50 p-4">
        <table className="table-auto border-collapse border border-gray-300 shadow-lg w-2/3">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 hover:bg-amber-200 hover:text-black uppercase">
                ID
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 uppercase hover:bg-amber-200 hover:text-black">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 uppercase hover:bg-amber-200 hover:text-black">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 uppercase hover:bg-amber-200 hover:text-black">
                Phone
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 uppercase hover:bg-amber-200 hover:text-black">
                City
              </th>
              <th className="border border-gray-300 px-4 py-2 bg-gray-200 text-left text-sm font-semibold text-gray-800 uppercase hover:bg-amber-200 hover:text-black">
                D.O.B
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="6"
                  className="border border-gray-300 px-4 py-2 text-center"
                >
                  <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
                  </div>
                </td>
              </tr>
            ) : (
              data.map((user) => (
                <tr key={user.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.phone}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.address.city}, {user.address.country}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.birthDate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="w-1/3 ml-4 border border-gray-300 p-4 shadow-lg">
          <label>
            <b>Add the Data:</b>
          </label>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={(event) => updateFormvalue(event, "firstName")}
              value={inpData.firstName}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={(event) => updateFormvalue(event, "lastName")}
              value={inpData.lastName}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={(event) => updateFormvalue(event, "email")}
              value={inpData.email}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              onChange={(event) => updateFormvalue(event, "phone")}
              value={inpData.phone}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              placeholder="Enter City"
              onChange={(event) => updateFormvalue(event, "city")}
              value={inpData.city}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              onChange={(event) => updateFormvalue(event, "birthDate")}
              value={inpData.birthDate}
              className="border border-gray-300 px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded text-center justify-center"
            onClick={addnewUser}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default FetchData;
