const pool = require("../db");

const getAllUsers = async (req, res, next) => {
  try {
    const AllUsers = await pool.query("SELECT * FROM users");
    res.json(AllUsers.rows);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getUserCredentials = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2 " , [username, password]);

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json("True");
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { username, name, password, tipo} = req.body;

  try {
    result = await pool.query(
      "INSERT INTO users (username, name, password, tipo) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, name, password, tipo]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, name, password, tipo} = req.body;

    const result = await pool.query(
      "UPDATE users SET username = $1, name = $2, password = $3, tipo = $4 WHERE id = $5 RETURNING *",
      [username, name, password, tipo, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ msg: "User not found" });

    return res.json({ msg: "User updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  getUserCredentials
};
