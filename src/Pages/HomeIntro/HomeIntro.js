import React from 'react';
import { Link } from 'react-router-dom';

const HomeIntro = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">Welcome to the <br />
                        <span className="text-violet-600">Travel Verse</span>
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Hey! I am here to help you in discovering the world by travelling without any hassle. Check out all latest services.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/services'>
                            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">Check Now</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeIntro;