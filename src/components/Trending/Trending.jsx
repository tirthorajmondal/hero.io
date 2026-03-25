import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import AppCard from '../AppCard/AppCard';
import SectionHeading from '../SectionHeading/SectionHeading';

const Trending = () => {

    const { trending } = useProducts();

    return (
        <section className="w-11/12 mx-auto mt-5 py-10 md:py-14">
            <SectionHeading title="Trending Apps" subtitle="Check out our most popular applications!" />
            <div className='flex flex-col justify-center items-center'>
                <div className='mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-3  md:gap-5 '>
                    {trending.map(app => <AppCard key={app.id} app={app} />)}
                </div>
                <Link to="/apps" className='btn btn-outline mx-auto w-fit text-blue-500 hover:text-blue-700 hover:border-blue-500 hover:bg-blue-500 hover:text-white active:text-white active:bg-blue-500'>View All Apps</Link>
            </div>
        </section>
    );
};

export default Trending;