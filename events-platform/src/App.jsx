import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Events from '../components/Events'
import Users from '../components/Users'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/users' element={<Users/>}/>
    </Routes>
    </>
  )
}

export default App
