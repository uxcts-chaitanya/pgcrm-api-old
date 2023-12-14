const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	hostel_id: {
		type: String,
		required: false,
		default: 0,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
	creation_date: {
		type: String,
	},
	user_type: {
		type: String,
		required: true,
	},
	last_login: {
		type: String,
		default: null,
	},
	setup_done: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("users", userSchema);
