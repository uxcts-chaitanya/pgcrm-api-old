const User = require("../models/user");
const moment = require("moment");

const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.username });
	console.log(req.body, user);
	if (!user) {
		res
			.status(200)
			.send({ isAuthenticated: false, message: "Invalid username/password" });
	} else if (user.password !== req.body.password) {
		res
			.status(200)
			.send({ isAuthenticated: false, message: "Invalid username/password" });
	} else {
		const resp = {
			isAuthenticated: true,
			message: "User Authenticated",
			user: user,
		};
		res.status(200).send(resp);
	}
};

module.exports = {
	login,
};
