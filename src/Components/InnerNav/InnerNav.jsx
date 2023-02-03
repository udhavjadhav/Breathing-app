import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { useNavigate } from 'react-router-dom';

export default function InnerNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

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
    const handleSleep = () =>{
        Navigate('/sleep')
    }

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation 
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={handleClick} label="Home" sx={{fontWeight:'bolder'}} icon={<HomeIcon />} />
          <BottomNavigationAction onClick={handleMeditation} label="Meditation" sx={{fontWeight:'bolder'}} icon={<SelfImprovementIcon />} />
          <BottomNavigationAction onClick={handleMelodies} label="Melodies" sx={{fontWeight:'bolder'}} icon={<MusicNoteIcon />} />
          <BottomNavigationAction onClick={handleSleep } label="Sleep" sx={{fontWeight:'bolder'}} icon={<BedtimeIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import HomeIcon from '@mui/icons-material/Home';
// import BedtimeIcon from '@mui/icons-material/Bedtime';
// import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
// import MusicNoteIcon from '@mui/icons-material/MusicNote';

// function InnerNav() {
//     const Navigate = useNavigate();
//     const handleClick = () =>{
//         Navigate('/')
//     }
//     const handleMelodies = () =>{
//         Navigate('/melodies')
//     }
//     const handleMeditation = () =>{
//         Navigate('/meditation')
//     }
//     const handleRelax = () =>{
//         Navigate('/relax')
//     }
//     const handleSleep = () =>{
//         Navigate('/sleep')
//     }
//   return (
//     <div id='appbar' className='container-fluid d-flex shadow pt-2 text-center mw-90'>
//         <div className='container d-flex'>
//             <p style={{cursor:'pointer'}} onClick={handleClick}><HomeIcon sx={{text:'center'}} /><br /> Home</p>
//         </div>
//         <div className='container d-flex'>
//             <p style={{cursor:'pointer'}} onClick={handleMeditation} ><SelfImprovementIcon /><br /> Meditation</p>
//         </div>  
//         <div className='container d-flex '>
//             <p style={{cursor:'pointer'}} onClick={handleMelodies}>  <MusicNoteIcon /><br /> Melodies</p>
//         </div>
//         <div className='container d-flex'>
//             <p style={{cursor:'pointer'}} onClick={handleSleep}><BedtimeIcon /><br /> Sleep</p>
//         </div>
//     </div>
//   )
// }

// export default InnerNav;
