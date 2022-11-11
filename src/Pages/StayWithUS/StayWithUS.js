import React from 'react';
import { Link } from 'react-router-dom';

const StayWithUS = () => {
    return (
        <div>
            <section className="py-6 bg-gray-100 text-gray-900">
                <div className="container mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
                    <div className="flex flex-col space-y-3 text-center lg:text-left">
                        <h1 className="text-5xl font-bold leading-none">Stay in the loop</h1>
                        <p className="text-lg">Register to get all updates from Trave Verse</p>
                    </div>
                    <div>
                        <Link to='/register'>
                            <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">Register</button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default StayWithUS;