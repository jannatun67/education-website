import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from './LayOut/MainLayout.jsx';
import HomePage from './Pages/Home/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<MainLayout/>}>
    <Route path="/" element={<HomePage/>} />
     <Route path={"/course:id"} element={<HomePage/>} />
   </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
