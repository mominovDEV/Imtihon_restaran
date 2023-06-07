const express = require("express");
const router = express.Router();

const buyurtmalarRoutes = require("./buyurtmalar");
const menyularRoutes = require("./menyular");
const mijozlarRoutes = require("./mijozlar");
const ovqatlarRoutes = require("./ovqatlar");
const restaransRoutes = require("./restorans");
const yetkazuvchilarRoutes = require("./yetkazuvchilar");

router.use("/buyurtmalar", buyurtmalarRoutes);
router.use("/menyular", menyularRoutes);
router.use("/mijozlar", mijozlarRoutes);
router.use("/ovqatlar", ovqatlarRoutes);
router.use("/restorans", restaransRoutes);
router.use("/yetkazuvchilar", yetkazuvchilarRoutes);

module.exports = router;
