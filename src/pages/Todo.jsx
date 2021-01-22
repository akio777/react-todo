import React from 'react'
import List from '../components/List'

export default function Todo() {
  const a = [
    { str: "Excercise", finished: true },
    { str: "Study", finished: false },
    { str: "Reading", finished: false },
    { str: "Play", finished: true },
    { str: "Study", finished: false },
    { str: "Reading", finished: false },
    { str: "Play", finished: true },
    { str: "Study", finished: false },
    { str: "Reading", finished: false },
    { str: "Play", finished: true },
  ]
  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="wrapper flex flex-col flex-wrap justify-center items-center">
        <div className="input-group flex w-2/4 mt-24">
          <input type="text" className="todo flex-auto bg-gray-800 px-4 py-2 rounded-md text-white border-gray-300 focus:outline-none" placeholder="Enter todo task..." />
          <button className="add-btn flex bg-blue-500 px-4 py-2 ml-2 rounded-md text-white transition-all hover:bg-blue-600 focus:outline-none">Add</button>
        </div>
        <h1 className="flex mt-6 text-xl text-white noselect">Todo List</h1>
        <div className="list-container mt-6 w-2/4">
          {a.map((ele, i) => <List str={ele.str} finished={ele.finished} />)}
        </div>
      </div>

    </div>
  )
}
