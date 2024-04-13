import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Relax from './pages/relax'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Relax/>
    </BrowserRouter>
  </React.StrictMode>
)
