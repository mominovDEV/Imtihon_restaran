const express = require("express");
const router = express.Router();

const buyurtmalarRoutes = require("./buyurtmalar");

router.use("/buyurtmalar", buyurtmalarRoutes);

module.exports = router;
