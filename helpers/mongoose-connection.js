var mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://localhost:27017/pgcrm`;

function mongooseConnection() {
	try {
		// Connect to the MongoDB cluster
		mongoose
			.connect(mongoAtlasUri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				// user: "root",
				// pass: "password",
			})
			.then(console.log("connected to Mongo!"));
	} catch (e) {
		console.log("could not connect");
	}
	const dbConnection = mongoose.connection;
	dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
	dbConnection.once("open", () => console.log("Connected to DB!"));
}

module.exports = mongooseConnection;
