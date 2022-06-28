import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";

const Login = () => {
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
            <form>
              <TextField
                variant="filled"
                label="Email"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="email"
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
                name="password"
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
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                variant="filled"
                label="Repetir contraseña"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
                name="password"
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
