import React from "react";
import { useUserContext } from "../context/UserContext";

function Dashboard() {
  const { user } = useUserContext();
  return (
    <>
      <h1>Dashboard</h1>
      <h2>Bienvenido: {user.name}</h2>
    </>
  );
}
export default Dashboard;