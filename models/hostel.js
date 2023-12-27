const mongoose = require("mongoose");
const { Schema } = mongoose;

const hostelSchema = new mongoose.Schema({
	hostel_id: {
		type: String,
		unique: true,
		required: true,
	},
	joining_date: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	date_of_birth: {
		type: String,
		required: true,
	},
	mobile: {
		type: String,
		required: true,
	},
	landline: {
		type: String,
		required: true,
	},
	owner_type: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
		default: null,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	fathername: {
		type: String,
		required: true,
	},
	language: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	geo_location: {
		type: String,
		required: true,
	},
	owner_photo: {
		type: String,
		required: false,
	},
	registration_certificate: {
		type: String,
		required: false,
	},
	hostel_size: {
		type: String,
		required: true,
		default: "0-50",
	},
	setup_done: {
		type: Boolean,
		default: false,
	},
	creation_date: {
		type: String,
	},
	status: {
		type: Number,
	},
	is_approved: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("hostels", hostelSchema);
