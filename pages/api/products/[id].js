import { client } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getTask(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getTask = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM product WHERE id = $1", [
      req.query.id,
    ]);
    // console.log(result);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await client.query("DELETE FROM product WHERE id = $1", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, stock_bodega, stock_sala, description, price, sku } = req.body;

    // console.log(req.body)
    const x = await client.query("UPDATE product SET name=$1,stock_bodega=$2,stock_sala=$3,description=$4,price=$5,sku=$6 WHERE id = $7",
       [name,
        stock_bodega,
        stock_sala,
        description,
        price,
        sku,
        req.query.id
      ]);
      console.log(x);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
