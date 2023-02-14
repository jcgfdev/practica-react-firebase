import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function Home() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser({
      name: 'pepito',
      email: 'pepito@gmail.com'
    });
    navigate('/dashboard');
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
export default Home;