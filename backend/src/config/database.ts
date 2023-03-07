import { AppDataSource } from "./data-source";
import initializeDB from "./initialize";

const connectDB = async () => {
  try {
    const response = await AppDataSource.initialize();

    if (response.isInitialized) {
      console.log("Database connection established");

      await initializeDB();

      console.log("Database initialized");
    }

    return response;
  } catch (error) {
    console.log(error);
    console.error(`Error in database connection: ${error.message}`);

    process.exit(1);
  }
};

export default connectDB;
