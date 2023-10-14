import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthF = ({ authForm }) => {
    const [isAuth, setIsAuth] = useState(false);
    setIsAuth( authForm )
    const navigate = useNavigate();
    console.log(authForm)
    return isAuth ? navigate('dashboard') : navigate('/')
}
