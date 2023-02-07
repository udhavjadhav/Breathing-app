import React from 'react'
import Navbar from '../Navbar/Navbar';
import InnerNav from '../InnerNav/InnerNav';
import RelaxNav from './RelaxNav';
const Beginners = () => {
  return (
    <div>
      <Navbar />
      <RelaxNav />
      <h5 className='d-flex mt-5 justify-content-center'>Beginners Works!</h5>
      <InnerNav />
    </div>
  )
}

export default Beginners
