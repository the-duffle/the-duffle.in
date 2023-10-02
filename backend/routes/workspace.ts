
import { addLinkToWorkSpace, createWorkSpace } from "../controllers/workspace";
import { authenticate } from "../middleware/auth/authenticate";
import { createLink } from "../middleware/link/createLink";

const express = require("express");

const router = express.Router();

router.post("/createworkspace", authenticate, createWorkSpace);
router.put("/createlink-wos/:woId", authenticate, createLink, addLinkToWorkSpace);

export default router;
