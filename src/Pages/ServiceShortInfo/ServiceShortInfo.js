import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceShortInfo = ({ singleService }) => {
    const { _id, title, price, rating, description, img, tmb_img } = singleService
    return (
        <PhotoProvider>
            <PhotoView src={tmb_img}>
                <div>
                    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                                <div className="text-gray-800">
                                    {
                                        description.length > 250 ?
                                            <p>{description.slice(0, 150) + '...'}</p>
                                            :
                                            <p>{description}</p>
                                    }
                                </div>
                            </div>
                            <h2 className="text-xl font-bold">Price: ${price}</h2>
                            <Link to={`/services/${_id}`}>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50">Details</button></Link>
                        </div>
                    </div>
                </div>
            </PhotoView>
        </PhotoProvider>

    );
};

export default ServiceShortInfo;