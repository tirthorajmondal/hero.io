import AppCard from '../../components/AppCard/AppCard';
import useProducts from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import SectionHeading from './../../components/SectionHeading/SectionHeading';

const Home = () => {
    const { trending } = useProducts();
    return (
        <div className="w-11/12 mx-auto space-y-5 py-20">
            <SectionHeading title="Trending Apps" subtitle="Check out our most popular applications!" />
            <div className='flex flec justify-center items-center'>
                <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
                    {trending.map(app => <AppCard key={app.id} app={app} />)}
                </div>
                <Link to="/apps" className='btn btn-outline mx-auto w-fit text-blue-500 hover:text-blue-700 hover:border-blue-500'>View All Apps</Link>
            </div>
        </div>
    );
};

export default Home;