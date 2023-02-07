import React from 'react'
import Navbar from '../Navbar/Navbar';
import SleepNav from './SleepNav';
import InnerNav from '../InnerNav/InnerNav';

const MyFavourite = () => {
  return (
    <div>
      <Navbar/>
      <SleepNav/>
      <h5 className='d-flex mt-5 justify-content-center'> Myfav works!</h5>
      <InnerNav/>
    </div>
  )
}

export default MyFavourite;
