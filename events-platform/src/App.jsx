import './App.css'
import { Routes, Route, useLocation} from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Events from '../components/Events'
import Users from '../components/Users'
import Event from '../components/Event'
import StaffSignUp from '../components/StaffSignUp'
import StaffUser from '../components/StaffUser'
import StaffLogin from '../components/StaffLogin'
import User from '../components/User'
import StaffNav from '../components/StaffNav'

function App() {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
    <Header/>
    {!isLoggedIn && location.pathname !== "/" && <Nav />}
    {isLoggedIn && location.pathname !== "/" && <StaffNav />}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/events' element={<Events/>}/>
    <Route path='/events/:id' element={<Event/>}/>
    <Route path='/users' element={<Users/>}/>
    <Route path='/users/:username' element={<User/>}/>
    <Route path="/staff-signup" element={<StaffSignUp />} />
    <Route path="/staff-user" element={<StaffUser />} />
    <Route path="/staff-login" element={<StaffLogin />} />
    </Routes>
    </>
  )
}

export default App
