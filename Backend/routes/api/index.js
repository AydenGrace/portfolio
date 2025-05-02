const router = require("express").Router();

const contactRouter = require("./contact");

router.use("/contact", contactRouter);

module.exports = router;
