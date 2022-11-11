import './App.css';
import router from './routes'
import {RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // <Provider store={store}>
      <RouterProvider router={router}/>
    // </Provider>
  );
}

export default App;

