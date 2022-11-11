import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import AllReviews from './AllReviews/AllReviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [emailBasedReviews, setEmailBasedReviews] = useState([])

    useEffect(() => {
        fetch(`https://11-assignment-server-side-iqbaleco.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEmailBasedReviews(data))
    }, [user?.email]);

    useTitle('My Reviews');

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