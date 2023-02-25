import { Role } from "../entity";

// this is used to create default data in the database
const initializeDB = async () => {
  try {
    const role = await Role.findOne({
      where: { name: "owner", type: "default" },
    });

    if (!role) {
      const ownerRole = Role.create({
        name: "owner",
        type: "default",
        permissions: [],
      });

      await ownerRole.save();

      console.log("owner role created");
    }
  } catch (error) {
    console.error(`Error in database initialization: ${error.message}`);
    process.exit(1);
  }
};

export default initializeDB;
