/* eslint-disable */
import './App.css';
import Blog from './pages/blog';
import SignIn from './pages/login';
import { Provider } from 'react-redux';
import { store } from './state/Store';
import RouterApp from './routes';


function App() {
  return (
    // // <Blog/>
    // <SignIn/>
    <Provider store={store}>      
      <RouterApp />      
    </Provider>
  );
}

export default App;
