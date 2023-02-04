import React from 'react'
import Navbar from '../Navbar/Navbar';
import SleepNav from './SleepNav';
import InnerNav from '../InnerNav/InnerNav';

const MyFavourite = () => {
  return (
    <div>
      <Navbar/>
      <SleepNav/>
      Myfav works!
      <InnerNav/>
    </div>
  )
}

export default MyFavourite;
