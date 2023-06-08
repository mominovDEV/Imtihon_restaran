const express = require("express");
const router = express.Router();
const yetkazuvchilarController = require("../controllers/yetkazuvchilar");

router.get("/", yetkazuvchilarController.getAllyetkazuvchilar);

router.post("/", yetkazuvchilarController.Createyetkazuvchilar);

router.get("/:id", yetkazuvchilarController.GetyetkazuvchilarById);

router.put("/:id", yetkazuvchilarController.Updateyetkazuvchilar);

router.delete("/:id", yetkazuvchilarController.Deleteyetkazuvchilar);

module.exports = router;
