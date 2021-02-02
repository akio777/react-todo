import React, { useRef, useState } from 'react'
import List from '../components/List'

export default function Todo() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  const inputRef = useRef(null)

  function addList(e) {
    e.preventDefault()
    setList([...list, { str: inputRef.current.value, id: count, done: false }])
    setInput("")
    setCount(count + 1)
  }

  function deleteList(index) {
    setList(list.filter((ele) => ele.id !== index))
  }

  function toggleDone(index) {
    setList(list.map((ele) => {
      if (ele.id === index) return { ...ele, done: !ele.done }
      else return ele
    }))
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="wrapper flex flex-col flex-wrap justify-center items-center">
        <form className="input-group flex md:w-2/4 mt-24" onSubmit={e => addList(e)}>
          <input type="text" ref={inputRef} value={input} className="todo flex-auto bg-gray-800 px-4 py-2 box-border rounded-md text-white border-gray-300 focus:outline-none" placeholder="Enter todo task..." onInput={() => setInput(inputRef.current.value)} required />
          <button className="add-btn flex bg-blue-500 px-4 py-2 ml-2 rounded-md text-white transition-all hover:bg-blue-600 focus:outline-none">Add</button>
        </form>
        <h1 className="flex mt-6 text-xl text-white noselect">Todo List</h1>
        <div className="list-container mt-6 md:w-2/4 w-4/5">
          {list.map((ele, i) => <List obj={ele} key={ele.id} toggleDone={() => toggleDone(ele.id)} deleteList={() => deleteList(ele.id)} />)}
        </div>
      </div>
    </div>
  )
}
