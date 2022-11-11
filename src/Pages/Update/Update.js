import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const singleReview = useLoaderData();
    return (
        <div>
            <h1>Review Title:{singleReview.reviewer}</h1>
        </div>
    );
};

export default Update;