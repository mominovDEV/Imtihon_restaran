const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllrestarans = (req, res) => {
  db.query("select * from restarans", (error, results) => {
    if (error) {
      console.log("Error retrieving restarans:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createrestarans = (req, res) => {
  const { name, location, phone } = req.body;
  db.query(
    "INSERT INTO restarans(name, location, phone ) VALUES(?,?,?)",
    [name, location, phone],
    (error, results) => {
      if (error) {
        console.log("Error creating restarans:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "restarans create successfully",
        menyularId: results.insertId,
      });
    }
  );
};

exports.GetrestaransById = (req, res) => {
  const restaransId = req.params.id;
  db.query(
    "Select * from restarans where id=?",
    [restaransId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING restarans:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "restarans not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updaterestarans = (req, res) => {
  const restaransId = req.params.id;
  const { name, location, phone } = req.body;
  db.query(
    "UPDATE ovqatlar set name = ?, location = ?, phone=?   where id = ?",
    [name, location, phone, ovqatlarId],
    (error) => {
      if (error) {
        console.log("Error Updating restarans:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "restarans update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deleterestarans = (req, res) => {
  const restaransId = req.params.id;
  db.query("Delete from restarans where id=?", [restaransId], (error) => {
    if (error) {
      console.log("Error deleting restarans:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "restarans deleter successfully" });
  });
};
