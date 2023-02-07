import { Button } from '@mui/material'
import Navbar from './Navbar/Navbar';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import HomeInfo from './HomeInfo';
import SongsDetails from './SongsDetails';
import InnerNav from './InnerNav/InnerNav';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
function HomePage() {

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        // if(!token) Navigate('/firstpage');
        const options = {
            url: 'http://localhost:2000/auth',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: { token }
        };
        axios(options).then(async (res) => {
            console.log({ response: res });
        });
    }, [])
    const locale = 'en';
    const today = new Date();

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    const Name = "Dear";

    return (
        <div >
            {/* <Navbar /> */}

            <div className="wrapper" style={{ backgroundColor: '#F0F8FF', padding: '2vh' }}>
                <div className="sample mt-3">
                    <h1 style={{ marginTop: '10px', marginBottom: '20px', fontStyle: 'italic' }} className="d-flex flex-wrap">{wish + Name}</h1>
                    <Button variant='outlined'>{date}</Button>
                    <Button sx={{ m: 1 }} variant='outlined'>{time}</Button><br />
                    {/* <img style={{ height: '35vh', display: 'flex' }} src="https://media1.giphy.com/media/XyakWW6WwplIPSHfuR/giphy.gif" alt="loading" /> */}
                    <img className='imgrotate' src="/assets/welcome.jpeg" alt="loading" />
                </div>
            </div>

            <div className="icons mt-4">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder', marginLeft: '2vh' }} ><SelfImprovementIcon fontSize='large' /> Meditation</h4>
                <Divider sx={{ m: 2 }} color='secondary' />
            </div>

            <div className="cards" style={{
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
            <InnerNav />
        </div>
    )
}

export default HomePage;
