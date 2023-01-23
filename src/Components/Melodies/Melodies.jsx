import React from 'react'
import Navbar from '../Navbar'
import InnerNav from '../InnerNav'
import MelodiesDetails from './MelodiesDetails'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import song from '../../../public/assets/Melodies/Birds.mp3'
const Melodies = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    const handlePlay = (id) => {
        console.log(id);
        MelodiesDetails.map((item, index) => {
           
            const audio = new Audio(music)
            audio.play()
        })
    }
    //   console.log(MelodiesDetails)
    return (
        <>
            <Navbar />
            <InnerNav />
            <div className='container d-flex flex-wrap mt-4 w-75'>
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder' }} className='container text-center m-5'>Melodies<MusicNoteIcon fontSize='medium' /></h4>

                {
                    MelodiesDetails.map((element, index) => {
                        return (
                            <div onClick={()=>{  const audio = new Audio(element.song); audio.play }} key={index} style={{ height: '14vh', width: '14vh', borderRadius: '50%', maxWidth: '90%', cursor: 'pointer' }} className='container-fluid shadow m-4 p-5 '>
                                <div className='d-flex justify-content-center'>
                                    <p style={{ fontWeight: 'bold' }}>{element.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="container text-center mt-5">
                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h4 style={{ fontWeight: 'bolder' }} className='container text-center'>Mixer  </h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div className="container d-flex w-50">
                                <Box sx={{ width: 500 }}>
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
                                <Box sx={{ width: 500, textAlign: 'center' }}>
                                    <span>Sound 3</span>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="primary"
                                    />
                                </Box>
                                <Box sx={{ width: 500, textAlign: 'center' }}>
                                    <span>Sound 4</span>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        color="primary"
                                    />
                                </Box>
                                <Box sx={{ width: 500, textAlign: 'center' }}>
                                    <span>Sound 5</span>
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

        </>
    )
}

export default Melodies
