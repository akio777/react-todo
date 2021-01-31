import React, { useState } from 'react'

export default function List({str}) {
  const [finished, setFinished] = useState(false)

  function toggleFinish() {
    if (finished) {
      setFinished(false)
    }
    else setFinished(true)
  }

  return (
    <div className={ finished ? "mb-2 px-4 py-2 flex bg-gray-800 text-green-500 rounded-md cursor-pointer transition-all hover:bg-gray-600":
      "mb-2 px-4 py-2 flex bg-gray-800 text-white rounded-md cursor-pointer transition-all hover:bg-gray-600"}
    title={finished ? "Mark as Undone" : "Mark as Done"} onClick={toggleFinish}>
      <h1 className="noselect max-w-full flex-auto overflow-ellipsis whitespace-nowrap">{finished ? "✔ "+str : str}</h1>
      <button className="text-gray-500 transition-all hover:text-red-600" title="Delete task">Del</button>
    </div>
  )
}
