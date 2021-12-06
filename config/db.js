import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURI");
import colors from "colors";
// config folder must be in the root folder
const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...".green.underline);
  } catch (error) {
    console.error(error.message.red);
    // Exit process with falure
    process.exit(1);
  }
};

export default connectDB;
