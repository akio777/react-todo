import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../logo.svg"
import MBLogo from '../mb.png'

function Home() {
  return (
    <div className="bg-gray-700 min-h-screen flex justify-center items-center">
      <div className="text-wrap z-10 noselect">
        <p className="text-lg text-blue-400 font-extrabold">React</p>
        <h1 className="text-white text-5xl font-bold">TODO APP</h1>
        <div className="btn mt-20 flex items-center justify-center">
          <Link to="/todo" className="text-white text-xl font-bold flex text-center items-center justify-center rounded-lg bg-blue-500 w-10 h-10 transition-all hover:bg-blue-600">→</Link>
        </div>
      </div>
      <img src={logo} alt="React-logo" className="App-logo absolute z-0 opacity-10"/>
      <p className="text-sm text-white absolute bottom-10 text-center font-light flex items-center noselect">Created with&nbsp;
      <a href="https://reactjs.org/" className="text-blue-400 underline font-normal transition-all hover:text-blue-500">React</a>&nbsp;and&nbsp;
      <a href="https://tailwindcss.com/" className="text-blue-400 underline font-normal transition-all hover:text-blue-500">tailwindcss</a>&nbsp;©&nbsp;<img src={MBLogo} alt="MB-Logo" className="mb-1 max-h-5 mb-logo" /></p>
    </div>
  )
}

export default Home

