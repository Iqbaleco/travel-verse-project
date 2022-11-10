import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import AllReviews from './AllReviews/AllReviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [emailBasedReviews, setEmailBasedReviews] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setEmailBasedReviews(data))
    }, [user?.email]);
    return (
        <div>
            {
                emailBasedReviews?.map(singleEBR => <AllReviews
                    key={singleEBR._id}
                    singleEBR={singleEBR}
                ></AllReviews>)
            }
        </div>
    );
};

export default MyReviews;