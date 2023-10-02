import { login, userDetails, register } from "../controllers/auth";
import { authenticate } from "../middleware/auth/authenticate";

const express = require("express");

const router = express.Router();

router.get("/details", authenticate, userDetails)
router.post("/register", register);
router.post("/login", login)

export default router;
