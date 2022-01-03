import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history, }) => {

    const {dispatch} = useContext(AuthContext);


    const handleLogin= ()=>{
        //history.replace('/marvel');

        const lasthPath= localStorage.getItem('lastpath') || '/';

        const action={
            type: types.login,
            payload: {
                name: 'Alex',
            }
        }
        
        dispatch(action);
        history.replace(lasthPath);

        
    }
    return (
        <div className="container mt-5">
            <h1 className="title">Login</h1>
            <hr />

            <button 
            className="btn btn-primary"
            onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
