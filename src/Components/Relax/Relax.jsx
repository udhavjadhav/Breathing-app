import React from 'react'
import SongsDetails from '../SongsDetails'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import Navbar from '../Navbar';
import InnerNav from '../InnerNav';
import HomeInfo from '../HomeInfo';
import SpaIcon from '@mui/icons-material/Spa';


function Meditation() {
    const handleClick = () => {

    }
    return (
        <>
            <Navbar/>
            <InnerNav />
            <div className="container-fluid text-center mt-5">
                    <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '5vh' }} ><SpaIcon fontSize='medium' /> Relax</h4>

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
