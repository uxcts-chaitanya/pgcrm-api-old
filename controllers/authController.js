const User = require("../models/user");
const moment = require("moment");

const login = (req, res) => {
	User.find({ email: req.body.email }, function (err, docs) {
		if (err) {
			console.log(err);
		} else {
			if (docs.length > 0) {
				if (docs[0].password == req.body.password) {
					res.status(200).json({ status: "success" });
				} else {
					res.send("Invalid Credentials!");
				}
			} else {
				res.send("Invalid Credentials!");
			}
		}
	});
};

module.exports = {
	login,
};
