import { useEffect, useState } from 'react';
import AppCard from '../../components/AppCard/AppCard';
import useProducts from '../../hooks/useProducts';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import notFoundImg from '../../assets/notFound.png';

const Apps = () => {
    const { products } = useProducts();
    const [searchText, setSearchText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        if (searchText === '') setFilteredProducts(products);
        
            const filteredProducts = products.filter(app => app.title.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredProducts(filteredProducts);
            console.log(filteredProducts);
        }

        useEffect(() => {
            setFilteredProducts(products);
        }, [products])
        return (
            <div className="">
                <SectionHeading title="Our All Applications" subtitle="Explore our extensive collection of applications!" className="mt-10" />
                <div className="w-11/12 mx-auto flex flex- col lg:flex-row gap-5 items-center justify-between lg:items-end mt-10 sticky">
                    <h2 className="text-lg  underline  font-bold">({filteredProducts.length}) Apps Found</h2>
                    <div className="">
                        <label className="input max-w-75 w-60 lg:w-75 input-secondary ">

                            <input
                                onInput={handleSearch}
                                className="" placeholder="Search Apps " type="search" value={searchText} />
                        </label>
                    </div>
                </div>
                <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
                    {filteredProducts.length > 0 ? filteredProducts.map(app => <AppCard key={app.id} app={app} />)
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