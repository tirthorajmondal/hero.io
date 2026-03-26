import { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import Trending from '../../components/Trending/Trending';
import useProducts from '../../hooks/useProducts';
import Loading from './../../components/shared/Loading/Loading';

const Home = () => {
    const { loading, setLoading } = useProducts();

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        scrollTo(0, 0);
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <Hero />
            <Trending />
        </>
    );
};

export default Home;