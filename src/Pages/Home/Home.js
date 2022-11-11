import React from 'react';
import useTitle from '../../useTitle/useTitle';
import HomeIntro from '../HomeIntro/HomeIntro';
import LimitedServices from '../Services/LimitedServices';
import StayWithUS from '../StayWithUS/StayWithUS';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <HomeIntro></HomeIntro>
            <LimitedServices></LimitedServices>
            <Testimonials></Testimonials>
            <StayWithUS></StayWithUS>
        </div>
    );
};

export default Home;