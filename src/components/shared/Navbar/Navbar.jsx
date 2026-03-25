import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaAppStore } from 'react-icons/fa';
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
        <header className="navbar bg-base-100 shadow-sm lg:px-3 lg:w-11/12 mx-auto">
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
                <a className="btn">Button</a>
            </div>
        </header>
    );
};

export default Navbar;