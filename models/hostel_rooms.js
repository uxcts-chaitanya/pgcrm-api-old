const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostelRoomsSchema = new mongoose.Schema({
    hostel_room_id: {
		type: String,
		unique: true,
		required: true,
	},
	hostel_floor_id: {
		type: String,
		required: true,
	},
    room_type: {
		type: String,
		required: true,
	},
    no_of_beds: {
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

module.exports = mongoose.model("hostel_rooms", hostelRoomsSchema);

