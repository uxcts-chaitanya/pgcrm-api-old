const mongoose = require("mongoose");

const enquiriesSchema = new mongoose.Schema({
    businessname: {
        type: String,
        unique: true,
        required: true,
    },
    ownername: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    creation_date: {
        type: String,
    },
    status: {
        type: Number,
    }
});

module.exports = mongoose.model("enquiries", enquiriesSchema);
