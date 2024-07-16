import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { PATH } from './paths.js';
import { HomeMain } from './components/home/HomeMain.jsx';
import { Contact } from './components/zaNas/Contact.jsx';
import { Navigation } from './components/navigation/Navigation.jsx';
import { Pravila } from './components/zaNas/Pravila.jsx';
import { HallOfFame } from './components/hallOfFame/HallOfFame.jsx';
import { Prava } from './components/novini/Prava.jsx';
import { Nakazaniq } from './components/novini/Nakazaniq.jsx';
import { MixZona } from './components/novini/Mixzona.jsx';
import { SelectGolNaMesetsa } from './components/klasatsii/SelectGolNaMesetsa.jsx';
import { KerelskiIgrachNaSedmitsata } from './components/klasatsii/KerelskiIgrachNaSedmitsata.jsx';
import { GripSocksIgrachNaSedmitsata } from './components/klasatsii/GripSocksIgrachNaSedmitsata.jsx';
import { VR7ServicesIgrachNaSedmitsata } from './components/klasatsii/VR7ServicesIgrachNaSedmitsata.jsx';
import { BarberShopMartyGolNaSedmitsata } from './components/klasatsii/BarberShopMartyGolNaSedmitsata.jsx';
import { CairoFareplay } from './components/klasatsii/CairoFarePlay.jsx';
import { IgrataNaArabesk } from './components/klasatsii/IgrataNaArabesk.jsx';
import { Select } from './components/sustezaniya/Select.jsx';
import { SPLMalus } from './components/sustezaniya/SPLMalus.jsx';
import { SPL1Cairo } from './components/sustezaniya/SPL1Cairo.jsx';
import { SPL2Flame } from './components/sustezaniya/SPL2Flame.jsx';
import { SPL3Arabesk } from './components/sustezaniya/SPL3Arabesk.jsx';
import { SPL4 } from './components/sustezaniya/SPL4.jsx';
import { SPL5 } from './components/sustezaniya/SPL5.jsx';
import { Arabesk } from './components/statistika/pages/Arabesk.jsx';
import { Superliga } from './components/statistika/pages/Superliga.jsx';
import { Malus } from './components/statistika/pages/Malus.jsx';
import { Cairo } from './components/statistika/pages/Cairo.jsx';
import { Flame } from './components/statistika/pages/Flame.jsx';
import { SPLSever } from './components/statistika/pages/SPLSever.jsx';
import { SPLIztok } from './components/statistika/pages/SPLIztok.jsx';
import { MalusFootballSummerCup } from './components/statistika/pages/MalusFootballSummerCup.jsx';
import { StatistikaSPL4 } from './components/statistika/pages/StatistikaSPL4.jsx';
import { StatistikaSPL5 } from './components/statistika/pages/StatistikaSPL5.jsx';
import { ShemaKupa } from './components/statistika/pages/ShemaKupa.jsx';
import { Kupa } from './components/statistika/pages/Kupa.jsx';
import { Admin } from './components/admin/Admin.jsx';
import { AdminProvider } from './components/admin/AdminContext.jsx';
import AdminTable from './components/admin/AdminTable.jsx';
import toastConfig from './config/toastConfig.js';

function App() {
  return (
      <div className="App">
        <ToastContainer {...toastConfig}/>
        {location.pathname !== '/admin' && <Navigation />}
        <Routes>
          <Route path={PATH.home} element={<HomeMain />} />
          <Route path={PATH.kontakti} element={<Contact />} />
          <Route path={PATH.pravila} element={<Pravila />} />
          <Route path={PATH.hallOfFame} element={<HallOfFame />} />
          <Route path={PATH.prava} element={<Prava />} />
          <Route path={PATH.nakazaniq} element={<Nakazaniq />} />
          <Route path={PATH.mixzona} element={<MixZona />} />
          <Route path={PATH.SelectGolNaMesetsa} element={<SelectGolNaMesetsa />} />
          <Route path={PATH.KerelskiIgrachNaSedmitsata} element={<KerelskiIgrachNaSedmitsata />} />
          <Route path={PATH.GripSocksIgrachNaSedmitsata} element={<GripSocksIgrachNaSedmitsata />} />
          <Route path={PATH.VR7ServicesIgrachNaSedmitsata} element={<VR7ServicesIgrachNaSedmitsata />} />
          <Route path={PATH.BarberShopMartyGolNaSedmitsata} element={<BarberShopMartyGolNaSedmitsata />} />
          <Route path={PATH.CairoFareplay} element={<CairoFareplay />} />
          <Route path={PATH.IgrataNaArabesk} element={<IgrataNaArabesk />} />
          <Route path={PATH.superliga} element={<Select />} />
          <Route path={PATH.malus} element={<SPLMalus />} />
          <Route path={PATH.cairo} element={<SPL1Cairo />} />
          <Route path={PATH.flame} element={<SPL2Flame />} />
          <Route path={PATH.arabesk} element={<SPL3Arabesk />} />
          <Route path={PATH.spl4} element={<SPL4 />} />
          <Route path={PATH.spl5} element={<SPL5 />} />
          <Route path={PATH.statistikaSuperliga} element={<Superliga />} />
          <Route path={PATH.statistikaMalus} element={<Malus />} />
          <Route path={PATH.statistikaCairo} element={<Cairo />} />
          <Route path={PATH.statistikaFlame} element={<Flame />} />
          <Route path={PATH.statistikaArabesk} element={<Arabesk />} />
          <Route path={PATH.statistikaSpl4} element={<StatistikaSPL4 />} />
          <Route path={PATH.statistikaSpl5} element={<StatistikaSPL5 />} />
          <Route path={PATH.statistikaSever} element={<SPLSever />} />
          <Route path={PATH.statistikaIztok} element={<SPLIztok />} />
          <Route path={PATH.statistikaSummer} element={<MalusFootballSummerCup />} />
          <Route path={PATH.shemaTurnir} element={<ShemaKupa />} />
          <Route path={PATH.statistikaKupa} element={<Kupa />} />

          <Route path="/admin" element={
            <AdminProvider>
              <Admin />
            </AdminProvider>
          } />
          
          <Route path="/admin/*" element={
            <AdminProvider>
              <Admin />
            </AdminProvider>
          }>
            <Route path="players" element={<AdminTable />} />
            <Route path="teams" element={<AdminTable />} />
            <Route path="games" element={<AdminTable />} />
            <Route path="managers" element={<AdminTable />} />
            <Route path="staff" element={<AdminTable />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
