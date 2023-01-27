import React from 'react'
import SongsDetails from '../SongsDetails'
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
            
            <div className="sleep mt-5">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder',marginLeft:'2vh'}} ><BedtimeIcon fontSize='medium' /> Sleep</h4>
                <Divider sx={{ m: 2 }} color='secondary' />

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
        </>
    )
}

export default Sleep;
