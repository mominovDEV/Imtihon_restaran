const express = require("express");
const router = express.Router();
const restoransController = require("../controllers/restorans");

router.get("/", restoransController.getAllrestarans);

router.post("/", restoransController.Createrestarans);

router.get("/:id", restoransController.GetrestaransById);

router.put("/:id", restoransController.Updaterestarans);

router.delete("/:id", restoransController.Deleterestarans);

module.exports = router;
