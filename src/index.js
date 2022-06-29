const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const productRouter = require("./routes/products.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(__dirname + "/build"));

app.use(productRouter);

app.use((err, req, res, next) => {
  //manejo de errores
  return res.status(500).json({
    message: err.message,
  });
});

app.listen(process.env.PORT);
console.log("Server running on port 4000");
