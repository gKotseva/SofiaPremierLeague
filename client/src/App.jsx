import './index.css'
import { Navigation } from "./components/navigation/Navigation"
import {BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/Home'
import { TableStandings } from './components/tables/TableStandings'
import { TableResults } from './components/tables/tableResults/TableResults'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Home />
      <TableStandings />
      <TableResults />
    </BrowserRouter>
    </>
  )
}

export default App
