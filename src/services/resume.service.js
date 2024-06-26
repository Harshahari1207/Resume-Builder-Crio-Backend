const Resume = require("../model/resume.model");

const findResumeDataByEmail = async (email) => {
  try {
    const resume = await Resume.findOne({ email });
    return {
      msg: "Successfully Retrieved Data!",
      data: resume.resumeData,
    };
  } catch (err) {
    return {
      msg: "Entered Email is not found in the Database Or Something went wrong!",
    };
  }
};

const storeResumeInDb = async (resumeData) => {
  try {
    const { email } = resumeData;

    const existingResume = await Resume.findOne({ email });
    if (existingResume) {
      existingResume.resumeData = resumeData.resumeData;
      await existingResume.save();

      return {
        id: "success",
        msg: "Successfully updated in Database",
      };
    } else {
      const doc = new Resume(resumeData);
      doc.save();

      return {
        id: "success",
        msg: "Successfully stored in Database",
      };
    }
  } catch (err) {
    return {
      id: "err",
      msg: "Something went wrong with the Backend. Contact Admin!",
    };
  }
};

module.exports = {
  storeResumeInDb,
  findResumeDataByEmail,
};
