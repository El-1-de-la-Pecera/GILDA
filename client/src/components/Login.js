import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    localStorage.setItem("carrito", {});
  };
  const [credenciales, setCredenciales] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) =>
    setCredenciales({ ...credenciales, [e.target.name]: e.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciales),
      });

      if (response.status === 404) {
        alert("Las credenciales no son correctas");
      } else {
        const userToken = await response.json();
        saveToken(userToken);
        window.location.reload();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
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
            Iniciar Sesion
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Email"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="username"
                onChange={handleChange}
                value={credenciales.username}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Contraseña"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                onChange={handleChange}
                value={credenciales.password}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button type="submit" variant="contained" color="primary">
                Iniciar Sesion
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
