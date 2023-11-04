const User = require("../models/user");
const moment = require("moment");

const login = async (req, res) => {
	console.log(req.body);
	res.send({
		id: 1,
		username: "admin",
		password: "123456",
		email: "admin@themesdesign.in",
	});
};

module.exports = {
	login,
};
