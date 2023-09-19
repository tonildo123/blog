import { Navigate, Route, Routes } from 'react-router-dom';
import Blog from '../pages/blog';
import SignIn from '../pages/login';
import ResponsiveCard from '../pages/posts';
import AllPosts from '../pages/posts/allPosts';


const RoutesPublic = () => (

    <Routes>
        <Route path='/' element={<Blog />} />
        <Route path='/login/admin' element={<SignIn />} />
        <Route path='/cards/detail' element={<ResponsiveCard />} />
        <Route path='/cards/all' element={<AllPosts />} />        
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
);

export default RoutesPublic;  