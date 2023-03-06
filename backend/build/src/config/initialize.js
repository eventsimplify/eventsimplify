"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const entity_1 = require("../entity");
// this is used to create default data in the database
const initializeDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const role = yield entity_1.Role.findOne({
            where: { name: "owner", type: "default" },
        });
        if (!role) {
            const ownerRole = entity_1.Role.create({
                name: "owner",
                type: "default",
                permissions: [],
            });
            yield ownerRole.save();
            console.log("owner role created");
        }
        const types = yield entity_1.EventType.find();
        if (types.length === 0) {
            const values = _1.defaultTypes.map((type) => {
                return {
                    name: type.label,
                    slug: type.value,
                };
            });
            yield entity_1.EventType.insert(values);
            console.log("Event types created");
        }
        const categories = yield entity_1.Category.find();
        if (categories.length === 0) {
            const values = _1.defaultCategories.map((category) => {
                return {
                    name: category.label,
                    slug: category.value,
                };
            });
            yield entity_1.Category.insert(values);
            console.log("Categories created");
        }
        const permissions = yield entity_1.Permission.find();
        if (permissions.length !== _1.defaultPermissions.length) {
            const notCreatedPermissions = _1.defaultPermissions.filter((permission) => {
                return !permissions.find((p) => p.action === permission);
            });
            yield entity_1.Permission.insert(notCreatedPermissions.map((permission) => {
                return {
                    action: permission,
                };
            }));
            console.log(`Permissions created: ${notCreatedPermissions.join(", ")}`);
        }
    }
    catch (error) {
        console.error(`Error in database initialization: ${error.message}`);
        process.exit(1);
    }
});
exports.default = initializeDB;
//# sourceMappingURL=initialize.js.map