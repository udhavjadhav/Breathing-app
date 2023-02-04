import React from 'react'
import SongsDetails from '../SongsDetails'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import InnerNav from '../InnerNav/InnerNav';
import Navbar from '../Navbar/Navbar'
import HomeInfo from '../HomeInfo';
import MedNav from './MedNav';
function Meditation() {
    return (
        <>
            <Navbar/>
           <MedNav/>
            <div className="meditation mt-4">
                <div className="wrapper" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {
                        SongsDetails.map((element, index) => {
                            return (
                                <>
                                    <HomeInfo key={index} element={element} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <InnerNav />
        </>
    )
}

export default Meditation
