
import { addLinkToWorkSpace, createWorkSpace, removeLinkFromWorkSpace } from "../controllers/workspace";
import { authenticate } from "../middleware/auth/authenticate";
import { createLink } from "../middleware/link/createLink";

const express = require("express");

const router = express.Router();

router.post("/createworkspace", authenticate, createWorkSpace);
router.put("/createlink-wos/:woId", authenticate, createLink, addLinkToWorkSpace);
router.put("/removelink-wos/:woId", authenticate, removeLinkFromWorkSpace);

export default router;
