const Hostel = require("../models/hostel");
const HostelUser = require("../models/hostel_user");
const PgIncome = require("../models/income");
const Student = require("../models/student");
const User = require("../models/user");
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

const listStudentIncome = async (req, res) => {
	const incomeList = await PgIncome.find();
	res.status(200).send(incomeList);
};

const addStudentIncome = async (req, res) => {
	const a = 0x100000000 + 0.1;
	const id = `INC_${Math.floor(Math.random() * dt)}`;
	const studentIncome = new PgIncome({
		...req.body,
		income_date: dt,
		income_id: id,
		creation_date: dt,
		status: 1,
	});
	try {
		await studentIncome.save();
		await res.status(201).send(true);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
};

const getList = async (req, res) => {
	const hostels = await Hostel.find();
	res.status(200).send(hostels);
};

const HostelUsers = async (req, res) => {
	const users = await HostelUser.find();
	res.status(200).send(users);
};

const addUserToHostel = async (req, res) => {
	const hostelDT = new HostelUser({
		...req.body,
		joining_date: dt,
		creation_date: dt,
		status: 1,
	});
	try {
		await hostelDT.save();
		await res.status(201).send(true);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
};

const addHostel = async (req, res) => {
	const dt = new Date().getTime();
	const a = 0x100000000 + 0.1;
	const hostelId = `PGCRM_${Math.floor(Math.random() * dt)}`;
	const hostelDT = new Hostel({
		...req.body,
		setup_done: false,
		hostel_id: hostelId,
		creation_date: dt,
		status: 1,
	});
	try {
		const id = await hostelDT.save();
		console.log(id);
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
			hostel_id: hostelId,
		});
		await user.save();
		const mailOptions = {
			from: "product.support@uxcts.com",
			to: req.body.email,
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
	addStudentIncome,
	getList,
	addUserToHostel,
	HostelUsers,
	listStudentIncome,
};
