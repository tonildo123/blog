import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from "../pages/login";
import BlogFile from '../components/BlogFile';



const RoutesPrivate = () => (

    <Routes>
        {/* <Route path='/login/admin' element={<SignIn />} /> */}
        <Route path='/blog/admin' element={<BlogFile />} />
        
        <Route path='*' element={<Navigate to='/login/admin' replace />} />
    </Routes>

);

export default RoutesPrivate;  