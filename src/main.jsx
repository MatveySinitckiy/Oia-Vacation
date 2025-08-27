import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes } from 'react-router-dom'
import { MainRoutes } from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRoutes />
  </StrictMode>,
)
