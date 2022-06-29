import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                GILDA
              </Link>
            </Typography>
            <Button
              disabled={token.tipo !== "Administrador"}
              variant="contained"
              color="primary"
              onClick={() => navigate("/product/new")}
            >
              Nuevo producto
            </Button>

            <Button
              variant="contained"
              color="error"
              style={{ marginLeft: "1rem" }}
              onClick={() => {navigate("/");}}
            >
              Lista de productos
            </Button>

            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/users")}
              style={{ marginLeft: "1rem" }}
            >
              Usuarios
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/profile")}
              style={{ marginLeft: "1rem" }}
            >
              Perfil
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/carrito")}
              style={{ marginLeft: "1rem" }}
            >
              <ShoppingCartIcon />
              Carrito
            </Button>

            <Button
              variant="contained"
              color="error"
              style={{ marginLeft: "1rem" }}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
                window.location.reload();
              }}
            >
              Cerrar sesión
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
