import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const AllReviews = ({ singleEBR }) => {
    const { _id, rating, serviceId, serviceName, reviewer, messege } = singleEBR;
    const { user, loading } = useContext(AuthContext);

    const handleDelete = _id => {
        const agree = window.confirm('Are you sure you want to delete the review?');

        if (agree) {
            fetch(`https://11-assignment-server-side-iqbaleco.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully')
                    }
                })
        }
    };

    if (loading) {
        return <div className='grid place-items-center py-20'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    }

    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                <h4 className="font-bold">Service Name: {serviceName}</h4>
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">

                        <div>
                            {user?.photoURL ? <img className='object-cover w-12 h-12 rounded-full bg-gray-500' title={user.displayName} src={user.photoURL} alt="" /> : <p className='rounded-full bg-orange-500 font-bold object-cover w-12 h-12 text-center'>No <br />image</p>
                            }
                        </div>

                        <div>
                            <h4 className="font-bold">{reviewer}</h4>
                            {/* <span className="text-xs text-gray-600">2 days ago</span> */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">{rating}</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    {messege}
                </div>
                <Link to={`/update/${_id}`}>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Update Review</button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Delete Review</button>
            </div>
        </div>
    );
};

export default AllReviews;