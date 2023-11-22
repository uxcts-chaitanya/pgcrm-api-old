const User = require("../models/user");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TOKEN_KEY = "PGCRM_TOKEN";

const changePassword = async (req, res) => {
	const { currentPass, newPass, username } = req.body;
	console.log(req.body);
	if (!(currentPass && newPass)) {
		res.status(200).send({ cpChange: false, message: "All input is required" });
	}

	try {
		const user = await User.findOne({ email: username });
		console.log(user);
		if (!user) {
			res.status(200).send({ cpChange: false, message: "User Not found!" });
		} else {
			if (currentPass !== user.password) {
				res
					.status(200)
					.send({ cpChange: false, message: "Invalid current password." });
			} else {
				await User.updateOne(
					{ _id: user._id },
					{ $set: { password: currentPass } }
				);

				res
					.status(200)
					.send({ cpChange: true, message: "Password Changed successfully." });
			}
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	changePassword,
};
