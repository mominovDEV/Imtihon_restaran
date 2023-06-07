const express = require("express");
const router = express.Router();
const yetkazuvchilarController = require("../controllers/yetkazuvchilar");

router.get("/", yetkazuvchilarController.getAllyetkazuvchilar);

router.post("/", restoransController.Createyetkazuvchilar);

router.get("/:id", restoransController.GetyetkazuvchilarById);

router.put("/:id", restoransController.Updateyetkazuvchilar);

router.delete("/:id", restoransController.Deleteyetkazuvchilar);

module.exports = router;
