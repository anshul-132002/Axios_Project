import axios from "axios";
import React, { useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

function FetchCard() {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await axios.get("https://fakestoreapi.com/products");
      setCard(resp.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      
      {loading ? (
        <div className="flex justify-center items-center col-span-full text-gray-500">
           <div className="text-center">
        <FidgetSpinner aria-label="Center-aligned spinner example" />
        
      </div>
        </div>
      ) : (
        card.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{item.description.slice(0,100)}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                  {item.category}
                </div>
                <div className="flex space-x-2">
                  <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                    {item.rating.rate} ⭐
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {item.rating.count} reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default FetchCard;
