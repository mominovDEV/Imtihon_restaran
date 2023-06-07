const express = require("express");
const router = express.Router();
const menyularController = require("../controllers/menyular");

router.get("/", menyularController.getAllmenyular);

router.post("/", menyularController.Createmenyular);

router.get("/:id", menyularController.GetmenyularById);

router.put("/:id", menyularController.Updatemenyular);

router.delete("/:id", menyularController.Deletemenyular);

module.exports = router;
