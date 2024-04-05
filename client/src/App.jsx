import './index.css'

import {Navigation} from './components/navigation/Navigation.jsx'
import { Route, Routes } from 'react-router-dom'
import { PATH } from './paths.js'
import { HomeMain } from './components/home/HomeMain.jsx'
import { Contact } from './components/zaNas/Contact.jsx'


function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path={PATH.home} element={<HomeMain />}></Route>
      <Route path={PATH.kontakti} element={<Contact />}></Route>
    </Routes>
    </>
  )
}

export default App
