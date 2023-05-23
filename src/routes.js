import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Filme from './pages/Filme'
import Home from './pages/Home'
import Header from './components/Header'
import Erro from './pages/Errro'



const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path='*' element={<Erro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
