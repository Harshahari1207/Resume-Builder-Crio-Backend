// const {
//   storeResumeInDb,
//   findResumeDataByEmail,
// } = require("../services/resume.service");

// const getResumeJSON = async (req, res) => {
//   const { email } = req.query;

//   const resumeData = await findResumeDataByEmail(email);
//   res.send(resumeData);
// };

// const postResumeJSON = async (req, res) => {
//   const { resumeData } = req.body;
//   const resumeJSON = JSON.parse(resumeData);
//   const dbObject = {
//     email: resumeJSON.basics.email,
//     resumeData: resumeJSON,
//   };

//   const dbMsg = await storeResumeInDb(dbObject);
//   console.log(dbMsg);
//   res.send(dbMsg.msg);
// };

// module.exports = {
//   postResumeJSON,
//   getResumeJSON,
// };

const {
  storeResumeInDb,
  findResumeDataByEmail,
} = require("../services/resume.service");

const getResumeJSON = async (req, res) => {
  const { email } = req.query;

  try {
    const resumeData = await findResumeDataByEmail(email);
    res.status(200).send(resumeData);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).send("Internal Server Error");
  }
};

const postResumeJSON = async (req, res) => {
  const { email, resumeData } = req.body;

  if (!email || !resumeData) {
    return res.status(400).send("Email and resume data are required.");
  }

  const dbObject = {
    email,
    resumeData,
  };

  try {
    const dbMsg = await storeResumeInDb(dbObject);
    console.log(dbMsg);
    res.status(201).send(dbMsg.msg);
  } catch (error) {
    console.error("Error saving resume:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  postResumeJSON,
  getResumeJSON,
};
