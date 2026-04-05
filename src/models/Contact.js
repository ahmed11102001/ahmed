const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    email: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt field before saving the contact
contactSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;