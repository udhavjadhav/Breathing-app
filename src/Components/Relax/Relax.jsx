import React from 'react'
import SongsDetails from '../SongsDetails'
import Navbar from '../Navbar/Navbar'
import InnerNav from '../InnerNav/InnerNav'
import HomeInfo from '../HomeInfo';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RelaxNav from './RelaxNav';
function Meditation() {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/melodies')
    }
    return (
        <>
            <Navbar/>
            <RelaxNav/>
            <div className="meditation mt-4">
            <Box textAlign='center'>
                <Button sx={{fontWeight: 'bolder', maxWidth:'50%', m:2}} fullWidth  onClick={handleClick} variant="contained" >Melodies</Button>
            </Box>
                <div className="wrapper" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {
                        SongsDetails.map((element, index) => {
                            return (
                                <>
                                    <HomeInfo key={index} element={element} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <InnerNav />
        </>
    )
}

export default Meditation
