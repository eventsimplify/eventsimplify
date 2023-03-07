import dotenv from "dotenv";

const loadEnv = () => {
  if (process.env.NODE_ENV === "development") {
    dotenv.config({ path: `${__dirname}/../../env/local.env` });
  }

  if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: `${__dirname}/../../env/prod.env` });
  }

  dotenv.config();
};

export default loadEnv;
