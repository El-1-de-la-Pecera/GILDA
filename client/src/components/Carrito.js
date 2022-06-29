import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';

export default function ProductList() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    const response = await fetch(`/carrito/${token.id}`);
    if (response.status === 200) {
      const data = await response.json();
      if (data !== null) {
        setProducts(data);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/carrito/${id}`, {
        method: "DELETE",
      });

      setProducts(product.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteAll = async (id) => {
    try {
      await fetch(`/carrito/${id}/all`, {
        method: "DELETE",
      });

      setProducts(product.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
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
              <Typography variant="body1">
                Stock Sala: {product.stock_sala}
              </Typography>
              <Typography variant="body1">Precio: {product.price}</Typography>
              <Typography variant="body1">SKU: {product.sku}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(product.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
          <Button
                variant="contained"
                color="neutral"
                onClick={() => handleDeleteAll(token.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Limpiar Carrito <CleaningServicesIcon/>
          </Button>
        </Card>
      ))}
    </>
  );
}
