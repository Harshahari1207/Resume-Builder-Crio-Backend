const mongoose = require("mongoose");
const app = require("./app");
const config = require("./src/config/config");


let server;

mongoose
  .connect(`mongodb+srv://ResumeBuild:ResumeBuildCrio@resumebuilder.qrgdtig.mongodb.net/?retryWrites=true&w=majority&appName=ResumeBuilder`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to server successfull: ");
  })
  .catch((e) => {
    console.log("Error while connection ", e);
  });
app.listen(8082, () => {
  console.log("Listening on port");
});
