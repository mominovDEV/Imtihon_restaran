const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllovqatlar = (req, res) => {
  db.query("select * from ovqatlar", (error, results) => {
    if (error) {
      console.log("Error retrieving ovqatlar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createovqatlar = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO ovqatlar(name ) VALUES(?)",
    [name],
    (error, results) => {
      if (error) {
        console.log("Error creating ovqatlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "ovqatlar create successfully",
        menyularId: results.insertId,
      });
    }
  );
};

exports.GetovqatlarById = (req, res) => {
  const ovqatlarId = req.params.id;
  db.query(
    "Select * from ovqatlar where id=?",
    [ovqatlarId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING ovqatlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "ovqatlar not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updateovqatlar = (req, res) => {
  const ovqatlarId = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE ovqatlar set name=?  where id = ?",
    [name, ovqatlarId],
    (error) => {
      if (error) {
        console.log("Error Updating ovqatlar:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "ovqatlar update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deleteovqatlar = (req, res) => {
  const ovqatlarId = req.params.id;
  db.query("Delete from ovqatlar where id=?", [ovqatlarId], (error) => {
    if (error) {
      console.log("Error deleting ovqatlar:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "ovqatlar deleter successfully" });
  });
};
