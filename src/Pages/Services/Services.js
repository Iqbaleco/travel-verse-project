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

    console.log(limitedServices.length);


    return (
        <div>
            {/* {
                limitedServices.map(singleService => <ServiceShortInfo
                    key={singleService._id}

                ></ServiceShortInfo>)
            } */}
        </div>
    );
};

export default Services;