import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

const InstalledCard = ({ app, handleUninstall }) => {
    return (
        <div key={app.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4">
            <div className="flex items-center gap-4">
                <div className="shrink-0">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-16 md:w-20 h-16 md:h-20 rounded-lg object-cover"
                    />
                </div>

                {/* info */}
                <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 md:text-lg mb-1">{app.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-[#00d390] font-medium flex items-center gap-1">
                            <LuDownload className='' />
                            {app.downloads}
                        </span>
                        <span className="text-yellow-500 font-medium flex items-center gap-1">
                            <FaStar className='text-yellow-500' /> {app.ratingAvg?.toFixed(1) || '0.0'}
                        </span>
                        <span className="text-gray-500">{app.size} MB</span>
                    </div>
                </div>

                <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="shrink-0 bg-emerald-500 text-xs md:text-base text-white px-3 md:px-6 py-2 md:py-2.5 rounded-lg font-medium hover:bg-emerald-600 transition duration-300 cursor-pointer"
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledCard;