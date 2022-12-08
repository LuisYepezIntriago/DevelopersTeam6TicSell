import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Could not connect to MongoDB");
  }
})();
