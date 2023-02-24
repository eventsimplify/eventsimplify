import express from "express";

import { upload as fileUpload } from "../controllers/file.controller";
import upload from "../utils/multer";

const router = express.Router();

// private routes
router.route("/upload").post(upload.single("file"), fileUpload);

export default router;
