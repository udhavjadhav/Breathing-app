import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SongsDetails from './SongsDetails';
import Navbar from './Navbar/Navbar'
import Divider from '@mui/material/Divider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from 'react-router-dom';
import InnerNav from '../Components/InnerNav/InnerNav'
export default function Music() {
    const Navigate = useNavigate();
    const handleRelax = () => {
        Navigate('/songs')
    }

    return (
        <>
            <Navbar />
            <InnerNav/>
            <div className="container border p-5 mt-4 shadow">
                <h3 style={{ color: 'darkblue', fontWeight: 'bolder' }} > <AutoStoriesIcon fontSize='large' /> Stories</h3>
                <Divider sx={{ m: 3 }} color='secondary' />
                <div className="row m-5">
                    {
                        SongsDetails.map((element, index) => {
                            const { id, name, title, image, url } = element;
                            return (
                                <div key={index} className="container w-50">
                                    <div className="row">
                                        <Card onClick={handleRelax} sx={{ display: 'flex', width: 'auto', mb: 8, maxWidth: '90%', cursor: 'pointer' }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component="div" variant="h5">
                                                        {title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        {name}
                                                    </Typography>
                                                </CardContent>
                                            </Box>
                                            <CardMedia
                                                component="img"
                                                sx={{ mx: 15, width: 'auto', height: 100, p: 1 }}
                                                image={image}
                                                alt="Live from space album cover"
                                            />
                                        </Card>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    );
}