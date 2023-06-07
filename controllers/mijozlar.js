const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllmijozlar = (req, res) => {
  db.query("select * from mijozlar", (error, results) => {
    if (error) {
      console.log("Error retrieving mijozlar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createmijozlar = (req, res) => {
  const { name, phone, location } = req.body;
  db.query(
    "INSERT INTO district(name, phone, location ) VALUES(?,?,?)",
    [name, phone, location],
    (error, results) => {
      if (error) {
        console.log("Error creating mijozlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "mijozlar create successfully",
        menyularId: results.insertId,
      });
    }
  );
};

exports.GetmijozlarById = (req, res) => {
  const mijozlarId = req.params.id;
  db.query(
    "Select * from mijozlar where id=?",
    [mijozlarId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING mijozlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "mijozlar not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updatemijozlar = (req, res) => {
  const mijozlarId = req.params.id;
  const { name, phone, location } = req.body;
  db.query(
    "UPDATE mijozlar set name=?, phone=?, location=?   where id = ?",
    [name, phone, location, mijozlarId],
    (error) => {
      if (error) {
        console.log("Error Updating mijozlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "mijozlar update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deletemijozlar = (req, res) => {
  const mijozlarId = req.params.id;
  db.query("Delete from mijozlar where id=?", [mijozlarId], (error) => {
    if (error) {
      console.log("Error deleting mijozlar:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "mijozlar deleter successfully" });
  });
};
