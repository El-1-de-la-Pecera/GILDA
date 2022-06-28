import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [product, setProducts] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    try{
      await fetch(`http://localhost:4000/product/${id}`, {
      method: "DELETE",
    });
    
    setProducts(product.filter((product) => product.id !== id));
    }
    catch(err){
      console.log(err);
    }
  }

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
            backgroundColor: "#1e272e"
          }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{color:"white"}}>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1">{product.description}</Typography>
              <Typography variant="body1">Stock bodega: {product.stock_bodega}</Typography>
              <Typography variant="body1">Stock Sala: {product.stock_sala}</Typography>
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
                variant="contained"
                color="warning"
                onClick={() => handleDelete(product.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
