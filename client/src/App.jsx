import './index.css'

import { Route, Routes } from 'react-router-dom'
import { PATH } from './paths.js'
import { HomeMain } from './components/home/HomeMain.jsx'
import { Contact } from './components/zaNas/Contact.jsx'
import { Navigation } from './components/navigation/Navigation.jsx'
import { Pravila } from './components/zaNas/Pravila.jsx'



function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path={PATH.home} element={<HomeMain />}></Route>
      <Route path={PATH.kontakti} element={<Contact />}></Route>
      <Route path={PATH.pravila} element={<Pravila />}></Route>
    </Routes>
    </>
  )
}

export default App
