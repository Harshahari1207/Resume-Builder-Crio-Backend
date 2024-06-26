const mongoose = require("mongoose");
const app = require("./app");
const config = require("./src/config/config");


let server;

mongoose
  .connect(`${config.mongoose.url}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to server successfull: ", config.mongoose.url);
  })
  .catch((e) => {
    console.log("Error while connection ", e, config.mongoose);
  });
app.listen(config.port, () => {
  console.log("Listening on port", config.port);
});
