import React from 'react'
// import SongsDetails from '../SongsDetails'
import SleepDetails from './SleepDetails';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Divider from '@mui/material/Divider';
import Navbar from '../Navbar/Navbar'
import InnerNav from '../InnerNav/InnerNav';
import HomeInfo from '../HomeInfo';
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
            <InnerNav />

            <div className="sleep mt-5">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '2vh' }} ><BedtimeIcon fontSize='medium' /> Sleep</h4>
                <Divider sx={{ m: 2 }} color='secondary' />

                <div className="wrapper" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {
                        SleepDetails.map((element, index) => {
                            return (
                                <>
                                    <Card onClick={()=>{
                                         Navigate(`/sleepsongs/${element.id}`)
                                    }} sx={{ width: 412, maxWidth: '90%', m: 3, flexDirection: 'row' }}>
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
        </>
    )
}

export default Sleep;
