import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import InnerNav from '../InnerNav/InnerNav'
import MelodiesDetails from './MelodiesDetails'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './Melodies.css'
import MelodyNav from './MelodyNav';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect } from 'react';


const Melodies = () => {
    const [condition, setCondition] = useState([]);
    const [showTimer, setShowTimer] = useState(false);

    const handleOpen = () => {
        setShowTimer(true);
    }
    //Timer
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(15);

    var timer;
    // const audio = new Audio('/assets/Breathing/Breathing1.mp3')
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1);

            if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59)
            }
            if (minutes === 0 && seconds === 0) {
                setCondition(prev => !prev)
                setShowTimer(false)
            }

        }, 1000)
       return () => {clearInterval(timer)}
    })

    function valuetext(value) {
        return `${value}°C`;
    }
    return (
        <>
            <Navbar />
            <MelodyNav />
            <div className='melodies'>
                <div className='container'>
                    <div className="row d-flex flex-wrap g-1">
                        <div>
                            <h4 id='headtext'><ArrowBackIosNewIcon className='back' /><MusicNoteIcon fontSize='medium' />Melodies
                                <AccessAlarmIcon color='secondary' className='icon' onClick={handleOpen} />
                                <p className='timer' id={showTimer === false ? 'hidedata' : ''} >{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</p>
                            </h4>
                        </div>
                        {
                            MelodiesDetails.map((element, index) => {
                                const num = index + 1
                                return (
                                    <>
                                        <div id={num == condition ? 'showShadow' : condition} 
                                        onClick={() => {
                                            var audio = new Audio(element.song);
                                            audio.play();
                                            // showTimer === false ? audio.play() : audio.pause();
                                            setCondition(element.id)
                                        }}
                                            key={index} style={{
                                                height: '16vh', width: '16vh', borderRadius: '50%',
                                                cursor: 'pointer'
                                            }} className='view d-flex flex-wrap border m-4 p-5 '>
                                            <div id='text'>
                                                <p className='title-text' style={{ fontWeight: 'bold' }}>{element.title}</p>
                                            </div>
                                            
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <Accordion sx={{ mt: 25 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4 style={{ fontWeight: 'bolder' }} className='container text-center'>Mixer </h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className="container d-flex w-75">
                                    <Box sx={{ width: 500, textAlign: 'center' }}>
                                        <span>Sound 1</span>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={30}
                                            getAriaValueText={valuetext}
                                            color="primary"
                                        />
                                    </Box>
                                    <Box sx={{ width: 500, textAlign: 'center' }}>
                                        <span>Sound 2</span>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={30}
                                            getAriaValueText={valuetext}
                                            color="primary"
                                        />
                                    </Box>
                                </div>
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>
            <InnerNav />
        </>
    )
}

export default Melodies
