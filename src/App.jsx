import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
    </>
  )
}

export default App
