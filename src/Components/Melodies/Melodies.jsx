import React , {useState} from 'react'
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
// import song from '../../../public/assets/Melodies/Birds.mp3'
const Melodies = () => {
    const [condition , setCondition] = useState([])
    function valuetext(value) {
        return `${value}°C`;
    }
    console.log(condition)
    return (
        <>
            <Navbar />
            <InnerNav />
            <div className='container d-flex flex-wrap mt-4'>
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder' }} className='container text-center m-5'>Melodies<MusicNoteIcon fontSize='medium' /></h4>

                {
                    MelodiesDetails.map((element, index) => {
                        const num = index + 1
                       
                        return (
                           <>
                            <div id={num == condition? 'demo1': ''} onClick={()=>{  const audio = new Audio(element.song); audio.play(); setCondition(element.id) }} key={index} style={{ height: '14vh', width: '14vh', borderRadius: '50%', cursor: 'pointer' }} className='container border m-4 p-5 '>
                                <div className='d-flex justify-content-center'>
                                    <p style={{ fontWeight: 'bold' }}>{element.title}</p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }   
            </div>
            <div className="container mt-5">
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
