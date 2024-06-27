import  { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [editFormData, setEditFormData] = useState(null);

    useEffect(() => {
        axios.get('/api/items')
            .then(response => setContacts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`/api/items/${id}`)
            .then(() => setContacts(contacts.filter(contact => contact._id !== id)))
            .catch(error => console.error(error));
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({ ...editFormData, [name]: value });
    };

    const handleEditSubmit = (id) => {
        axios.put(`/api/items/${id}`, editFormData)
            .then(response => {
                setContacts(contacts.map(contact => contact._id === id ? response.data : contact));
                setEditFormData(null);
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="max-w-lg mx-auto p-8">
            <h2 className="text-2xl font-bold mb-6">Contacts</h2>
            <ul className="list-none p-0">
                {contacts.map(contact => (
                    <li key={contact._id} className="flex justify-between items-center p-4 border-b border-gray-300">
                        <div>
                            {contact.title} {contact.firstName} {contact.lastName}
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
                                onClick={() => setEditFormData(contact)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                                onClick={() => handleDelete(contact._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {editFormData && (
                <form
                    className="mt-8 p-4 border border-gray-300 rounded"
                    onSubmit={() => handleEditSubmit(editFormData._id)}
                >
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="title"
                            value={editFormData.title}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="firstName"
                            value={editFormData.firstName}
                            onChange={handleEditChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="lastName"
                            value={editFormData.lastName}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="position"
                            value={editFormData.position}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="company"
                            value={editFormData.company}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="businessArena"
                            value={editFormData.businessArena}
                            onChange={handleEditChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="employees"
                            value={editFormData.employees}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="street"
                            value={editFormData.street}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="additionalInfo"
                            value={editFormData.additionalInfo}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="zipCode"
                            value={editFormData.zipCode}
                            onChange={handleEditChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="place"
                            value={editFormData.place}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="country"
                            value={editFormData.country}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4 flex gap-4">
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="phoneCode"
                            value={editFormData.phoneCode}
                            onChange={handleEditChange}
                        />
                        <input
                            className="w-full p-2 border border-gray-300 rounded"
                            type="text"
                            name="phoneNumber"
                            value={editFormData.phoneNumber}
                            onChange={handleEditChange}
                        />
                    </div>
                    <div className="mb-4">
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
    );
};

export default Contacts;
