import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.tsx'
import Catalog from './pages/Catalog.tsx'
import ProductPage from './pages/ProductPage.tsx'
import RequestPage from './pages/RequestPage.tsx'
import Admin from './pages/Admin.tsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/request' element={<RequestPage />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App
