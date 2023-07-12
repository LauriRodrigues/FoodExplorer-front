import { Routes, Route} from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Home } from '../pages/Home'
import { Details } from "../pages/Details"
import { New } from "../pages/New"

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/new" element={<New/>}/>
    </Routes>
  )
}