import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container mt-2">
                <div className="row">
                    <div className="col">
                        <p className='fw-bolder'>Daily Meditation</p>
                        <hr style={{color:'light'}}/>
                        <p>Sleep</p>
                        <p>Relax</p>
                        <p>Calm</p>
                        <p>Mental Health</p>
                    </div>
                    <div className="col">
                        <p className='fw-bolder'>Sleep Meditation</p>
                        <hr />
                        <p>Peaceful Sleep</p>
                        <p>Gratitude sleep</p>
                        <p>Night Gratitude</p>
                        <p>Deep Sleep</p>
                    </div>

                    <div className="col">
                        <p className='fw-bolder'>Relax Meditation</p>
                        <hr />
                        <p>Sleep Relaxation</p>
                        <p>Mental Relax</p>
                        <p>Nature Relax</p>
                        <p>Sky Walk</p>
                    </div>
                    <div className="col">
                        <p className='fw-bolder'>Calm Meditation</p>
                        <hr />
                        <p>Mental Health</p>
                        <p>Mind Therapy</p>
                        <p>Heaven</p>
                        <p>Mentally Relax</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center'>© 2023 Breathings. All Rights Reserved!</p>
            <div className='d-flex justify-content-center m-2'>
                <small>Privacy Policy</small>
                <small className='mx-3'>Cookie Policy</small>
            </div>


            {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquid. Aperiam voluptatibus, esse officia ducimus ut libero odio porro nam veniam, officiis sequi quisquam voluptatum nisi asperiores tempora laboriosam? Debitis qui error cupiditate nostrum.</p> */}
        </footer>
    );
}

export default Footer;
