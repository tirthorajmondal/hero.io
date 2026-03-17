import errorImg from '../../assets/404.png';
import Navbar from '../../components/shared/Navbar/Navbar';
import SectionHeading from './../../components/SectionHeading/SectionHeading';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center min-h-[calc(100vh-68px)] gap-6'>

                <div className="max-w-48 lg:max-w-60 mx-auto">
                    <img src={errorImg} alt="Error" />
                </div>
                <SectionHeading title="Page Not Found" subtitle="The page you are looking for does not exist." />
            </div>
        </>
    );
};

export default ErrorPage;