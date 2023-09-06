import { Navigate, Route, Routes } from 'react-router-dom';
import Blog from '../pages/blog';
import SignIn from '../pages/login';


const RoutesPublic = () => (

    <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/login/admin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
);

export default RoutesPublic;  