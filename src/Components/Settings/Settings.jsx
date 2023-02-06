import React from 'react'
import Navbar from '../Navbar/Navbar';
import InnerNav from '../InnerNav/InnerNav';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DownloadIcon from '@mui/icons-material/Download';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';
import GavelIcon from '@mui/icons-material/Gavel';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const [checked, setChecked] = React.useState(['wifi', '']);
  const Navigate = useNavigate()
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <Navbar />
      <List
        sx={{ width: '100%', bgcolor: 'background.paper', cursor:'pointer' }}
        subheader={<ListSubheader  sx={{fontWeight:'bolder', fontSize:'18px'}}><ArrowBackIosIcon fontSize='small' onClick={()=>Navigate('/')}/>Settings</ListSubheader>}
      >
        <ListItem onClick={()=>Navigate('/account')}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem onClick={()=>Navigate('/subscriptions')}>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Subscription" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText primary="Reminders" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            < DownloadIcon  />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Download over cellular" />
          <Switch
            edge="end"
            onChange={handleToggle('wifi')}
            checked={checked.indexOf('wifi') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-wifi',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-darkmode" primary="Enable Dark Mode" />
          <Switch
            edge="end"
            onChange={handleToggle('darkmode')}
            checked={checked.indexOf('darkmode') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-darkmode',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DoNotDisturbIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-donotdisturb" primary="Do not disturb" />
          <Switch
            edge="end"
            onChange={handleToggle('donotdisturb')}
            checked={checked.indexOf('donotdisturb') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-donotdisturb',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-notification" primary="Push Notification" />
          <Switch
            edge="end"
            onChange={handleToggle('notification')}
            checked={checked.indexOf('notification') !== -1}
            inputProps={{
              'aria-labelledby': 'switch-list-label-notification',
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SupportAgentIcon/>
          </ListItemIcon>
          <ListItemText primary="Support" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOpenIcon/>
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Terms & Conditions" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
      </List>
      <ListSubheader color='primary' sx={{display:'flex',justifyContent:'center'}}>Version 1.0</ListSubheader>  
      <InnerNav />
    </>
  );
}