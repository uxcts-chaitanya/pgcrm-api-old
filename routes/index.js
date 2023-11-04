const { Router: expressRouter } = require("express");
const router = expressRouter();

// auth routes
const authRouter = require("./authRoutes");
router.use("/auth", authRouter);

// default routes
router.use("/", (req, res) => {
	res.send(
		"PGCRM - This is PgCRM API platform. Swagger details will shared here in future."
	);
});

module.exports = router;
