import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductProvider';

const useProducts = () => {
    const all = useContext(ProductContext)
    return all;
};

export default useProducts;