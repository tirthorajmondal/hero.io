import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InstalledCard from '../../components/InstalledCard/InstalledCard'
import useProducts from '../../hooks/useProducts'
import SectionHeading from './../../components/SectionHeading/SectionHeading';

const MyInstallations = () => {
    const [sortValue, setSortValue] = useState('')
    const { handleUninstall, sortProductsByRating, installed } = useProducts()

    console.log(installed, 'installed');

    const handleSortApps = (e) => {
        const option = e.target.value;
        setSortValue(option);
        sortProductsByRating(option, installed)
    }


    return (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-10">
                {/* Header */}
                {/* <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Your Installed Apps</h1>
                    <p className="text-gray-600"></p>
                </div> */}
                    

                {installed.length === 0 ? (
                    <div className=" rounded-2xl p-10">
                        <div className="text-center max-w-md mx-auto bg-white my-20">
                            <h2 className="text-xl font-semibold text-gray-500 mb-3">Nothing is installed</h2>
                            {/* <p className="text-gray-400 text-sm mb-6">Explore and install your favorite apps</p> */}
                            <Link
                                to="/apps"
                                className="btn-primary text-sm text-gray-400 inline-block hover:underline"
                            >
                                Explore Apps
                            </Link>
                        </div>
                    </div>
                ) : (
                        <>
                            <SectionHeading title="Your Installed Apps" subtitle="Explore All Trending Apps on the Market developed by us" />
                        {/* Apps Count and Sort */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">
                                <span className="text-indigo-600">({installed.length})</span> Apps Found
                            </h2>
                            <select
                                value={sortValue}
                                onChange={handleSortApps}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                            >
                                <option value="">Sort By Size</option>
                                <option value="highToLow">Size: High to Low</option>
                                <option value="lowToHigh">Size: Low to High</option>
                            </select>
                        </div>

                        {/* Installed Apps List */}
                        <div className="space-y-4">
                            {
                                installed.map(app => <InstalledCard
                                    key={app.id}
                                    app={app}
                                    handleUninstall={handleUninstall}
                                />)
                            }
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MyInstallations;