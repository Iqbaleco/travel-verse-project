import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';
import SingleServiceCard from '../SingleServiceCard/SingleServiceCard';

const Services = () => {
    const { loading } = useContext(AuthContext);
    const [allServices, setAllServices] = useState([]);

    useTitle('Services');


    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, []);

    if (loading) {
        return <div className='grid place-items-center py-20'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    }
    return (
        <div className='my-10 grid place-items-center'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allServices?.map(singleService => <SingleServiceCard
                        key={singleService._id}
                        singleService={singleService}
                    ></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;