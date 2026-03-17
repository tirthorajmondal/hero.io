import { useLoaderData } from 'react-router-dom';
import AppCard from '../../components/AppCard/AppCard';
import useProducts from '../../hooks/useProducts';
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const Apps = () => {
    const { products } = useProducts();
    return (
        <div className="">
            <SectionHeading title="Our All Applications" subtitle="Explore our extensive collection of applications!" className="mt-10"/>
            <div className="w-11/12 mx-auto flex flex- col lg:flex-row gap-5 items-center justify-between lg:items-end mt-10 sticky">
                <h2 className="text-lg  underline  font-bold">({products.length}) Apps Found</h2>
                <div className="">
                    <label className="input max-w-75 w-60 lg:w-75 input-secondary ">

                        <input className="" required="" placeholder="Search Apps " type="search" defaultValue="" />
                    </label>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
                {products.map(app => <AppCard key={app.id} app={app} />)}
            </div>
        </div>
    );
};

export default Apps;