import api from './api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [editFormData, setEditFormData] = useState(null);

    useEffect(() => {
        api.get('/contacts')
            .then(response => setContacts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        api.delete(`/contacts/${id}`)
            .then(() => setContacts(contacts.filter(contact => contact._id !== id)))
            .catch(error => console.error(error));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        api.put(`/contacts/${editFormData._id}`, editFormData)
            .then(response => {
                setContacts(contacts.map(contact => contact._id === editFormData._id ? response.data : contact));
                setEditFormData(null);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">Contacts</h2>
                <Link className='py-2 px-5 mb-4 bg-blue-600 rounded text-white' to={'/'}>Home</Link>
                <table className="table-auto w-full mb-6">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Last Name</th>
                            <th className="px-4 py-2">Position</th>
                            <th className="px-4 py-2">Company</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact._id} className="border-b">
                                <td className="px-4 py-2">{contact.title}</td>
                                <td className="px-4 py-2">{contact.firstName}</td>
                                <td className="px-4 py-2">{contact.lastName}</td>
                                <td className="px-4 py-2">{contact.position}</td>
                                <td className="px-4 py-2">{contact.company}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button
                                        className="bg-yellow-500 text-white w-20 p-2 rounded hover:bg-yellow-700"
                                        onClick={() => setEditFormData(contact)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white w-20 p-2 rounded hover:bg-red-700"
                                        onClick={() => handleDelete(contact._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {editFormData && (
                    <form
                        className="mt-8 p-4 border border-gray-300 rounded"
                        onSubmit={handleEditSubmit}
                    >
                        <div className="mb-4">
                            <label className="block mb-2">Title</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="title"
                                value={editFormData.title}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block mb-2">First Name</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="firstName"
                                    value={editFormData.firstName}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2">Last Name</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="lastName"
                                    value={editFormData.lastName}
                                    onChange={handleEditChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Position</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="position"
                                value={editFormData.position}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Company</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="company"
                                value={editFormData.company}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block mb-2">Business Arena</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="businessArena"
                                    value={editFormData.businessArena}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2">Employees</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="number"
                                    name="employees"
                                    value={editFormData.employees}
                                    onChange={handleEditChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Street</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="street"
                                value={editFormData.street}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Additional Info</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="additionalInfo"
                                value={editFormData.additionalInfo}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block mb-2">Zip Code</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="zipCode"
                                    value={editFormData.zipCode}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2">Place</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="place"
                                    value={editFormData.place}
                                    onChange={handleEditChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Country</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="text"
                                name="country"
                                value={editFormData.country}
                                onChange={handleEditChange}
                            />
                        </div>
                        <div className="mb-4 flex gap-4">
                            <div className="w-1/2">
                                <label className="block mb-2">Phone Code</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="phoneCode"
                                    value={editFormData.phoneCode}
                                    onChange={handleEditChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="block mb-2">Phone Number</label>
                                <input
                                    className="w-full p-2 border border-gray-300 rounded"
                                    type="text"
                                    name="phoneNumber"
                                    value={editFormData.phoneNumber}
                                    onChange={handleEditChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2">Email</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded"
                                type="email"
                                name="email"
                                value={editFormData.email}
                                onChange={handleEditChange}
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                            type="submit"
                        >
                            Update
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contacts;
