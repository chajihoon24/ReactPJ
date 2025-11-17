import { useState } from 'react'
import Home from './pages/home';
import Page1 from './pages/page1';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
