const { Router } = require("express");
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product.controller");
const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getUserCredentials
} = require("../controllers/user.controller");

const router = Router();

// products-----------------------------------------------------
router.get("/products", getAllProducts);

router.get("/products/:id", getProduct);

router.post("/product", createProduct);

router.delete("/product/:id", deleteProduct);

router.put("/product/:id", updateProduct);

// usuarios-----------------------------------------------------
router.get("/users", getAllUsers);

router.get("/users/:id", getUser);

router.post("/user", createUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", updateUser);

router.post("/user/login", getUserCredentials);

module.exports = router;
