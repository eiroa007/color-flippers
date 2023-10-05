import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Heroes from './pages/Heroes'
import Heroe from './pages/Heroe'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path='heroe"/:id' element={<Heroe />} />
            </Route> 

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
