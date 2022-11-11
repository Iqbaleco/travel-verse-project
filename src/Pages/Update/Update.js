import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const singleReview = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const messege = form.messege.value;
        const rating = form.rating.value;
        console.log(name, messege, rating);

        const updatedReview = {
            rating,
            reviewer: name,
            messege
        }

        fetch(`http://localhost:5000/reviews/${singleReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedcount > 0)
                    alert('Review Updated Successfully')
                form.reset();
            })

            .catch(err => console.error(err))
    }


    return (
        <div>
            <form onSubmit={handleUpdate} action="" className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>
                    </div>
                    <div className="flex flex-col w-full">
                        <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                        <textarea type="text" name="messege" id="messege" rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-gray-800 bg-gray-50"></textarea>
                        <input type="text" name="rating" id="rating" placeholder="Rating out of 5" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600">Update Your Review</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Update;