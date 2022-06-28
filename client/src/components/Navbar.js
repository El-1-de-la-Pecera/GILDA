import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: "none", color: "#eee"}}>GILDA</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/product/new")}
            >
              Nuevo producto
            </Button>
            
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/users")}
              style={{marginLeft: "1rem"}}
            >
              Usuarios
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
