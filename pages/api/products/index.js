import { client } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM product");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  
  try {
    const { name, stock_bodega, stock_sala, description, price, sku } = req.body;

    const result = await client.query("INSERT INTO product(name, stock_bodega, stock_sala, description, price, sku) VALUES($1,$2,$3,$4,$5,$6)", 
      [name,
      stock_bodega,
      stock_sala,
      description,
      price,
      sku]
    );
    console.log(result);
    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
