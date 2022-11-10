import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ServiceShortInfo from '../ServiceShortInfo/ServiceShortInfo';

const LimitedServices = () => {
    const { loading } = useContext(AuthContext);
    const [limServices, setLimServices] = useState([]);



    useEffect(() => {

        fetch('http://localhost:5000/limitedservices')
            .then(res => res.json())
            .then(data => setLimServices(data))
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
                    limServices?.map(singleService => <ServiceShortInfo
                        key={singleService._id}
                        singleService={singleService}
                    ></ServiceShortInfo>)
                }
            </div>
            <div>
                <Link to='/services'>
                    <button type="button" className=" px-8 py-3 font-semibold rounded-full bg-gray-800 text-gray-100 ">All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default LimitedServices;