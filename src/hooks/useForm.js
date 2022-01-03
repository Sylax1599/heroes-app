//ESTE HOOK LO PODEMOS USAR PARA LA PARTE D ELOS FORMULARIOS, SIEMPRE

//INDISPENSABLE, OJO.

import React, { useState } from 'react';


export const useForm = (initialState={}) => {
    
    const [values, setValues] = useState(initialState);

    const reset= () =>{
        setValues(initialState)
    }

    const handleInputChange=({target})=>{
        setValues({
            ...values,
              [target.name]: target.value
        })
    };


    return [values, handleInputChange, reset];
}


/*
const initialForm={
    name: '',
    age: 0,
    email: ''
}
const [formValues, handleInputChange, reset] = useForm(initialForm)
*/