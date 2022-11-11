import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AllReviews from './AllReviews/AllReviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [emailBasedReviews, setEmailBasedReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEmailBasedReviews(data))
    }, [user?.email]);


    // const haldleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 const remaining = orders.filter(odr => odr._id !== id);
    //                 const approving = orders.find(odr => odr._id === id)
    //                 approving.status = 'Approved';

    //                 const newOrder = [approving, ...remaining];
    //                 setOrders(newOrder)
    //             }
    //         })
    // }

    return (
        <div className='my-10 grid place-items-center'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    emailBasedReviews?.map(singleEBR => <AllReviews
                        key={singleEBR._id}
                        singleEBR={singleEBR}
                    ></AllReviews>)
                }
            </div>
        </div>
    );
};

export default MyReviews;