import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter';

const init=()=>{
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    };
}

export const HeroesApp = () => {

    const [user, dispatch]=useReducer(authReducer, {}, init);

    //Hacemos uso del localstorage, para guardar esa información en el navegador
    // usaremos el useEffect aquí, en la parte más alta de la aplicación
    //si el usuario cambia, pues que dispare de nuevo el efecto
    //el parametro [user] dice que cuando el user cambie, dispare el efecto
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])


    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
       
    )
}
