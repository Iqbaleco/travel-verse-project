import React from 'react';
import HomeIntro from '../HomeIntro/HomeIntro';
import LimitedServices from '../Services/LimitedServices';
import StayWithUS from '../StayWithUS/StayWithUS';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
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