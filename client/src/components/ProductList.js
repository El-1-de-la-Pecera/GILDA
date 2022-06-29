import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export default function ProductList() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    const response = await fetch("/products");
    const data = await response.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/product/${id}`, {
        method: "DELETE",
      });

      setProducts(product.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const addCarrito = async (product) => {
    const aux = {
      id_usuario: token.id,
      name: product.name,
      description: product.description,
      stock_bodega: product.stock_bodega,
      stock_sala: product.stock_sala,
      price: product.price,
      sku: product.sku,
    };
    const response = await fetch("/carrito", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aux),
    });
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <h1>Lista de productos</h1>
      {product.map((product) => (
        <Card
          key={product.id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "white" }}>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="body1">
                Stock bodega: {product.stock_bodega}
              </Typography>
              <Typography variant="body1">
                Stock Sala: {product.stock_sala}
              </Typography>
              <Typography variant="body1">Precio: {product.price}</Typography>
              <Typography variant="body1">SKU: {product.sku}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/product/${product.id}/edit`)}
              >
                Editar
              </Button>
              <Button
                disabled={token.tipo === "Vendedor" ? true : false}
                variant="contained"
                color="warning"
                onClick={() => handleDelete(product.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
              <Button
                disabled={token.tipo === "Reponedor" ? true : false}
                variant="contained"
                color="success"
                onClick={() => {
                  addCarrito(product);
                  alert("Producto agregado al carrito");
                }}
                style={{ marginLeft: ".5rem" }}
              >
                <AddIcon />
                Añadir al carrito
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
