import React from 'react';
import image from '../../assets/image.webp'
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AppCard = ({ app }) => {
    return (
        <Link to={`/apps/${app.id}`} className="card shadow-lg cursor-pointer bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 p-4 gap-4">
            <figure className="">
                <img alt={app.title} className="h-full w-full object-cover rounded-2xl pointer-none:" src={image} />
            </figure>
            <div className="grow">
                <p className="font-semibold text-center">{app.title}</p>
            </div>
            <div className="flex justify-between grow">
                <div className="badge badge-soft badge-success text-sm">
                    <MdOutlineFileDownload className='text-lg' />

                    {app.downloads}
                </div>
                <div className="badge badge-soft badge-secondary items-center">
                    <FaStar className='text-base' />
                    {app.rating}
                </div>
            </div>
        </Link>
    );
};

export default AppCard;