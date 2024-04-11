import './index.css'

import { Route, Routes } from 'react-router-dom'
import { PATH } from './paths.js'
import { HomeMain } from './components/home/HomeMain.jsx'
import { Contact } from './components/zaNas/Contact.jsx'
import { Navigation } from './components/navigation/Navigation.jsx'
import { Pravila } from './components/zaNas/Pravila.jsx'
import { HallOfFame } from './components/hallOfFame/HallOfFame.jsx'
import { Prava } from './components/novini/Prava.jsx'
import { Nakazaniq } from './components/novini/Nakazaniq.jsx'
import { MixZona } from './components/novini/Mixzona.jsx'
import { SelectGolNaMesetsa } from './components/klasatsii/SelectGolNaMesetsa.jsx'



function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path={PATH.home} element={<HomeMain />}></Route>
      <Route path={PATH.kontakti} element={<Contact />}></Route>
      <Route path={PATH.pravila} element={<Pravila />}></Route>
      <Route path={PATH.hallOfFame} element={<HallOfFame />}></Route>
      <Route path={PATH.prava} element={<Prava />}></Route>
      <Route path={PATH.nakazaniq} element={<Nakazaniq />}></Route>
      <Route path={PATH.mixzona} element={<MixZona />}></Route>
      <Route path={PATH.SelectGolNaMesetsa} element={<SelectGolNaMesetsa />}></Route>
    </Routes>
    </>
  )
}

export default App
