import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-white border-t border-base-300 bg-[#040016]">
            <div className="w-11/12 mx-auto py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-3">
                    <Link to="/" className="inline-block max-h-12">
                        <img src={logo} className="w-full max-h-12" alt="Hero.io" />
                    </Link>
                    <p className="text-sm opacity-80 leading-relaxed">
                        Discover high-quality apps, compare ratings, and install tools that boost your daily productivity.
                    </p>
                </div>

                <div>
                    <h3 className="footer-title">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="link link-hover">Home</Link></li>
                        <li><Link to="/apps" className="link link-hover">All Apps</Link></li>
                        <li><Link to="/installations" className="link link-hover">Installations</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-title">Top Categories</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                        <li><Link to="" className="link link-hover">Productivity</Link></li>
                        <li><Link to="" className='link link-hover'>Finance</Link></li>
                        <li><Link to="" className="link link-hover">Health & Fitness</Link></li>
                        <li><Link to="" className="link link-hover">Learning</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-title">Stay Connected</h3>
                    <p className="text-sm opacity-80 mb-3">Get updates on trending apps and new releases.</p>
                    <div className="flex items-center gap-2">
                        <a className="btn btn-sm btn-circle btn-ghost" aria-label="Facebook" href="#">
                            <FaFacebookF />
                        </a>
                        <a className="btn btn-sm btn-circle btn-ghost" aria-label="Instagram" href="#">
                            <FaInstagram />
                        </a>
                        <a className="btn btn-sm btn-circle btn-ghost" aria-label="X" href="#">
                            <FaXTwitter />
                        </a>
                        <a className="btn btn-sm btn-circle btn-ghost" aria-label="LinkedIn" href="#">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-base-300">
                <div className="w-11/12 mx-auto py-4 text-sm flex items-center justify-center">
                    <p className=''>© {currentYear} Hero.io. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
