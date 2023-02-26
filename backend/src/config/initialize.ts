import { defaultCategories, defaultTypes } from ".";
import { Category, EventType, Role } from "../entity";

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

    const types = await EventType.find();

    if (types.length === 0) {
      const values = defaultTypes.map((type) => {
        return {
          name: type.label,
          slug: type.value,
        };
      });

      await EventType.insert(values);

      console.log("Event types created");
    }

    const categories = await Category.find();

    if (categories.length === 0) {
      const values = defaultCategories.map((category) => {
        return {
          name: category.label,
          slug: category.value,
        };
      });

      await Category.insert(values);

      console.log("Categories created");
    }
  } catch (error) {
    console.error(`Error in database initialization: ${error.message}`);
    process.exit(1);
  }
};

export default initializeDB;
