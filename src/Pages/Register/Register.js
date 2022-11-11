import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../useTitle/useTitle';

const Register = () => {
    useTitle('Register');

    const { createUser, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='grid place-items-center py-20'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
        </div>
    }


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(err => console.error(err));
    }


    return (
        <div className='grid place-items-center py-20'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Please Register</h1>
                <form onSubmit={handleRegister} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlfor="name" className="block text-gray-600">Your Name</label>
                        <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="email" className="block text-gray-600">Your Email</label>
                        <input type="text" name="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlfor="password" className="block text-gray-600">Your Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" required />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600" >Register</button>
                </form>
                <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </div>

        </div>
    );
};

export default Register;