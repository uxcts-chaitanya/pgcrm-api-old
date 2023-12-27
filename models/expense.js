const mongoose = require("mongoose");
const { Schema } = mongoose;

const PgExpense = new mongoose.Schema({
	expense_id: {
		type: String,
		unique: true,
		required: true,
	},
	expense_from: {
		type: String,
		required: true,
	},
	expense_date: {
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
	account_no: {
		type: String,
		required: true,
	},
	ifsc_code: {
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

module.exports = mongoose.model("expense", PgExpense);
