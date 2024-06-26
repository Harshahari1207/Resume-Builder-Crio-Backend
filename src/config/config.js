const dotenv = require("dotenv");
dotenv.config();

const config = {
  mongoose: {
    url: process.env.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  port: process.env.PORT,
};

module.exports = config;
