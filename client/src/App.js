import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
export default function App() {
  
  const token = localStorage.getItem('token');
  

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
        </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}
