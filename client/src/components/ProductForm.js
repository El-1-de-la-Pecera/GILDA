import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

const ProductForm = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [product, setProduct] = useState({
    name: "",
    description: "",
    stock_bodega: null,
    stock_sala: null,
    price: null,
    sku: "",
  });
  const [descuento, setDescuento] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      loadProduct(params.id);
    }
  }, [params.id]);

  const loadProduct = async (id) => {
    const res = await fetch("http://localhost:4000/products/" + id);
    const data = await res.json();
    setProduct({
      name: data.name,
      description: data.description,
      stock_bodega: data.stock_bodega,
      stock_sala: data.stock_sala,
      price: data.price,
      sku: data.sku,
    });
    setEditing(true);
  };


  const aplicarDescuento = (e) =>
    setDescuento({ ...descuento, [e.target.name]: e.target.value });

  const descount = (e) => {
    aplicarDescuento(e);
    product.price = product.price - ((e.target.value * product.price) / 100);
    handleChange(product.price);
  }


  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          "http://localhost:4000/product/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#1E272E",
            padding: "1rem",
          }}
        >
          <Typography variant="h5" textAlign="center" color="white">
            {editing ? "Actualizar Producto" : "Crear Producto"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                disabled={token.tipo !== "Administrador"}
                variant="filled"
                label="Nombre"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                onChange={handleChange}
                value={product.name}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                disabled={token.tipo !== "Administrador"}
                variant="outlined"
                label="Descripcion"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="description"
                onChange={handleChange}
                value={product.description}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Stock Bodega"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="stock_bodega"
                onChange={handleChange}
                value={product.stock_bodega}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Stock Sala"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="stock_sala"
                onChange={handleChange}
                value={product.stock_sala}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                disabled={token.tipo !== "Administrador"}  
                variant="filled"
                label="Precio"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="price"
                onChange={handleChange}
                value={product.price}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                disabled={token.tipo !== "Administrador"}  
                variant="filled"
                label="SKU"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="sku"
                onChange={handleChange}
                value={product.sku}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!product.name || !product.description}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Guardar"
                )}
              </Button>
              <FormControl fullWidth style={{marginTop:"1rem"}}>
                <InputLabel
                  style={{ color: "white" }}
                >
                  Descuento
                </InputLabel>
                <Select value={descuento.values} label="Tipo"name="tipo" onChange={descount} style={{color:"white"}}>
                  <MenuItem value={10}>10%</MenuItem>
                  <MenuItem value={20}>20%</MenuItem>
                  <MenuItem value={30}>30%</MenuItem>
                  <MenuItem value={40}>40%</MenuItem>
                  <MenuItem value={50}>50%</MenuItem>
                  <MenuItem value={60}>60%</MenuItem>
                  <MenuItem value={70}>70%</MenuItem>
                  <MenuItem value={80}>80%</MenuItem>
                  <MenuItem value={90}>90%</MenuItem>
                </Select>
              </FormControl>

              <div>
              {token.tipo !== "Administrador" ? (
                <Typography variant="p" textAlign="center" color="white">
                  Algunas funciones estan desabilitadas
                </Typography>
              ) : (
                ""
              )}
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
