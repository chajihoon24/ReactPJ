
import Home from '../pages/home';
import Page1 from '../pages/page1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '../contexts/AppProvider';
import AppLayout from '../layout/AppLayout';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Login';
import Page4 from '../pages/Page4';
import Page3 from '../pages/Page3';
import Page2 from '../pages/Page2';


function App() {


    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>

                    {/*인증 관련 페이지*/}
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login />} />
                    </Route>                    
                    

                    {/*App 페이지*/}
                    <Route element={<AppLayout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/page1" element={<Page1 />} />
                        <Route path="/page2" element={<Page2 />} />
                        <Route path="/page3" element={<Page3 />} />
                        <Route path="/page4" element={<Page4 />} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </AppProvider>

    );
}

export default App
