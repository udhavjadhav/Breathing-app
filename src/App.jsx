import './App.css'
import HomePage from './Components/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Music from './Components/Music'
import Sample from './Components/Sample'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/sample' element={<Sample/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
