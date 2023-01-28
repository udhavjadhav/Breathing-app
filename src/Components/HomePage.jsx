import { Button } from '@mui/material'
import Navbar from './Navbar/Navbar';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Divider from '@mui/material/Divider';
import HomeInfo from './HomeInfo';
import SongsDetails from './SongsDetails';
import InnerNav from './InnerNav/InnerNav';

function HomePage() {

    const locale = 'en';
    const today = new Date();

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    const Name = "Udhav";



    return (
        <>
            <Navbar />
            <InnerNav />

            <div className="wrapper d-inline">
                <div className="sample mt-4">
                    <h1 className='font-weight-bolder mb-3'>{wish + Name}</h1>
                    <Button variant='outlined'>{date}</Button>
                    <Button sx={{ m: 2 }} variant='outlined'>{time}</Button><br />
                    <img style={{ height: '35vh', display: 'flex' }} src="https://media1.giphy.com/media/XyakWW6WwplIPSHfuR/giphy.gif" alt="loading" />
                </div>
            </div>

            <div className="demo mt-5">
                <h4 style={{ color: 'darkblue', fontWeight: 'bolder',}} ><SelfImprovementIcon fontSize='large' /> Meditation</h4>
                <Divider sx={{ m: 2 }} color='secondary' />

                <div className="demo2" style={{
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
        </>

    )
}

export default HomePage;
