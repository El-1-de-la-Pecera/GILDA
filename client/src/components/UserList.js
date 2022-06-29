import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const response = await fetch("/users");
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/user/${id}`, {
        method: "DELETE",
      });

      setUsers(user.filter((user) => user.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      <h1>Lista de Usuarios</h1>
      {user.map((user) => (
        <Card
          key={user.id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "white" }}>
              <Typography variant="h5">{user.username}</Typography>
              <Typography variant="body1">Nombre: {user.name}</Typography>
              <Typography variant="body1">Tipo: {user.tipo}</Typography>
            </div>
            <div>
              <Button
                disabled={token.tipo === "Administrador" ? false : true}
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/user/${user.id}/edit`)}
              >
                Editar
              </Button>
              <Button
                disabled={token.tipo === "Administrador" ? false : true}
                variant="contained"
                color="warning"
                onClick={() => handleDelete(user.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Eliminar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        variant="contained"
        color="warning"
        onClick={() => navigate("/user/new")}
        style={{ marginLeft: ".5rem" }}
      >
        Nuevo usuario
      </Button>
    </>
  );
}
