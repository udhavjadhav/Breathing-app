import React from 'react'
import SongsDetails from '../SongsDetails'
// import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Divider from '@mui/material/Divider';
import Navbar from '../Navbar/Navbar'
import InnerNav from '../InnerNav/InnerNav';
import HomeInfo from '../HomeInfo';

function Sleep() {
    return (
        <>
            <Navbar/>
            <InnerNav />
            <div className="container-fluid text-center mt-5">
                    <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '5vh' }} ><BedtimeIcon fontSize='medium' /> Sleep</h4>

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

export default Sleep;
