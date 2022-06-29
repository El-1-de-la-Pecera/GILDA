import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Profile from "./components/Profile";
import Carrito from "./components/Carrito";
export default function App() {
  
  const token = localStorage.getItem('token');
  
  //rutas sin iniciar sesion
  if(!token){
    return (
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  }
  //rutas con logeado
  else{
    return (
      <BrowserRouter>
        <Navbar />
        <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/new" element={<ProductForm />} />
          <Route path="/product/:id/edit" element={<ProductForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/new" element={<UserForm />} />
          <Route path="/user/:id/edit" element={<UserForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}
