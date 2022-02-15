const mongoose = require("mongoose");
const config = require("../config");


const DBConnection = async () => {
  try {
    await mongoose.connect(config.MgDB );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error("Error al conectar a MongoDB");
  }
};

module.exports = DBConnection;