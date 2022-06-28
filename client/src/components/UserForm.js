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
  MenuItem,
} from "@mui/material";

const UserForm = () => {
  const [user, setUser] = useState({
    username: "",
    name: "",
    password: "",
    tipo: "",
  });
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadUser(params.id);
    }
  }, [params.id]);

  const loadUser = async (id) => {
    const res = await fetch("http://localhost:4000/users/" + id);
    const data = await res.json();
    setUser({
      username: data.username,
      name: data.name,
      password: data.password,
      tipo: data.tipo,
    });
    setEditing(true);
    console.log(setEditing);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (editing) {
        const response = await fetch(
          "http://localhost:4000/user/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        await response.json();
      }

      setLoading(false);
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

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
            {editing ? "Actualizar Usuario" : "Crear Usuario"}
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="Nombre de usuario"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="username"
                onChange={handleChange}
                value={user.username}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Nombre"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="name"
                onChange={handleChange}
                value={user.name}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Contraseña"
                type="password"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
                onChange={handleChange}
                value={user.password}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <FormControl fullWidth>
                <InputLabel
                  style={{ color: "white" }}
                >
                  Tipo
                </InputLabel>
                <Select value={user.tipo} label="Tipo"name="tipo" onChange={handleChange} style={{color:"white"}}>
                  <MenuItem value={"Administrador"}>Administrador</MenuItem>
                  <MenuItem value={"Reponedor"}>Reponedor</MenuItem>
                  <MenuItem value={"Vendedor"}>Vendedor</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                  !user.username || !user.name || !user.password || !user.tipo
                }
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Guardar"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserForm;
