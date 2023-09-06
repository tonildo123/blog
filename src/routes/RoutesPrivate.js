import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from "../pages/login";



const RoutesPrivate = () => (

    <Routes>
        <Route path='/login/admin' element={<SignIn />} />
        {/* <Route path='/pets/create' element={<Create />} /> */}
        
        <Route path='*' element={<Navigate to='/login/admin' replace />} />
    </Routes>

);

export default RoutesPrivate;  