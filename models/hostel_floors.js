const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostelFloorsSchema = new mongoose.Schema({
    hostel_floor_id: {
		type: String,
		unique: true,
		required: true,
	},
    hostel_id: {
		type: String,
		required: true,
	},
    floor_number: {
        type: Number,
        required: true
    },
    no_of_rooms: {
        type: Number,
        required: true
    },
    creation_date: {
		type: String,
	},
    status: {
        type: Number
    }
});

module.exports = mongoose.model("hostel_floors", hostelFloorsSchema);