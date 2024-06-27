import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        axios.post('/api/contacts', formData)
            .then(() => navigate('/contacts'))
            .catch(error => console.error(error));
    };

    return (
        <div className="max-w-lg mx-auto p-8">
            <form onSubmit={handleSubmit}>
            <div className='inline-block'>
                <h2 className="text-2xl font-bold mb-6">General Information</h2>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={formData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="businessArena"
                            placeholder="Business Arena"
                            value={formData.businessArena}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="employees"
                            placeholder="Employees"
                            value={formData.employees}
                            onChange={handleChange}
                        />
                    </div>
            </div>
                <div className='inline-block'>
                    <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="street"
                            placeholder="Street + Nr"
                            value={formData.street}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="additionalInfo"
                            placeholder="Additional Information"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="zipCode"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="place"
                            placeholder="Place"
                            value={formData.place}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="phoneCode"
                            placeholder="Code +"
                            value={formData.phoneCode}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
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
                            I do accept the <a href="#" className="text-blue-500">Terms and Conditions</a> of your site.
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
