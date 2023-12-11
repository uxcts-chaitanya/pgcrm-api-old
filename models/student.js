const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new mongoose.Schema({
	student_id: {
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
	age: {
		type: String,
		required: true,
	},
	aadhar_number: {
		type: String,
		required: true,
	},
	reffered: {
		type: String,
		required: false,
	},
	reffered_mobile: {
		type: String,
		required: false,
	},
	address: {
		type: String,
		required: true,
		default: null,
	},
	study_at: {
		type: String,
		required: false,
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
	student_photo: {
		type: String,
	},
	aadhar_attach: {
		type: String,
	},
	address_attach: {
		type: String,
	},
	creation_date: {
		type: String,
	},
	status: {
		type: Number,
	},
	floor: {
		type: String,
		required: true,
	},
	room: {
		type: String,
		required: true,
	},
	bed_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("students", StudentSchema);
