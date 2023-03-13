import express from "express";

import {
  dashboard,
  create,
  getOnboarding,
  getStaff,
  removeStaff,
  saveBusinessDetails,
  saveBusinessDocuments,
  saveRepresentativeDetails,
  skipVerification,
} from "../controllers/organization.controller";

import {
  protect,
  protectWithOrganization,
} from "../middlewares/auth.middleware";

import upload from "../utils/multer";

const router = express.Router();

router.route("/dashboard").get(protectWithOrganization, dashboard);
router.route("/create").post(protect, create);
router.route("/get-staff").get(protectWithOrganization, getStaff);
router.route("/remove-staff/:id").delete(protectWithOrganization, removeStaff);

// onboarding routes
router.route("/onboarding").get(protectWithOrganization, getOnboarding);
router
  .route("/onboarding/business-details")
  .put(protectWithOrganization, saveBusinessDetails);
router
  .route("/onboarding/representative-details")
  .put(protectWithOrganization, saveRepresentativeDetails);

router
  .route("/onboarding/skip-verification")
  .put(protectWithOrganization, skipVerification);

router.route("/onboarding/business-documents").put(
  upload.fields([
    { name: "registration", maxCount: 1 },
    { name: "vat", maxCount: 1 },
  ]),
  protectWithOrganization,
  saveBusinessDocuments
);

export default router;
