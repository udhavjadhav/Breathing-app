import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Music from './Components/Music'
import Songs from './Components/Songs/Songs'
import Meditation from './Components/Meditation/Meditation'
import Relax from './Components/Relax/Relax'
import Sleep from './Components/Sleep/Sleep'
import Melodies from './Components/Melodies/Melodies'

function App() {

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/songs/:id' element={<Songs/>}/>
          <Route path='/meditation' element={<Meditation/>}/>
          <Route path='/relax' element={<Relax/>}/>
          <Route path='/melodies' element={<Melodies/>}/>
          <Route path='/sleep' element={<Sleep/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
