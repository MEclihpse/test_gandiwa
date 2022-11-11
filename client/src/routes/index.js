import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Register from "../components/Register"
import Login from "../components/Login"
import ListUser from "../components/ListUser"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        children: [
            {
                path: '',
                element: <ListUser/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },

])

export default router