const dotenv = require('dotenv');
dotenv.config();

const config = {
    MgDB: process.env.MONGODB,
    port: process.env.PORT,
};
module.exports = config;