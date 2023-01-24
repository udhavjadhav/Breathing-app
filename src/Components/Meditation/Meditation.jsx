import React from 'react'
import SongsDetails from '../SongsDetails'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import InnerNav from '../InnerNav/InnerNav';
import Navbar from '../Navbar/Navbar'
import HomeInfo from '../HomeInfo';
function Meditation() {
    return (
        <>
            <Navbar/>
            <InnerNav />
            <div className="container-fluid text-center mt-5">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '5vh' }} ><SelfImprovementIcon fontSize='large' /> Meditation</h4>
        

                <Divider sx={{ m: 2 }} color='secondary' />
                <div className="row m-3 p-1">
                    {
                        SongsDetails.map((element, index) => {
                            return (
                                <>
                                   <HomeInfo key={index} element={element}/>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Meditation
