const Hostel = require("../models/hostel");
const User = require("../models/user");
const md5 = require("md5");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	service: "zoho",
	host: "smtp.zoho.in",
	port: 465,
	auth: {
		user: "product.support@uxcts.com",
		pass: "Connect$Product#2023!",
	},
});

const addHostel = async (req, res) => {
	const dt = new Date().getTime();
	const hostelDT = new Hostel({
		...req.body,
		setup_done: false,
		hostel_id: `PGCRM_${Math.random()}`,
		creation_date: dt,
		status: 1,
	});
	try {
		await hostelDT.save();
		// create a new user here
		let randomPwd = (Math.random() + 1).toString(36);
		const user = new User({
			email: req.body.email,
			password: md5(randomPwd),
			username: req.body.firstname,
			creation_date: dt,
			user_type: "hostel_admin",
			full_name: `${req.body.firstname} ${req.body.lastname}`,
			contact_number: req.body.mobile,
			last_login: null,
			setup_done: false,
		});
		await user.save();
		console.log(randomPwd);
		const mailOptions = {
			from: "product.support@uxcts.com",
			to: "sai.varadula@gmail.com",
			subject: "Sending Email using Node.js",
			html: `
				<html>
				   <body>
				 	<h3>Thankyou for registering with us</h3>
					<h4>Please find the details below</h4>
					<p>
							<table>
								<tr><td>Stay Name: ${req.body.owner_type}</td></tr>
								<tr><td>Address: ${req.body.address}</td></tr>
								<tr><td>Account Billing Type : Free </td></tr>
								<tr><td>you can access now / Get Started </td></tr> 
							</table>
					</p>
					<h4>Your Login details:</h4>
					<p>Username: ${req.body.email}</p>
					<p>Password: ${randomPwd}</p>

					<br /><br />
					<p>Thank you, <br />PGCRM Admin</p>
				   </body>
				</html>
                `,
		};

		// Needs update here with new gmail id.

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log("Email sent: " + info.response);
			}
		});

		await res.status(201).send(true);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
};

module.exports = {
	addHostel,
};
