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
const Melodies = () => {
    const [condition, setCondition] = useState([])
    function valuetext(value) {
        return `${value}°C`;
    }
    console.log(condition)
    return (
        <>
            <Navbar />
            <InnerNav />

            <div className='' id='melodies'>
                <div className='container'>
                    <div className="row d-flex flex-wrap g-1">
                        <h4 id='text1' className='text-center' style={{ color: 'darkblue', fontWeight: 'bolder' }}>Melodies<MusicNoteIcon fontSize='medium' /></h4>
                        {
                            MelodiesDetails.map((element, index) => {
                                const num = index + 1

                                return (
                                    <>
                                        <div id={num == condition ? 'demo1' : ''} onClick={() => {
                                            const audio = new Audio(element.song);
                                            audio.play();
                                            setCondition(element.id)
                                        }}
                                            key={index} style={{
                                                height: '16vh', width: '16vh', borderRadius: '50%',
                                                cursor: 'pointer'
                                            }} className='view d-flex flex-wrap border m-4 p-5 '>

                                            <div id='text' className='container'>
                                                <p style={{ fontWeight: 'bold' }}>{element.title}</p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                    <Accordion sx={{ mt: 28 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <h4 style={{ fontWeight: 'bolder' }} className='container text-center'>Mixer </h4>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <div className="container d-flex w-50">
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
                                    {/* <Box sx={{ width: 500, textAlign: 'center' }}>
                                            <span>Sound 3</span>
                                            <Slider
                                                aria-label="Temperature"
                                                defaultValue={30}
                                                getAriaValueText={valuetext}
                                                color="primary"
                                            />
                                        </Box> */}
                                    {/* <Box sx={{ width: 500, textAlign: 'center' }}>
                                        <span>Sound 4</span>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={30}
                                            getAriaValueText={valuetext}
                                            color="primary"
                                        />
                                    </Box> */}
                                    {/* <Box sx={{ width: 500, textAlign: 'center' }}>
                                        <span>Sound 5</span>
                                        <Slider
                                            aria-label="Temperature"
                                            defaultValue={30}
                                            getAriaValueText={valuetext}
                                            color="primary"
                                        />
                                    </Box> */}
                                </div>
                            </Typography>
                        </AccordionDetails>

                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Melodies
