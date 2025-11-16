import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/contact' element={<Contact/>} />
     </Routes>
    </>
  )
}

export default App
