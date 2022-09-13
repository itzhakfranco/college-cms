const express = require("express");
const router = express.Router();
const lecturers = require('../db/lecturers.json')


router.get("/", async (req, res) => {
	res.json(lecturers);
});

module.exports = router;