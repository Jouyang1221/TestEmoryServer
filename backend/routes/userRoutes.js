import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserList,
  getUserListByUsername,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// router.get("/", getUserList);
router.route("/").get(protect, getUserList);
router.route("/").post(registerUser);
router.get("/:username", getUserListByUsername);
router.post("/login", authUser);

export default router;
