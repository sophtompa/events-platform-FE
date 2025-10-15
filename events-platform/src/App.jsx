import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Events from '../components/Events'
import Users from '../components/Users'
import Event from '../components/Event'
import StaffSignUp from '../components/StaffSignUp'

function App() {

  return (
    <>
    <Header/>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/events/:id' element={<Event/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path="/staff-signup" element={<StaffSignUp />} />
    </Routes>
    </>
  )
}

export default App
