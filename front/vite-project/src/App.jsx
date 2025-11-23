import { useState } from 'react'
import Home from './pages/home';
import Page1 from './pages/page1';
import './App.css'
import { AuthContext,AuthProvider,useAuth } from './contexts/authContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

  );
}

export default App
