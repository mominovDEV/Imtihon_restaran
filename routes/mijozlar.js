const express = require("express");
const router = express.Router();
const mijozlarController = require("../controllers/mijozlar");

router.get("/", mijozlarController.getAllmijozlar);

router.post("/", mijozlarController.Createmijozlar);

router.get("/:id", mijozlarController.GetmijozlarById);

router.put("/:id", mijozlarController.Updatemijozlar);

router.delete("/:id", mijozlarController.Deletemijozlar);

module.exports = router;
