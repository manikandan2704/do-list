import React from 'react';
import { Link } from 'react-router-dom';
// import file from "./File.js";
import './Home.css'

const Home = () => {
  return (
    <div className=''>
      <div className='header'>
      <h1>Header</h1>
      <h3><Link to={"/"}>Home</Link></h3>
        <h3><Link to={"/card"}>Add to Card</Link></h3>
        </div>
      </div>
  )
}

export default Home