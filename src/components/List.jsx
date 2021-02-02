import React from 'react'

export default function List({ obj, deleteList, toggleDone }) {
  return (
    <div className="mb-2 px-4 py-2 flex bg-gray-800 text-white rounded-md cursor-pointer transition-all hover:bg-gray-600"
      title={obj.done ? "Mark as Undone" : "Mark as Done"} onClick={toggleDone}>
      <h1 className={obj.done ? "noselect max-w-full flex-auto overflow-ellipsis line-through text-green-500 whitespace-nowrap" : "noselect max-w-full flex-auto overflow-ellipsis whitespace-nowrap"}>{obj.str}</h1>
      <button className="text-gray-500 transition-all hover:text-red-600" title="Delete task" onClick={(e) => { e.stopPropagation(); deleteList() }}>Del</button>
    </div>
  )
}
