import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from './TravelVerseLogo.png'

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const menuItem = <>
        <button className="self-center px-8 py-3 rounded"><Link to='/'>Home</Link></button>
        <button className="self-center px-8 py-3 rounded"><Link to='/blog'>Blog</Link></button>
    </>
    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
                <div className="container flex justify-between h-16 mx-auto">
                    <p><Link to='/'><img className='w-36' src={logo} alt="" /></Link></p>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {menuItem}
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">

                        {
                            user?.email ?
                                <>
                                    <Link to='/addservice'><button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50 mr-1.5">
                                        Add Service
                                    </button></Link>
                                    <Link to='/myreviews'><button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50 mr-1.5">
                                        My Reviews
                                    </button></Link>
                                    <Link to='/'><button onClick={logOut} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50 mr-1.5">
                                        Log Out
                                    </button></Link>
                                </>
                                :
                                <Link to='/login'><button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50">
                                    Login
                                </button></Link>
                        }


                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;