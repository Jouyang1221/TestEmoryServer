import express from "express";
const router = express.Router();
import {
  authUser,
  getUserList,
  getUserListByUsername,
} from "../controllers/userController.js";

router.get("/", getUserList);
router.get("/:username", getUserListByUsername);
router.post("/login", authUser);

export default router;
