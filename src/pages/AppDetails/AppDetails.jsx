import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ReviewChart from '../../components/ReviewChart/ReviewChart';
import { LuDownload, LuMessageSquareQuote } from 'react-icons/lu';
import { FaStar } from 'react-icons/fa';
import Loading from '../../components/shared/Loading/Loading';
import { useEffect } from 'react';

const AppDetails = () => {
    const { fetchProductDetails, handleInstall, installed, loading, setLoading } = useProducts();
    const { id } = useParams()

    const app = fetchProductDetails(id) || {};
    const { title, companyName = '', downloads = '0', ratings = [], reviews = '0', description = '', size = '0', image } = app;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 250);
        scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (!app?.id) {
        return (
            <div className="w-11/12 mx-auto py-20 text-center space-y-3">
                <h2 className="text-3xl font-bold text-primary">App Not Found</h2>
                <p className="opacity-70">We could not find this app. Please check another application.</p>
            </div>
        );
    }

    const isInstalled = installed.find(a => a.id === app.id);
    return (
        <div className="w-11/12 mx-auto space-y-5 py-20">
            <div className="flex lg:flex-row flex-col gap-5 items-stretch">
                <div className="flex-1 w-11/12 lg:w-full mx-auto    ">
                    <img className="rounded-xl shadow-2xl h-auto w-full lg:w-auto" alt="" src={image} />
                </div>
                <div className="flex-2">
                    <div className="space-y-3 border-b-2 pb-4 border-secondary">
                        <h2 className="text-primary text-3xl font-bold">{title}</h2>
                        <p>Developed by <span className="text-secondary font-medium">{companyName}</span></p>
                    </div>
                    <div className="py-5 flex justify-between items-center">
                        <div className="stats stats-horizontal overflow-auto" style={{ scrollbarGutter: 'stable', scrollbarWidth: 'thin', }}>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <LuDownload className='text-4xl text-blue-900' />
                                </div>
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">{downloads}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <FaStar className='text-4xl text-yellow-400' />

                                </div>
                                <div className="stat-title">Avarage Ratings </div>
                                <div className="stat-value">{ratings.length > 0 ? ratings[4]?.count || 0 : 0}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <LuMessageSquareQuote className='text-4xl text-blue-900' />

                                </div>
                                <div className="stat-title">Total Reviews</div>
                                <div className="stat-value">{reviews}</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button
                            disabled={isInstalled}
                            onClick={() => handleInstall(app)}
                            className={` btn shadow-xl hover:shadow-2xl btn-xl ${isInstalled ? 'bg-[#00D390]/50' : 'bg-[#00D390]'}  text-white`}>{isInstalled ? 'Installed' : `Install Now(${size} MB)`} </button>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="">
                <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2>
                <ReviewChart ratings={ratings} />
            </div>
            {/* <hr className="border-t-2 border-gray-200" /> */}

            <div className="">
                <h2 className="text-4xl font-bold text-primary mb-5">Description</h2>
                <div className="text-justify space-y-3 opacity-60">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default AppDetails;