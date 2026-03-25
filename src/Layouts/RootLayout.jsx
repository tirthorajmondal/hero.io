import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import { Suspense } from 'react';
import Loading from './../components/shared/Loading/Loading';
import Footer from './../components/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <Suspense fallback={<Loading />}>

            <div className="min-h-lvh flex flex-col bg-base-100 text-base-content">
                <Navbar />
                <div className="grow">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </Suspense >
    );
};

export default RootLayout;