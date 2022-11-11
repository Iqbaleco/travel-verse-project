import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ReviewBasedOnID from '../ReviewsBasedOnID/ReviewBasedOnID';

const DetailService = () => {
    const { _id, title, price, rating, description, img, tmb_img, facility
    } = useLoaderData();
    const [info1, info2] = facility;
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/limitreviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const messege = form.messege.value;
        const rating = form.rating.value;
        const email = user?.email || 'unregistered'
        console.log(name, messege, rating);

        const review = {
            serviceId: _id,
            serviceName: title,
            rating,
            reviewer: name,
            email,
            messege
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged)
                    alert('Review Added Successfully')
                form.reset();
            })
            .catch(err => console.error(err))
    }



    return (
        <div className="grid grid-cols-8 gap-4 m-12">
            <div className="col-span-6">
                <section className="bg-gray-100 text-gray-800">
                    <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">{title} only at ${price}</h2>
                            <p className="max-w-3xl mx-auto mt-4 text-xl text-justify text-gray-600">{description}</p>
                        </div>
                        <div>
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div className="lg:col-start-2">
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Rating: {rating}</h3>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-gray-900">{info1.name}</h4>
                                                <p className="mt-2 text-gray-600">{info1.details}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-violet-600 text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-gray-900">{info2.name}</h4>
                                                <p className="mt-2 text-gray-600">{info2.details}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                    <img src={img} alt="" className=" mx-auto rounded-lg shadow-lg bg-gray-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="col-span-2">
                <div>
                    {
                        reviews?.map(singleReview => <ReviewBasedOnID
                            key={singleReview._id}
                            singleReview={singleReview}
                        ></ReviewBasedOnID>)
                    }
                </div>
                <div>
                    {user?.email ?
                        <form onSubmit={handleReview} action="" className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
                            <div className="flex flex-col items-center w-full">
                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was your experience?</span>
                                </div>
                                <div className="flex flex-col w-full">
                                    <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                                    <textarea type="text" name="messege" id="messege" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"></textarea>
                                    <input type="text" name="rating" id="rating" placeholder="Rating out of 5" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                                    <button type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600">Leave feedback</button>
                                </div>
                            </div>
                        </form>
                        : <section className="py-6 bg-violet-600 text-gray-50">
                            <div className="container mx-auto flex flex-col items-center justify-center p-4 gap-10">
                                <h1 className="text-2xl font-bold leading-none text-center ">Please <br /> login to <br /> submit <br /> a review</h1>
                                <Link to="/login">
                                    <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900">Login</button>
                                </Link>
                            </div>
                        </section>
                    }

                </div>
            </div>
        </div>
    );
};

export default DetailService;