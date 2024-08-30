import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 absolutes p-4 flex justify-between items-center">
    <div className="text-white text-xl font-bold">
     <Link to='/'> <h1>Axios</h1>  </Link> 
    </div>
    <div className="flex space-x-8 text-white text-lg">
      <Link to="/users" className="hover:text-gray-300">Userdata</Link>
      <Link to="/products" className="hover:text-gray-300">Products</Link>

      <Link to="/userpagination" className="hover:text-gray-300">userpagination</Link>
    </div>
  </nav>
  )
}

export default Navbar
