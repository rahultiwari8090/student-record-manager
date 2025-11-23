import mongoose from "mongoose";

const connectDB = async (DATABASEURL) => {
  try {
    await mongoose.connect(DATABASEURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error.message);
  }
};

export default connectDB;
