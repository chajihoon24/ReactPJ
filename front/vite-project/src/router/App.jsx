
import Home from '../pages/home';
import Page1 from '../pages/page1';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '../contexts/AppProvider';

function App() {


    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                </Routes>
            </BrowserRouter>
        </AppProvider>

    );
}

export default App
