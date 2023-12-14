const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostelUserSchema = new mongoose.Schema({
	hostel_id: {
		type: String,
		required: true,
	},
	user_type: {
		type: String,
		required: true,
	},
	joining_date: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: false,
	},
	user_name: {
		type: String,
		required: true,
	},
	user_mobile_number: {
		type: String,
		required: true,
	},
	user_amount: {
		type: String,
		required: true,
	},
	user_billing: {
		type: String,
		required: true,
	},
	user_room_no: {
		type: String,
		required: true,
	},
	user_room_type: {
		type: String,
		required: true,
	},
	user_room_floor: {
		required: true,
		type: String,
	},
	user_reffered_number: {
		type: String,
		required: true,
	},
	user_aadhar_number: {
		type: String,
		required: true,
	},
	user_referred_by: {
		type: String,
		required: true,
	},
	user_address: {
		type: String,
		required: true,
		default: null,
	},
	user_email: {
		type: String,
		unique: false,
		required: false,
		default: "no_email",
	},
	user_father_name: {
		type: String,
		required: true,
	},
	user_country: {
		type: String,
		required: true,
	},
	user_state: {
		type: String,
		required: true,
	},
	user_city: {
		type: String,
		required: true,
	},
	user_age: {
		type: String,
		required: true,
	},
	profile_photo: {
		type: String,
		required: false,
	},
	user_billing_date: {
		type: String,
		required: false,
	},
	creation_date: {
		type: String,
	},
	status: {
		type: Number,
	},
});

module.exports = mongoose.model("hostel_users", hostelUserSchema);
