import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaAppStore, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineInstallDesktop } from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';

const Navbar = () => {
    const navLinks = [
        { label: "Home", to: "/", icon: <IoHomeOutline />, },
        { label: "Apps", to: "/apps", icon: <FaAppStore /> },
        { label: "Installation", to: "/installations", icon: <MdOutlineInstallDesktop /> }
    ]

    return (
        <header className=' shadow-sm'>
            <div className="navbar bg-base-100 mx-auto lg:w-11/12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2 h-fit mx-2">
                            <GiHamburgerMenu className='text-2xl ' />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink className={({ isActive }) =>
                                            `font-semibold transition-colors active:bg-[#afafaf]
                                    ${isActive ? 'text-primary' : 'text-base-content'}`}
                                            to={link.to} end><span>{link.icon}</span>{link.label}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Link className=" text-xl max-h-12" to="/"><img src={logo} className='w-full max-h-12' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-base font-semibold">
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className=''>
                                    <NavLink
                                        className={({ isActive }) =>
                                            `font-semibold transition-colors active:bg-[#afafaf]
                                    ${isActive ? 'text-primary' : 'text-base-content'}`}
                                        to={link.to} end
                                    ><span>{link.icon}</span>{link.label}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="https://github.com/tirthorajmondal" target="_blank" className="btn bg-linear-to-br from-indigo-500 to-purple-500 text-white"><FaGithub /> Contribute
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;