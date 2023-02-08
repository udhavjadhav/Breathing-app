import React from 'react'
import Navbar from '../Navbar/Navbar';
import InnerNav from '../InnerNav/InnerNav';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginIcon from '@mui/icons-material/Login';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export default function Account() {
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

    //Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Navbar />
            <List
                sx={{ width: '100%', bgcolor: 'background.paper', cursor: 'pointer' }}
                subheader={<ListSubheader sx={{fontWeight:'bolder', fontSize:'18px', mt:2}}><ArrowBackIosIcon onClick={()=>Navigate('/settings')} fontSize='small'/>Account</ListSubheader>}
                
            >
                <ListItem >
                    <ListItemIcon>
                        <Person2OutlinedIcon fontSize='large' className='icon shadow p-1' color='info' />
                    </ListItemIcon>
                    <ListItemText primary="Your Name" />
                    <ListSubheader >Udhav Jadhav</ListSubheader>
                    <ListItemIcon>
                        <ChevronRightIcon sx={{ mx: 2 }} />
                    </ListItemIcon>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <LoginIcon fontSize='large' className='icon shadow p-1' color='info'/>
                    </ListItemIcon>
                    <ListItemText primary="You'r signed in as" />
                    <Chip onClick={handleClickOpen} sx={{ cursor: 'pointer' }} label="Unvarified" size="small" color='error' />
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Varify Your Email</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please enter your email here. We
                                will send the OTP.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Varify Now</Button>
                        </DialogActions>
                    </Dialog>

                    <ListItemIcon>
                        <ChevronRightIcon sx={{ mx: 2 }} />
                    </ListItemIcon>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <LockOpenIcon fontSize='large' className='icon shadow p-1' color='info'/>
                    </ListItemIcon>
                    <ListItemText primary="Change your password" />
                    <ListItemIcon>
                        <ChevronRightIcon sx={{ mx: 2 }} />
                    </ListItemIcon>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <SyncOutlinedIcon fontSize='large' className='icon shadow p-1' color='info' />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Sync with Google Fit" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
            </List>
            <InnerNav />
        </>
    );
}