import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
// import { useParams } from 'react-router-dom';
import PauseIcon from '@mui/icons-material/Pause';
import SongsDetails from './SongsDetails';
import Navbar from './Navbar'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
export default function Music() {
    const theme = useTheme();

    let audio = new Audio('./src/assets/Songs/Daily.mp3')
    const start = () => {
        audio.play()
        console.log('playing')
    }

    // const {id} = useParams();
    // console.log(id)
    return (
        <>
            <Navbar />
            {/* <div className="container text-center">
                <img style={{ height: '50vh', width: '50vh' }} src="./src/assets/adaptive-icon.png" alt="" srcset="" />
            </div> */}
            <div className="container border p-5 mt-4 shadow">
            <h3 style={{color:'darkblue', fontWeight: 'bolder'}} > <AutoStoriesIcon fontSize='large'  /> Stories</h3>
            <Divider sx={{m:3}} color='secondary'/>
                <div className="row m-5">
                    {
                        SongsDetails.map((element, index) => {
                            const { id, name, title, image, url } = element;
                            return (
                                <div key={index} className="container w-50">
                                    <div className="row">
                                        <Card sx={{ display: 'flex', width: 'auto', mb: 8, maxWidth: '90%' }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                                <CardContent sx={{ flex: '1 0 auto' }}>
                                                    <Typography component="div" variant="h5">
                                                        {title}
                                                    </Typography>
                                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                                        {name}
                                                    </Typography>
                                                </CardContent>
                                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                    <IconButton aria-label="previous">
                                                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                                    </IconButton>
                                                    <IconButton onClick={start} aria-label="play/pause">
                                                        <PlayArrowIcon sx={{ height: 50, width: 50 }} />
                                                    </IconButton>
                                                    <IconButton aria-label="next">
                                                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                                    </IconButton>
                                                </Box>
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