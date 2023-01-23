const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port = 2000


const Data = [
    {
        "id": 1, "name": 'William Parker', "title": "Daily Motivation", "image": 'https://cdn.pixabay.com/photo/2016/11/08/05/16/boy-1807518__340.jpg', "src":"../../assets/Songs/Relaxation/Relaxation.ogg"
    },

    {
        "id": 2, "name": 'Udhav Jadhav', "title": "Relaxation", image: 'https://media.istockphoto.com/id/1166417394/photo/women-in-meditation-while-practicing-yoga-in-a-training-room-happy-calm-and-relaxing.jpg?s=612x612&w=0&k=20&c=MrasitXQORAXMCaoF3F_mfWW_bCvOGeam78Pg1kxIFg=', src:"../../assets/Songs/Relaxation/Relaxation.mp3"
    },

    {
        "id": 3, "name": 'William Parker', "title": "Mental Health", image: 'https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A='
    },

    {
        "id": 4, "name": 'Harpreet Singh', "title": "Nature Sound", image: 'https://www.truerelaxations.com/wp-content/uploads/2020/07/woman-meditating-yoga-green-nature-1080x675.jpg'
    },

    {
        "id": 5, "name": 'William Parker', "title": "Heaven", image: 'https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_960_720.jpg'
    },

    {
        "id": 6, "name": 'Sameer', "title": "Breathing Exersice", image: 'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532__340.jpg'
    },

    {
        "id": 7, "name": 'William Parker', "title": "Sky Walk", image: 'https://greenlivingmag.com/wp-content/uploads/2019/09/backlit-clouds-dawn-415380-1.jpg'
    },

    {
        "id": 8, "name": 'William Parker', "title": "Mountains", image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/young-woman-meditating-on-mountain-top-royalty-free-image-582626518-1562084428.jpg'
    },

    {
        "id": 9, "name": 'William Parker', "title": "Paradise", image: 'https://cdn.pixabay.com/photo/2014/12/24/05/02/drop-of-water-578897_960_720.jpg'
    },

    {
        "id": 10, "name": 'William Parker', "title": "Jump", image: 'https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_960_720.jpg'
    },
    {
        "id": 11, "name": 'William Parker', "title": "Spiritual meditation", image: 'https://img.freepik.com/free-vector/chakras-concept_23-2148571635.jpg?w=2000'
    },

    {
        "id": 12, "name": 'William Parker', "title": "Focused meditation", image: 'https://mindworks.org/wp-content/uploads/2017/08/How-to-meditate-for-better-concentration.jpg'
    },
]

app.get("/" , (req , res)=>{
    res.set('content-type', 'audio/mp3');
    res.json(Data)
})


app.listen(port , ()=>{
    console.log(`Server Starts on ${port}`);
})