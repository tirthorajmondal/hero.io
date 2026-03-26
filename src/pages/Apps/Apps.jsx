import { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import useProducts from '../../hooks/useProducts';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import notFoundImg from '../../assets/notFound.png';
import Loading from './../../components/shared/Loading/Loading';
import SearchLoading from '../../components/shared/Loading/SearchLoading';

const Apps = () => {
    const { searchProducts, products, loading } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchLoading, setSearchLoading] = useState(false);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchText) {
                const results = searchProducts(searchText);
                setFilteredProducts(results);
            } else {
                setFilteredProducts(products);
            }
            setSearchLoading(false);
        }, 250);

        setSearchLoading(true);

        return () => clearTimeout(timer);
    }, [searchText, products, searchProducts]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="">
            <SectionHeading title="Our All Applications" subtitle="Explore our extensive collection of applications!" className="mt-10" />
            <div className="w-11/12 mx-auto flex flex- col lg:flex-row gap-5 items-center justify-between lg:items-end mt-10 sticky">
                <h2 className="text-lg  underline  font-bold">({filteredProducts.length}) Apps Found</h2>
                <div className="">
                    <label className="input max-w-75 w-60 lg:w-75 input-secondary ">

                        <input
                            onChange={handleSearch}
                            className="" placeholder="Search Apps " type="search" value={searchText} />
                    </label>
                </div>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
               
                {searchLoading ? <SearchLoading /> :
                    filteredProducts.length > 0 ? filteredProducts.map(app => <AppCard key={app.id} app={app} />)
                        : <div className='text-center text-lg font-semibold col-span-full'>
                            <img src={notFoundImg} className='max-w-72 mx-auto' alt="" />
                            <p>No apps found matching "{searchText}"</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Apps;