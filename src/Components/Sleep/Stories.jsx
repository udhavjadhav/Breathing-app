import React from 'react'
import Navbar from '../Navbar/Navbar';
import SleepNav from './SleepNav';
import InnerNav from '../InnerNav/InnerNav';
const Stories = () => {
  return (
    <div>
       <Navbar/>
      <SleepNav/>
      <h5 className='d-flex mt-5 justify-content-center'> Stories Works!</h5>
    <InnerNav/>
    </div>
  )
}

export default Stories
