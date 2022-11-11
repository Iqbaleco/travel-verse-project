import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';

const AddService = () => {

    useTitle('Add a service');

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const tmb_img = form.tmb_img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const facilityOneName = form.facilityOneName.value;
        const facilityOneDetails = form.facilityOneDetails.value;
        const facilityTwoName = form.facilityTwoName.value;
        const facilityTwoDetails = form.facilityTwoDetails.value;

        const addService = {
            title,
            img,
            tmb_img,
            price,
            rating,
            description,
            facilityOneName,
            facilityOneDetails,
            facilityTwoName,
            facilityTwoDetails,
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged)
                    alert('Service Added Successfully')
                form.reset();
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='grid place-items-center py-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Please fill up the form to add a service</h1>
                <form onSubmit={handleAddService} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlfor="title" className="block text-gray-600">Service Title</label>
                        <input type="text" name="title" id="title" placeholder="Service Title" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="img" className="block text-gray-600">Service Image</label>
                        <input type="text" name="img" id="img" placeholder="Service Image" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="tmb_img" className="block text-gray-600">Service Thumbnail Image</label>
                        <input type="text" name="tmb_img" id="tmb_img" placeholder="Service Thumbnail Image" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="price" className="block text-gray-600">Price</label>
                        <input type="text" name="price" id="price" placeholder="Price" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="rating" className="block text-gray-600">Rating</label>
                        <input type="text" name="rating" id="rating" placeholder="Rating" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="description" className="block text-gray-600">Description</label>
                        <input type="text" name="description" id="description" placeholder="Description" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="facilityOneName" className="block text-gray-600">Facility One Name</label>
                        <input type="text" name="facilityOneName" id="facilityOneName" placeholder="Facility One Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="facilityOneDetails" className="block text-gray-600">Facility One Details</label>
                        <input type="text" name="facilityOneDetails" id="facilityOneDetails" placeholder="Facility One Details" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="facilityTwoName" className="block text-gray-600">Facility Two Name</label>
                        <input type="text" name="facilityTwoName" id="facilityTwoName" placeholder="Facility Two Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="facilityTwoDetails" className="block text-gray-600">Facility Two Details</label>
                        <input type="text" name="facilityTwoDetails" id="facilityTwoDetails" placeholder="Facility Two Details" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600" >Add A Service</button>
                </form>

            </div>

        </div>

    );
};

export default AddService;