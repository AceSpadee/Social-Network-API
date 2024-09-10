// Establish the connection to the database with MongoDB
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/local");
// Export the connection
module.exports = mongoose.connection;