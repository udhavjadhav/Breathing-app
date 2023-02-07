import React from 'react'
import Navbar from '../Navbar/Navbar';
import InnerNav from '../InnerNav/InnerNav';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
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
        subheader={<ListSubheader  sx={{fontWeight:'bolder', fontSize:'18px', mt:2, mb:1}}><ArrowBackIosIcon fontSize='small' onClick={()=>Navigate('/')}/>Settings</ListSubheader>}
      >
        {/* <Divider sx={{m:1}}/> */}
        <ListItem onClick={()=>Navigate('/account')}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="Account" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem onClick={()=>Navigate('/subscriptions')}>
          <ListItemIcon>
            <SubscriptionsOutlinedIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="Manage Subscription" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DateRangeIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="Reminders" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <DownloadOutlinedIcon color="info"/>
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
            <DarkModeOutlinedIcon color="info"/>
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
            <DoNotDisturbIcon color="info"/>
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
            <NotificationsNoneOutlinedIcon color="info"/>
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
            <SupportAgentIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="Support" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InfoOutlinedIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="About" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOpenIcon color="info"/>
          </ListItemIcon>
          <ListItemText primary="Privacy Policy" />
          <ListItemIcon>
            <ChevronRightIcon sx={{mx:2}}/>
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GavelOutlinedIcon color="info"/>
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