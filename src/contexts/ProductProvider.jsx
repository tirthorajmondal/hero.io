import { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(false);

    const filterTrendingByAvgRating = (data) => {
        const filterTrending = data.filter(product => product.ratingAvg <= 5)
        const shortTrending = filterTrending.sort((a, b) => b.ratingAvg - a.ratingAvg);
        const trendingProducts = shortTrending.slice(0, 8);
        setTrending(trendingProducts);
    }

    const fetchApps = async () => {
        const res = await fetch('/data.json')
        const data = await res.json();
        setProducts(data);

        // trending products filtering
        filterTrendingByAvgRating(data);
    }
    const fetchProductDetails = (id) => {
        const product = products.find(p => p.id === parseInt(id));
        return product;
    }

    useEffect(() => {
        const loadApps = async () => {
            setLoading(true);
            try {
                await fetchApps();
            } catch (error) {
                console.error("Error fetching apps:", error);
            } finally {
                setLoading(false);
            }
        };

        loadApps();
    }, [])

    const productInfo = {
        products,
        setProducts,
        trending,
        fetchProductDetails,
        loading,
    };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;