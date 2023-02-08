import React from 'react'
import SleepDetails from './SleepDetails';
import Navbar from '../Navbar/Navbar'
import SleepNav from './SleepNav';
import InnerNav from '../InnerNav/InnerNav';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sleep() {
    const Navigate = useNavigate();
    return (
        <>
            <Navbar />
            <SleepNav />
            <div className="sleepdiv">
                <div className="sleepsection" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {
                        SleepDetails.map((element, index) => {
                            return (
                                <>
                              
                                    <Card onClick={() => {
                                        Navigate(`/sleepsongs/${element.id}`)
                                    }} sx={{ width: 412, maxWidth: '90%', m:2,  flexDirection: 'row' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="150"
                                                image={element.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h6" >
                                                    {element.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {element.name}
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

                    <InnerNav />
        </>
    )
}

export default Sleep;
