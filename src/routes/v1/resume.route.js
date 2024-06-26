const router = require("express").Router();
const { postResumeJSON, getResumeJSON } = require("../../controllers/resume.controller");


router.get("/resume/get", getResumeJSON);
router.post("/resume/save", postResumeJSON);

module.exports = router;
