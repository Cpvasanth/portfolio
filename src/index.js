import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Github from './pages/Github';
import Layout from './components/Layout';


function App() {
  return (

    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/Github" element={<Github />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>

  )


}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />)


