import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LimitedServices from '../Services/LimitedServices';

const Home = () => {
    return (
        <div>
            <LimitedServices></LimitedServices>
        </div>
    );
};

export default Home;