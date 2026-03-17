import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div data-theme="heroio" className="min-h-screen bg-base-100 text-base-content">
            <Navbar/>
            <Outlet />
        </div>
    );
};

export default RootLayout;