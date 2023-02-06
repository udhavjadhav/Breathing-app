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
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

export default function InnerNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  const Navigate = useNavigate();
    const handleClick = () =>{
        Navigate('/')
    }
    const handleRelax = () =>{
        Navigate('/relax')
    }
    const handleMeditation = () =>{
        Navigate('/meditation')
    }
    const handleSleep = () =>{
        Navigate('/sleep')
    }
    const handleSettings = () =>{
      Navigate('/settings')
    }

  return (
    <Box sx={{p:4}} ref={ref}>
      <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:1}} elevation={3}>
          <div className='bottomNav'>
        <BottomNavigation 
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={handleClick} label="Home" sx={{fontWeight:'bolder', minWidth:'65px'}} icon={<HomeIcon />} />
          <BottomNavigationAction onClick={handleSleep } label="Sleep" sx={{fontWeight:'bolder', minWidth:'65px' }} icon={<BedtimeIcon />} />
          <BottomNavigationAction onClick={handleMeditation} label="Meditation" sx={{fontWeight:'bolder', minWidth:'65px'}} icon={<SelfImprovementIcon />} />
          <BottomNavigationAction onClick={handleRelax} label="Relax" sx={{fontWeight:'bolder', minWidth:'65px'}} icon={<MusicNoteIcon />} />
          <BottomNavigationAction onClick={handleSettings} label="Settings" sx={{fontWeight:'bolder', minWidth:'65px'}} icon={<SettingsIcon />} />
        </BottomNavigation>
    </div>
      </Paper>
    </Box>
  );
}
