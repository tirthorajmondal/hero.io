import React from 'react';

const InstalledCard = ({ app, handleUninstall, formatDownloads }) => {
    return (
        <div key={app.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
            <div className="flex items-center gap-4">
                <div className="shrink-0">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-20 h-20 rounded-lg object-cover"
                    />
                </div>

                {/* info */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{app.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-cyan-500 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            {app.downloads}
                        </span>
                        <span className="text-orange-500 font-medium flex items-center gap-1">
                            ⭐ {app.ratingAvg?.toFixed(1) || '0.0'}
                        </span>
                        <span className="text-gray-500">{app.size} MB</span>
                    </div>
                </div>

                <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="shrink-0 bg-emerald-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-emerald-600 transition duration-300"
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledCard;