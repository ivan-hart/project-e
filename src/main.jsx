import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Decode from "./pages/Decode.jsx"
import Encode from "./pages/Encode.jsx"
import Layout from './pages/Layout.jsx'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="encode" element={<Encode/>} />
          <Route path="decode" element={<Decode/>} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);