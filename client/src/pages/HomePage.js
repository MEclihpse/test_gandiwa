import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function HomePage() {
    return (
        <div className="App bg-white dark:bg-gray-900">
            <NavBar/>
            <div className="flex flex-col">
                <Outlet/>
            </div>
        </div>    
    )
}