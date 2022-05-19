import { client } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUsers(req, res);
    case "POST":
      return await saveUsers(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getUsers = async (req, res) => {
  try {
    const results = await client.query("SELECT * FROM users");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveUsers = async (req, res) => {
  
  try {
    const {username,password,isAdmin} = req.body;

    const result = await client.query("INSERT INTO users(username,password,isAdmin) VALUES($1,$2,$3)", 
      [username,password,isAdmin]
    );
    console.log(result);
    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
