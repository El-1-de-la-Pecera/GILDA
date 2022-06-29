import { Typography, Card, CardContent } from "@mui/material";

export default function UserList() {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <>
      <h1>Perfil</h1>

      <Card
        style={{
          marginBottom: ".7rem",
          backgroundColor: "#1e272e",
        }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ color: "white" }}>
            <Typography variant="h4"> {token.username}</Typography>
            <Typography variant="h5">Nombre: {token.name}</Typography>
            <Typography variant="h5">Tipo: {token.tipo}</Typography>
          </div>
          
        </CardContent>
      </Card>
    </>
  );
}
