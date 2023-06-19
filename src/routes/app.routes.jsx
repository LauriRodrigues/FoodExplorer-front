import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { Home } from '../pages/Home'

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}