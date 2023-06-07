const express = require("express");
const router = express.Router();
const buyurtmalarController = require("../controllers/buyurtmalar");

router.get("/", buyurtmalarController.getAllbuyurtmalar);

router.post("/", buyurtmalarController.Createbuyurtmalar);

router.get("/:id", buyurtmalarController.GetbuyurtmalarById);

router.put("/:id", buyurtmalarController.Updatebuyurtmalar);

router.delete("/:id", buyurtmalarController.Deletebuyurtmalar);

module.exports = router;
