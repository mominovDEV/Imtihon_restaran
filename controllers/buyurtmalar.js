const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllbuyurtmalar = (req, res) => {
  db.query("select * from buyurtmalar", (error, results) => {
    if (error) {
      console.log("Error retrieving buyurtmalar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createbuyurtmalar = (req, res) => {
  const { menyu_id, mijozlar_id, yetkazuvchilar_id, quantity } = req.body;
  db.query(
    "INSERT INTO district(menyu_id, mijozlar_id, yetkazuvchilar_id, quantity) VALUES(?,?,?,?)",
    [menyu_id, mijozlar_id, yetkazuvchilar_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating buyurtmalar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "buyurtmalar create successfully",
        buyurtmalarId: results.insertId,
      });
    }
  );
};

exports.GetbuyurtmalarById = (req, res) => {
  const buyurtmalarId = req.params.id;
  db.query(
    "Select * from buyurtmalar where id=?",
    [buyurtmalarId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING buyurtmalar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "buyurtmalar not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updatebuyurtmalar = (req, res) => {
  const buyurtmalarId = req.params.id;
  const { menyu_id, mijozlar_id, yetkazuvchilar_id, quantity } = req.body;
  db.query(
    "UPDATE district set menyu_id =?, mijozlar_id=?, yetkazuvchilar_id=?, quantity=?  where id = ?",
    [menyu_id, mijozlar_id, yetkazuvchilar_id, quantity, buyurtmalarId],
    (error) => {
      if (error) {
        console.log("Error Updating buyurtmalar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "buyurtmalar update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deletebuyurtmalar = (req, res) => {
  const buyurtmalarId = req.params.id;
  db.query("Delete from buyurtmalar where id=?", [buyurtmalarId], (error) => {
    if (error) {
      console.log("Error deleting buyurtmalar:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "buyurtmalar deleter successfully" });
  });
};
