import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import ReviewChart from '../../components/ReviewChart/ReviewChart';

const AppDetails = () => {
    const { fetchProductDetails } = useProducts();
    const { id } = useParams()

    const appInfo = fetchProductDetails(id) || {};
    const { title, companyName = '', downloads = '0', ratings = [], reviews = '0', description = '', size = '0', image } = appInfo;



    return (
        <div className="w-11/12 mx-auto space-y-5 py-20">
            <div className="flex lg:flex-row flex-col gap-5 items-stretch">
                <div className="flex-1">
                    <img className="rounded-xl shadow-2xl h-full" alt="" src={image} />
                </div>
                <div className="flex-2">
                    <div className="space-y-3 border-b-2 pb-4 border-secondary">
                        <h2 className="text-primary text-3xl font-bold">{title}</h2>
                        <p>Developed by <span className="text-secondary font-medium">{companyName}</span></p>
                    </div>
                    <div className="py-5 flex justify-between items-center">
                        <div className="stats stats-horizontal">
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg> */}
                                </div>
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">{downloads}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                                    </svg> */}
                                </div>
                                <div className="stat-title">Avarage Ratings </div>
                                <div className="stat-value">{ratings.length > 0 ? ratings[4]?.count || 0 : 0}</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"></path></svg> */}
                                </div>
                                <div className="stat-title">Total Reviews</div>
                                <div className="stat-value">{reviews}</div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-success btn-success text-white">Install Now ({size})</button>
                    </div>
                </div>
            </div>
            <hr className="border-t-2 border-gray-200" />
            <div className="">
                {/* <h2 className="text-4xl font-bold text-primary mb-5">Ratings</h2> */}
                <ReviewChart ratings={ratings} />
            </div>
            <hr className="border-t-2 border-gray-200" />

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