import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ServiceShortInfo from '../ServiceShortInfo/ServiceShortInfo';

const Services = () => {
    const { loading } = useContext(AuthContext);
    const [limitedServices, setLimitedServices] = useState([]);



    useEffect(() => {

        fetch('https://11-assignment-server-side.vercel.app/')
            .then(res => res.json())
            .then(data => setLimitedServices(data))
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
                    limitedServices?.map(singleService => <ServiceShortInfo
                        key={singleService._id}
                        singleService={singleService}
                    ></ServiceShortInfo>)
                }
            </div>
        </div>
    );
};

export default Services;