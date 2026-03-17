import { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [trending, setTrending] = useState([]);

    const fetchApps = async () => {
        const res = await fetch('/data.json')
        const data = await res.json();
        setProducts(data);
        setTrending(data.slice(0, 8));
    }
    const fetchProductDetails = async (id) => {
        const product = products.find(p => p.id === 1)
        console.log(product);
        // return product;
    }

    useEffect(() => {
        fetchApps();
    }, [products])

    const productInfo = {
        products,
        setProducts,
        trending,
        fetchProductDetails,

    };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;