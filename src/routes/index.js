import { useSelector } from 'react-redux';
import RoutesPrivate from './RoutesPrivate';
import RoutesPublic from './RoutesPublic';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const RouterApp = () => {
    const { logged } = useSelector(state => state.logger.user);

    return (
        <>  
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    {
                        logged
                            ? <Route path="/*" element={<RoutesPrivate />} />
                            : <Route path="/*" element={<RoutesPublic />} />
                    }

                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    )
};


export default RouterApp;
