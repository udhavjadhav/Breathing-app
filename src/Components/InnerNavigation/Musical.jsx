import React from 'react'
import Navbar from '../Navbar/Navbar'
import MelodyNav from '../Melodies/MelodyNav'
import InnerNav from '../InnerNav/InnerNav'

const Musical = () => {
    return (
        <div>
            <Navbar />
            <MelodyNav />
            Musical Works
            <InnerNav/>
        </div>
    )
}

export default Musical
