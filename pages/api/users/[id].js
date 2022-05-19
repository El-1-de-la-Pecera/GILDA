import { client } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUser(req, res);
    case "DELETE":
      return await deleteUser(req, res);
    case "PUT":
      return await updateUser(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getUser = async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM users WHERE id = $1", [
      req.query.id,
    ]);
    // console.log(result);
    return res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await client.query("DELETE FROM users WHERE id = $1", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, password, isAdmin } = req.body;

    // console.log(req.body)
    const x = await client.query("UPDATE users SET username=$1,password=$2,isAdmin=$3 WHERE id = $4",
       [username,
        password,
        isAdmin,
        req.query.id
      ]);
      console.log(x);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
