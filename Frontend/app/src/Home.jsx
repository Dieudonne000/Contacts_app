import api from './api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        businessArena: '',
        employees: '',
        street: '',
        additionalInfo: '',
        zipCode: '',
        place: '',
        country: '',
        phoneCode: '',
        phoneNumber: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/contacts', formData)
            .then(() => navigate('/contacts'))
            .catch(error => console.error(error));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
            <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex">
                <div className="w-full md:w-1/2 p-8 bg-white">
                    <h2 className="text-2xl font-bold mb-6">General Information</h2>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="businessArena"
                            placeholder="Business Arena"
                            value={formData.businessArena}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            name="employees"
                            placeholder="Employees"
                            value={formData.employees}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='block'><Link className='py-2 px-5 mb-4 bg-blue-600 rounded text-white' to={'/contacts'}>Contacts</Link></div>
                </div>
                <div className="w-full md:w-1/2 p-8 bg-purple-600 text-white">
                    <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="street"
                            placeholder="Street + Nr"
                            value={formData.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="additionalInfo"
                            placeholder="Additional Information"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="zipCode"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="place"
                            placeholder="Place"
                            value={formData.place}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="phoneCode"
                            placeholder="Code +"
                            value={formData.phoneCode}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-white text-black"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                className="mr-2"
                                type="checkbox"
                                name="terms"
                            />
                            I do accept the <a href="#" className="text-blue-200 underline">Terms and Conditions</a> of your site.
                        </label>
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        type="submit"
                    >
                        Register Badge
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Home;
