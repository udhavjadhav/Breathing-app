import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Music from './Components/Music'
import Songs from './Components/Songs/Songs'
import Meditation from './Components/Meditation/Meditation'
import Relax from './Components/Relax/Relax'
import Sleep from './Components/Sleep/Sleep'
import Melodies from './Components/Melodies/Melodies'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Welcome from './Components/Welcome/Welcome'
import FirstPage from './Components/FirstPage/FirstPage'
import SleepSongs from './Components/Sleep/SleepSongs';
import Category from './Components/InnerNavigation/Category'
import Musical from './Components/InnerNavigation/Musical'
import Nature from './Components/InnerNavigation/Nature'

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/firstpage' element={<FirstPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/songs/:id' element={<Songs/>}/>
          <Route path='/sleepsongs/:id' element={<SleepSongs/>}/>
          <Route path='/meditation' element={<Meditation/>}/>
          <Route path='/relax' element={<Relax/>}/>
          <Route path='/melodies' element={<Melodies/>}/>
          <Route path='/sleep' element={<Sleep/>}/>
          <Route path='/nature' element={<Nature/>}/>
          <Route path='/musical' element={<Musical/>}/>
          <Route path='/category' element={<Category/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
