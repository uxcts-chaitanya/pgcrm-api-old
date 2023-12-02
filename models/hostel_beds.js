const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostelBedsSchema = new mongoose.Schema({
    hostel_bed_id: {
        type: String,
        unique: true,
        required: true,
    },
    hostel_id: {
        type: String,
        required: true,
    },
    hostel_room_id: {
        type: String,
        required: true,
    },
    hostel_floor_id: {
        type: String,
        required: true,
    },
    is_booked: {
        type: Boolean
    },
    booked_date: {
        type: String
    },
    creation_date: {
		type: String,
	},
    status: {
        type: Number
    }
});

module.exports = mongoose.model("hostel_beds", hostelBedsSchema);

