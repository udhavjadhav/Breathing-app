import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SleepNav() {
 
  const [showTimer, setShowTimer] = useState(false);

  const handleOpen = () => {
      setShowTimer(true);
  }
  //Timer
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(15);

  var timer;
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
      // if(timer<=0)
     return () => {clearInterval(timer)}
  })


  const Navigate = useNavigate();
  const handleAll = () => {
    Navigate('/melodies')
  }
  const handleFav = () => {
    Navigate('/nature')
  }
  const handleStories = () => {
    Navigate('/musical')
  }
  const handleMusic = () => {
    Navigate('/category')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='' position="static" sx={{ position: 'relative', left: 0, right: 0, zIndex: 1}} elevation={22} >
        <div>
          <h4 id='headtext'><ArrowBackIosNewIcon className='back' />Melodies
            <AccessAlarmIcon className='icon' onClick={handleOpen} />
            <p className='timer' id={showTimer === false ? 'hidedata' : ''} >{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</p>
          </h4>
        </div>
        <List >
          <ListItem disablePadding>
            <ListItemButton onClick={handleAll} sx={{ textAlign: 'center', fontWeight: 'bolder' }}>
              <ListItemText primary="All" />
            </ListItemButton>
            <ListItemButton onClick={handleFav} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Nature" />
            </ListItemButton>
            <ListItemButton onClick={handleStories} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Musical" />
            </ListItemButton>
            <ListItemButton onClick={handleMusic} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppBar>
    </Box>
  );
}