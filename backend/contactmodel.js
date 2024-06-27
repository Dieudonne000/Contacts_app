const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    title: String,
    firstName: String,
    lastName: String,
    position: String,
    company: String,
    businessArena: String,
    employees: Number,
    street: String,
    additionalInfo: String,
    zipCode: String,
    place: String,
    country: String,
    phoneCode: String,
    phoneNumber: String,
    email: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
