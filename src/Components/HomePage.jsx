import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import Navbar from './Navbar/Navbar';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import HomeInfo from './HomeInfo';
import SongsDetails from './SongsDetails';
import InnerNav from './InnerNav/InnerNav';

function HomePage() {

    const locale = 'en';
    const today = new Date();

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    const Name = "Udhav";



    return (
        <>
            <Navbar />
            <InnerNav />

            <div className="container-fluid p-3">
                <div className="row mx-5 mt-5">
                    <div className="col-sm-4">
                        <h1 className='font-weight-bolder'>{wish + Name}</h1>
                        <Button variant='outlined'>{date}</Button>
                        <Button sx={{ m: 2 }} variant='outlined'>{time}</Button><br />

                    </div>
                   
                    <div className="col-sm-8 align-items-center">
                        {/* <img src="https://cdn.doyou.com/articles/6a-1575918606525.gif=w1080" alt=""  /> */}
                        <img style={{ height: '35vh' }} src="https://media1.giphy.com/media/XyakWW6WwplIPSHfuR/giphy.gif" alt="" />
                        {/* <img style={{ height: '40vh' }} src="https://www.artofliving.org/sites/www.artofliving.org/files/wysiwyg_imageupload/6d7faeab-ezgif-com-gif-maker-11%20%281%29.gif" alt="" /> */}
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '5vh' }} ><SelfImprovementIcon fontSize='large' /> Meditation</h4>
                <Divider sx={{ m: 2 }} color='secondary' />
                <div className="row m-3 p-1">
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

export default HomePage;
