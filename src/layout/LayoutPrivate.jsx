import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

function LayoutPrivate() {
  const { user } = useUserContext();

  return (
    <>
      {
        user ? <Outlet /> : <Navigate to='/' />
      }
    </>
  );
}
export default LayoutPrivate;