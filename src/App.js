import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if(isLoading) return <h1>Cargando ...</h1>

  return (
    <div className="App"> 
      {isAuthenticated ? (
        <LogoutButton></LogoutButton>
      ) : (
        <LoginButton></LoginButton>
      )}

      <Profile></Profile>
    </div>
  );
}

export default App;
