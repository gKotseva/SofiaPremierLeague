import './index.css'
import { Navigation } from "./components/navigation/Navigation"
import {BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/Home'
import { TableStandings } from './components/table/TableStandings'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Home />
      <TableStandings />
    </BrowserRouter>
    </>
  )
}

export default App
