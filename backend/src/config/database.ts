import { AppDataSource } from "./data-source";

const connectDB = async () => {
  try {
    await AppDataSource.initialize();

    console.log(`Database Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
