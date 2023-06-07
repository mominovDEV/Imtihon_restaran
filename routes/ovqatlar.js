const express = require("express");
const router = express.Router();
const ovqatlarController = require("../controllers/ovqatlar");

router.get("/", ovqatlarController.getAllovqatlar);

router.post("/", ovqatlarController.Createovqatlar);

router.get("/:id", ovqatlarController.GetovqatlarById);

router.put("/:id", ovqatlarController.Updateovqatlar);

router.delete("/:id", ovqatlarController.Deleteovqatlar);

module.exports = router;
