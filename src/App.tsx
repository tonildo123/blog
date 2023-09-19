/* eslint-disable */
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state/Store';
import RouterApp from './routes';


function App() {
  return (
    <Provider store={store}>      
      <RouterApp />      
    </Provider>
  );
}

export default App;
