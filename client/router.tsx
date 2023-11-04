import App from './App'
import Home from './components/Home/Home'
import Info from './components/Info/Info'
import { Route, createRoutesFromElements } from 'react-router-dom'

const router = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/info" element={<Info />} />
  </Route>
)

export default router
