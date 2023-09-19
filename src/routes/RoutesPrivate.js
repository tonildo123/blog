import { Route, Routes, Navigate } from 'react-router-dom';
import BlogFile from '../components/BlogFile';



const RoutesPrivate = () => (

    <Routes>
        <Route path='/blog/admin' element={<BlogFile />} />        
        <Route path='*' element={<Navigate to='/blog/admin' replace />} />
    </Routes>

);

export default RoutesPrivate;  