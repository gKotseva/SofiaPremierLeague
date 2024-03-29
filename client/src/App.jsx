import './index.css'
import { Navigation } from "./components/navigation/Navigation"
import {BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/Home'
import { TableStandings } from './components/tables/tableStandings/TableStandings'
import { TableFixtures } from './components/tables/tableFixtures/TableFixtures'
import { TableResults } from './components/tables/tableResults/TableResults'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Home />
      <TableStandings />
      <TableFixtures />
      <TableResults />
    </BrowserRouter>
    </>
  )
}

export default App
