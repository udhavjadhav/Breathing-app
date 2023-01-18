import React from 'react'
import { Button } from '@mui/material'
import Data from './Data';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';

function HomePage() {
    const locale = 'en';
    const today = new Date();

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    const Name = "Udhav";

    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/music')
        // Navigate('/Sample')
    }

    return (
        <>
            <Navbar />
            <div class="container p-3 mx-5 m-5  ">
                <div class="row">
                    <div class="col-md-10">
                        <h1 className='font-weight-bolder'>{wish + Name}</h1>
                        <Button variant='outlined'>{date}</Button>
                        <Button sx={{ m: 2 }} variant='outlined'>{time}</Button>
                        <h4 className='mt-3 font-weight-bolder fst-italic d-flex flex-wrap p-5 border'>“ This is universal. You sit and observe your breath. You can’t say this is a Hindu breath or a Christian breath or a Muslim breath !
                            ” <br /><small className='mt-3 text-end'> – Charles Johnson </small> </h4>
                    </div>
                    <div class="col-md-2 ">
                        <img src="https://cdn.doyou.com/articles/6a-1575918606525.gif=w1080" alt="" srcset="" />
                        {/* <Button variant='contained'>Start</Button> */}
                    </div>
                </div>
            </div>
            {/* <div className="container d-flex mt-3">
                    <div className='container text-center mt-2 greetings'>
                        <h1 className='font-weight-bolder'>{wish + Name}</h1>
                        <Button variant='outlined'>{date}</Button>
                        <Button sx={{ m: 2 }} variant='outlined'>{time}</Button>
                    </div>
                    <div className="img">
                        {/* <Button sx={{text: 'center', height: 100, boxShadow: 3, fontSize: 15, padding: 5, borderRadius: '100%', fontWeight: 'bolder' }} variant="contained" size="large">Start <br /> Breathing</Button>
            <img style={{height:'55vh', width:'55vh', border: '1px solid pink'}} src="./src/assets/adaptive-icon.png" alt="" srcset="" /> 
        </div> 
                </div >*/}
            <div className="container-fluid ">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '5vh' }} ><SelfImprovementIcon fontSize='large' /> Meditation</h4>
                <Divider sx={{ m: 2 }} color='secondary' />
                <div className="row shadow m-3 p-1">
                    {
                        Data.map((element) => {
                            const { name, title, image } = element;
                            return (
                                <>
                                    <Card onClick={handleClick} sx={{ maxWidth: 400, m: 4 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" >
                                                    {title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
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
