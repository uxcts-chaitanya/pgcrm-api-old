const User = require("../models/user");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const TOKEN_KEY = "PGCRM_TOKEN";

const login = async (req, res) => {
	const { username, password } = req.body; 
	if (!(username && password)) {
		res
			.status(200)
			.send({ isAuthenticated: false, message: "All input is required" });
	}

	try {
		const user = await User.findOne({ email: username });
		if (!user) {
			res
				.status(200)
				.send({ isAuthenticated: false, message: "Invalid username/password" });
		} else {
			// if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign({ user_id: user._id, username }, TOKEN_KEY, {
				expiresIn: "2h",
			});

			const resp = {
				isAuthenticated: true,
				message: "User Authenticated",
				user: user,
				token: token,
			};
			res.status(200).send(resp);
			// }
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	login,
};
