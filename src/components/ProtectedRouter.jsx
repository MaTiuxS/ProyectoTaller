import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom"
// import { Logueado } from "./Logueado";


export const ProtectedRouter = () => {
    const [isAuth, setIsAuth] = useState(false);

    return isAuth ? < Outlet />: <Navigate to="/" />;
}
