import express from "express";

import { create, getAll, remove, update } from "../controllers/role.controller";
import { protectWithOrganization } from "../middlewares/auth.middleware";

const router = express.Router();

router.route("/get-all").get(protectWithOrganization, getAll);

router.route("/create").post(protectWithOrganization, create);
router.route("/update/:id").put(protectWithOrganization, update);
router.route("/delete/:id").delete(protectWithOrganization, remove);

export default router;
