import * as React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SleepDetails from './SleepDetails';
import InnerNav from '../InnerNav/InnerNav';
import './SleepSongs.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function SleepSongs() {
    const { id } = useParams()
    const filterSong = SleepDetails.filter((song) => {
        if (song.id == id) {
            return song
        }
    })
    const filt = filterSong[0].urllist
    return (
        <>
            <Navbar />
            <div className='sleepmain'>
                {
                    filterSong.map((element, index) => {
                        return (
                            <div key={index} className='sample mt-4'>
                                <h3 style={{ color: 'darkblue', fontWeight: 'bolder' }} > <SelfImprovementIcon fontSize='large' /> {element.title}</h3>
                                    <img className='rotateimg border' src={element.image} alt="loading" />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                Live From Space
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {element.name}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                {
                                    filt?.map((song, index) => {
                                        const music = song.url
                                        return <div key={index} className='container m-1 p-2'>
                                            <audio key={index} controls src={music}></audio>
                                        </div>
                                    })
                                }
                                <div className='m-3'>
                                    <FavoriteBorderIcon fontSize='medium' style={{ marginRight: '6vh' }} />
                                    <PlaylistAddIcon fontSize='medium' style={{ marginRight: '6vh' }} />
                                    <AccessAlarmIcon fontSize='medium' style={{ marginRight: '6vh' }} />
                                    <MoreVertIcon fontSize='medium' />
                                </div>
                                <InnerNav />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
