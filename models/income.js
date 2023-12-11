const mongoose = require("mongoose");
const { Schema } = mongoose;

const PgIncome = new mongoose.Schema({
	income_id: {
		type: String,
		unique: true,
		required: true,
	},
	income_from: {
		type: String,
		required: true,
	},
	income_date: {
		type: String,
		required: true,
	},
	amount: {
		type: String,
		required: true,
	},
	pay_mode: {
		type: String,
		required: true,
	},
	pay_type: {
		type: String,
		required: true,
	},
	income_by: {
		type: String,
		required: false,
	},
	income_name: {
		type: String,
		required: false,
	},
	room_number: {
		type: String,
		required: true,
	},
	reason: {
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

module.exports = mongoose.model("income", PgIncome);
