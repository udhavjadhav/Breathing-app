import React from 'react'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SpaIcon from '@mui/icons-material/Spa';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import '../Navbar/Navbar.css'
function InnerNav() {
    const Navigate = useNavigate();
    const handleClick = () =>{
        Navigate('/')
    }
    const handleMelodies = () =>{
        Navigate('/melodies')
    }
    const handleMeditation = () =>{
        Navigate('/meditation')
    }
    const handleRelax = () =>{
        Navigate('/relax')
    }
    const handleSleep = () =>{
        Navigate('/sleep')
    }
   

  return (
    <div id='appbar' className='container-fluid d-flex shadow pt-2 text-center mw-90'>
        <div className='container d-flex'>
            <p style={{cursor:'pointer'}} onClick={handleClick}><HomeIcon sx={{text:'center'}} /><br /> Home</p>
        </div>
        <div className='container d-flex'>
            <p style={{cursor:'pointer'}} onClick={handleMeditation} ><SelfImprovementIcon /><br /> Meditation</p>
        </div>  
        <div className='container d-flex '>
            <p style={{cursor:'pointer'}} onClick={handleMelodies}>  <MusicNoteIcon /><br /> Melodies</p>
        </div>
        <div className='container d-flex'>
            <p style={{cursor:'pointer'}} onClick={handleSleep}><BedtimeIcon /><br /> Sleep</p>
        </div>
        {/* <div className='container d-flex '>
            <p style={{cursor:'pointer'}} onClick={handleRelax}><SpaIcon /><br /> Relax</p>
        </div> */}
        {/* <div className='container d-flex '>
            <p style={{cursor:'pointer'}} onClick={handleRelax}><AccountCircleIcon /><br /> Profile</p>
        </div> */}
    
    </div>
  )
}

export default InnerNav
