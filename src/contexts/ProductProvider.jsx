import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [trending, setTrending] = useState([]);
    const [loading, setLoading] = useState(true);
    const [installed, setInstalled] = useState([]);

    // filter trending products by average rating and get top 8 products
    const filterTrendingByAvgRating = (data) => {
        const filterTrending = data.filter(product => product.ratingAvg <= 5)
        const shortTrending = filterTrending.sort((a, b) => b.ratingAvg - a.ratingAvg);
        const trendingProducts = shortTrending.slice(0, 8);
        setTrending(trendingProducts);
    }

    // fetch all apps as products (initial data)
    const fetchApps = async () => {
        const res = await fetch('/data.json')
        const data = await res.json();
        setProducts(data);

        // trending products filtering set trending
        filterTrendingByAvgRating(data);
    }

    // fetch single app by id for app details page
    const fetchProductDetails = (id) => {
        const product = products.find(p => p.id === parseInt(id));
        return product;
    }

    // implement search functionality in apps page
    const searchProducts = (query) => {
        return products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
    };

    // save to local 
    const handleInstall = (app) => {
        if (installed.find(a => a.id === app.id)) {
            toast.error('This app is already installed!');
            return;
        }
        // add new key for installed apps
        const updatedApp = { ...app, installed: true };

        // const newApps = products.map(p => p.id === app.id ? updatedApp : p);
        // setProducts(newApps);

        localStorage.setItem('installedApps', JSON.stringify([...installed, updatedApp]));
        setInstalled([...installed, updatedApp]);
        // console.log(installed);
        toast.success(`${app.title} successfully Installed!`)
    }

    // uninstall and remove form local
    const handleUninstall = (id, appName) => {
        const updatedLocalApps = installed.filter(app => app.id !== id)
        setInstalled(updatedLocalApps)
        localStorage.setItem('installedApps', JSON.stringify(updatedLocalApps))
        toast.success(`${appName}  successfully Uninstalled!`)
    }

    // sorting products by rating in installation page
    const sortProductsByRating = (category, productsList) => {
        if (category === 'highToLow') {
            return productsList.sort((a, b) => a.size - b.size);
        }
        if (category === 'lowToHigh') {
            return productsList.sort((a, b) => b.size - a.size);
        }
        return productsList;
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
        setInstalled(JSON.parse(localStorage.getItem('installedApps') || '[]'))

        loadApps();
    }, [])

    const productInfo = {
        products,
        setProducts,
        trending,
        fetchProductDetails,
        loading,
        setLoading,
        searchProducts,
        sortProductsByRating,
        installed,
        handleInstall,
        handleUninstall,
    };

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;