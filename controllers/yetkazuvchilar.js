const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllyetkazuvchilar = (req, res) => {
  db.query("select * from yetkazuvchilar", (error, results) => {
    if (error) {
      console.log("Error retrieving yetkazuvchilar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createyetkazuvchilar = (req, res) => {
  const { name, phone } = req.body;
  db.query(
    "INSERT INTO yetkazuvchilar(name, phone ) VALUES(?,?)",
    [name, phone],
    (error, results) => {
      if (error) {
        console.log("Error creating yetkazuvchilar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "yetkazuvchilar create successfully",
        menyularId: results.insertId,
      });
    }
  );
};

exports.GetyetkazuvchilarById = (req, res) => {
  const yetkazuvchilarId = req.params.id;
  db.query(
    "Select * from yetkazuvchilar where id=?",
    [yetkazuvchilarId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING yetkazuvchilar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "yetkazuvchilar not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updateyetkazuvchilar = (req, res) => {
  const yetkazuvchilarId = req.params.id;
  const { name, phone } = req.body;
  db.query(
    "UPDATE yetkazuvchilar set name = ?, phone=?   where id = ?",
    [name, phone, yetkazuvchilarId],
    (error) => {
      if (error) {
        console.log("Error Updating yetkazuvchilar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "yetkazuvchilar update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deleteyetkazuvchilar = (req, res) => {
  const yetkazuvchilarId = req.params.id;
  db.query(
    "Delete from yetkazuvchilar where id=?",
    [yetkazuvchilarId],
    (error) => {
      if (error) {
        console.log("Error deleting yetkazuvchilar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      res.json({ message: "yetkazuvchilar deleter successfully" });
    }
  );
};
