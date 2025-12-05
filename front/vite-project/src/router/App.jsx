
import Home from '../pages/home';
import Page1 from '../pages/page1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '../contexts/AppProvider';
import AppLayout from '../layout/AppLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';

function App() {


    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>

                    {/*인증 관련 페이지*/}
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/page1" element={<Page1 />} />
                    </Route>                    
                    

                    {/*App 페이지*/}
                    <Route element={<AppLayout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/page1" element={<Page1 />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </AppProvider>

    );
}

export default App
