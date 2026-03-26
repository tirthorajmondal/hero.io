import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import { Suspense, useEffect } from 'react';
import Loading from './../components/shared/Loading/Loading';
import Footer from './../components/shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    const navigation = useNavigation();

    const isNavigating = navigation.state === 'loading';

    return (
        <Suspense fallback={<Loading />}>
            <div className="min-h-lvh flex flex-col bg-base-100 text-base-content">
                {isNavigating && <Loading />}
                <Navbar />
                <div className="grow">
                    <Outlet />
                </div>
                <Footer />
                <ToastContainer />
            </div>
        </Suspense >
    );
};

export default RootLayout;