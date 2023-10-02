import { addLinkToFolder, createFolder, removeLinkFromFolder } from "../controllers/link";
import { authenticate } from "../middleware/auth/authenticate";
import { createLink } from "../middleware/link/createLink";

const express = require("express");

const router = express.Router();

router.post("/createfolder", authenticate, createFolder);
router.put("/createlink/:folderId", authenticate, createLink, addLinkToFolder);
router.put("/removelink/:folderId", authenticate, removeLinkFromFolder);

export default router;
