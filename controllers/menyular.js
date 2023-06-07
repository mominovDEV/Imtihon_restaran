const { reset } = require("nodemon");
const db = require("../config/db");

exports.getAllmenyular = (req, res) => {
  db.query("select * from menyular", (error, results) => {
    if (error) {
      console.log("Error retrieving menyular:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
};

exports.Createmenyular = (req, res) => {
  const { restaran_id, ovqat_id, price } = req.body;
  db.query(
    "INSERT INTO menyular(restaran_id, ovqat_id, price) VALUES(?,?,?)",
    [restaran_id, ovqat_id, price],
    (error, results) => {
      if (error) {
        console.log("Error creating menyular:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      console.log(results);
      res.json({
        message: "menyular create successfully",
        menyularId: results.insertId,
      });
    }
  );
};

exports.GetmenyularById = (req, res) => {
  const menyularId = req.params.id;
  db.query(
    "Select * from menyular where id=?",
    [menyularId],
    (error, results) => {
      if (error) {
        console.log("Error RETREVING menyular:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: "menyular not found" });
      }
      res.json(results[0]);
    }
  );
};
exports.Updatemenyular = (req, res) => {
  const menyularId = req.params.id;
  const { restaran_id, ovqat_id, price } = req.body;
  db.query(
    "UPDATE menyular set restaran_id=?, ovqat_id=?, price=?  where id = ?",
    [restaran_id, ovqat_id, price, menyularId],
    (error) => {
      if (error) {
        console.log("Error Updating menyular:", error);
        return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
      }

      res.json({ message: "menyular update successfully" });

      res.json(results[0]);
    }
  );
};

exports.Deletemenyular = (req, res) => {
  const menyularId = req.params.id;
  db.query("Delete from menyular where id=?", [menyularId], (error) => {
    if (error) {
      console.log("Error deleting menyular:", error);
      return res.status(500).json({ error: "INTERNAL SERVER ERROR" });
    }
    res.json({ message: "menyular deleter successfully" });
  });
};
