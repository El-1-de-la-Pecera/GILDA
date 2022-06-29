const pool = require("../db");

const getAllCarrito = async (req, res, next) => {
  try {
    const AllUsers = await pool.query("SELECT * FROM carrito");
    res.json(AllUsers.rows);
  } catch (error) {
    next(error);
  }
};

const deleteAllCarrito = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM carrito WHERE id_usuario = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

//se seleccionan todos los productos de la persona con id x
const getCarrito = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM carrito WHERE id_usuario = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Carrito not found" });
    }
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

//se crea un producto de la persona con id x
const createCarrito = async (req, res, next) => {
  const { id_usuario, name, description, stock_bodega, stock_sala, price} = req.body;

  try {
    result = await pool.query(
      "INSERT INTO carrito (id_usuario, name, description, stock_bodega, stock_sala, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_usuario, name, description, stock_bodega, stock_sala, price]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

//se elimina un producto de la persona con id x con el id del producto en carrito
const deleteCarrito = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM carrito WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllCarrito,
  getCarrito,
  createCarrito,
  deleteCarrito,
  deleteAllCarrito
};
