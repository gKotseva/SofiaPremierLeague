import './index.css'
import { Navigation } from "./components/navigation/Navigation"
import {BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Home />
    </BrowserRouter>
    </>
  )
}

export default App
