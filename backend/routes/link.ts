import { createFolder } from "../controllers/link";
import { authenticate } from "../middleware/authenticate";

const express = require("express");

const router = express.Router();

router.post("/createlink", authenticate, createFolder);

module.exports = router;
