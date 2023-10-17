import './App.css'
import LogIn from '../LogIn/LogIn'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <LogIn />
      <Outlet />
    </div>
  )
}

export default App
