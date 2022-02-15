const mongoose = require("mongoose");

const uri = "mongodb+srv://bmateo97:Mateo9704@cursomongo.nfjpz.mongodb.net/test/crm-clientes";
const DBConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

module.exports = DBConnection;