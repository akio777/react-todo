import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 z-50 fixed min-w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                <NavLink exact to="/react-todo/"
                  activeClassName="bg-black bg-opacity-40 text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                <NavLink to="/react-todo/todo"
                  activeClassName="bg-black bg-opacity-40 text-white px-3 py-2 rounded-md text-sm font-medium"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Todo</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
