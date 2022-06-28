const pool = require("../db");

const getAllProducts = async (req, res, next) => {
  try {
    const AllProducts = await pool.query("SELECT * FROM product");
    res.json(AllProducts.rows);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM product WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  const { name, description, stock_bodega, stock_sala, price, sku } = req.body;

  try {
    result = await pool.query(
      "INSERT INTO product (name, description, stock_bodega, stock_sala, price, sku) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, description, stock_bodega, stock_sala, price, sku]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM product WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, stock_bodega, stock_sala, price, sku} = req.body;

    const result = await pool.query(
      "UPDATE product SET name = $1, description = $2, stock_bodega = $3, stock_sala = $4, price =$5, sku= $6  WHERE id = $7 RETURNING *",
      [name, description, stock_bodega, stock_sala, price, sku, id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ msg: "Product not found" });

    return res.json({ msg: "Product updated" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
};
