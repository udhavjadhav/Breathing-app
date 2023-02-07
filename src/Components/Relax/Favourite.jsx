import React from 'react'
import Navbar from '../Navbar/Navbar';
import InnerNav from '../InnerNav/InnerNav';
import RelaxNav from './RelaxNav';
const Favourite = () => {
    return (
        <div>
            <Navbar />
            <RelaxNav />
            <h5 className='d-flex mt-5 justify-content-center'> Favourite Works!</h5>
            <InnerNav />
        </div>
    )
}

export default Favourite
