import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav
      className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
    >
      <div
        className="container flex flex-wrap justify-between items-center mx-auto"
      >
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul
            className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <NavLink
                to='/'
                end
                >Home</NavLink>
            </li>
            <li>
              <NavLink
                to='/login'
              >Login</NavLink>
            </li>
            <li>
              <NavLink
                to='/register'
              >Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    )
}