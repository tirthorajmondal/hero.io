import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InstalledCard from '../../components/InstalledCard/InstalledCard'

const MyInstallations = () => {
    const [installedApps, setInstalledApps] = useState([])
    const [sortOption, setSortOption] = useState('default')


    const handleUninstall = (appId, appTitle) => {
        const updatedApps = installedApps.filter(app => app.id !== appId)
        setInstalledApps(updatedApps)
        localStorage.setItem('installedApps', JSON.stringify(updatedApps))
        // toast.success(`${appTitle} uninstalled successfully!`)
    }

    const formatDownloads = (count) => {
        if (count >= 1000000000) return `${(count / 1000000000).toFixed(1)}B`
        if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
        if (count >= 1000) return `${(count / 1000).toFixed(1)}K`
        return count?.toString() || '0'
    }

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOption === 'size-high-low') return b.size - a.size
        if (sortOption === 'size-low-high') return a.size - b.size
        return 0
    })

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps') || '[]')
        setInstalledApps(apps)
    }, [])


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-6 py-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Your Installed Apps</h1>
                    <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
                </div>

                {installedApps.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-lg p-20">
                        <div className="text-center max-w-md mx-auto">
                            <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-3">No apps installed yet</h2>
                            <p className="text-gray-500 mb-6">Start exploring and install your favorite apps</p>
                            <Link
                                to="/apps"
                                className="btn-primary inline-block hover:underline"
                            >
                                Browse Apps
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Apps Count and Sort */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">
                                <span className="text-indigo-600">({installedApps.length})</span> Apps Found
                            </h2>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                            >
                                <option value="default">Sort By Size</option>
                                <option value="size-high-low">Size: High to Low</option>
                                <option value="size-low-high">Size: Low to High</option>
                            </select>
                        </div>

                        {/* Installed Apps List */}
                        <div className="space-y-4">
                            {
                                sortedApps.map(app => <InstalledCard
                                    key={app.id}
                                    app={app}
                                    handleUninstall={handleUninstall}
                                    formatDownloads={formatDownloads} />)
                            }
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default MyInstallations;