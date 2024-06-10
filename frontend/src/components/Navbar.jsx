import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <nav className="flex items-center justify-between flex-wrap bg-gray-300 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Notes App</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Shared 
                    </Link>
                    <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        Login 
                    </Link>
                    <Link to="/my-notes" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                        My Notes
                    </Link>
                    <Link to="/home" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Create
                    </Link>
                    <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Register
                    </Link>

                    <Link to="/logout" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                        Logout
                    </Link>

                </div>
            </div>
        </nav>


    );
}

export default Navbar;

