import express from "express";

import {
  getFile,
  remove,
  upload as fileUpload,
  uploadBanner,
} from "../controllers/file.controller";
import { protectWithOrganizationAndEvent } from "../middlewares/auth.middleware";
import upload from "../utils/multer";

const router = express.Router();

// private routes
router.route("/upload").post(upload.single("file"), fileUpload);

router
  .route("/banner-upload")
  .post(upload.single("file"), protectWithOrganizationAndEvent, uploadBanner);

router.route("/:id").get(getFile);

router.route("/remove/:id").delete(protectWithOrganizationAndEvent, remove);

export default router;
