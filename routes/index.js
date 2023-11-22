const { Router: expressRouter } = require("express");
const router = expressRouter();

const authRouter = require("./authRoutes");
const enquiriesRouter = require("./enquiriesRoutes");
const hostelRouter = require("./hostelRoutes");
const profileRouter = require("./profileRoutes");

router.use("/auth", authRouter);
router.use(enquiriesRouter);
router.use("/hostel", hostelRouter);
router.use("/profile", profileRouter);

// default routes
router.use("/", (req, res) => {
	res.send(
		"PGCRM - This is PgCRM API platform. Swagger details will shared here in future."
	);
});

module.exports = router;
