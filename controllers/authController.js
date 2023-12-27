const User = require("../models/user");
const moment = require("moment");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const md5 = require("md5");
const nodemailer = require("nodemailer");

const dt = new Date().getTime();

const transporter = nodemailer.createTransport({
	service: "zoho",
	host: "smtp.zoho.in",
	port: 465,
	auth: {
		user: "product.support@uxcts.com",
		pass: "Connect$Product#2023!",
	},
});

const getRandomString = () => {
	//define a variable consisting alphabets in small and capital letter
	let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

	//specify the length for the new string
	let lenString = 5;
	let randomstring = "";

	//loop to select a new character in each iteration
	for (let i = 0; i < lenString; i++) {
		let rnum = Math.floor(Math.random() * characters.length);
		randomstring += characters.substring(rnum, rnum + 1);
	}
	return randomstring;
};

const TOKEN_KEY = "PGCRM_TOKEN";

const forgotpassword = async (req, res) => {
	const { useremail } = req.body;
	console.log(req.body);
	const user = await User.findOne({ email: useremail });
	console.log(user);
	if (!user) {
		res
			.status(200)
			.send({ isAuthenticated: false, message: "User does not exists !!!" });
	} else {
		let randomPwd = getRandomString();
		console.log(randomPwd);
		await User.updateOne(
			{ _id: user._id },
			{ $set: { password: md5(randomPwd) } }
		);

		const mailOptions = {
			from: "product.support@uxcts.com",
			to: useremail,
			subject: "PGCRM - Password Assistance",
			html: `
				<html>
				   <body>
				 	<h3>Your password is resetted</h3>
					<h4>Please find the details below</h4>
					
					<h4>Your Login details:</h4>
					<p>Username: ${useremail}</p>
					<p>Password: ${randomPwd}</p>

					<br /><br />
					<p>Thank you, <br />PGCRM Admin</p>
				   </body>
				</html>
                `,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

		res
			.status(200)
			.send({ cpChange: true, message: "New password sent to email" });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;
	if (!(username && password)) {
		res
			.status(200)
			.send({ isAuthenticated: false, message: "All input is required" });
	}

	try {
		const user = await User.findOne({ email: username, password: password });
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
	forgotpassword,
};
