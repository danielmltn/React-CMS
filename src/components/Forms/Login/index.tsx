import React from 'react';
import {useFormData} from '../../../custom-hooks/FormData/index'
import {formValidation} from '../validation'

import './Login.css'


const {nameValidation, passwordValidation} = formValidation()

const usernameRef = {   
    name: 'username',
    validation: {
        func: nameValidation
    } 
}
const passwordRef = {   
    name: 'password',
    validation: {
        func: passwordValidation
    } 
}
export const Login = () => {
    const {handleInputChange, handleValidation, register, handleSubmit} = useFormData();

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' onChange={handleInputChange} onBlur={handleValidation} ref={register(usernameRef)}></input>
            <div className="error-message"></div>


            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' onChange={handleInputChange} onBlur={handleValidation} ref={register(passwordRef)}></input>
            <div className="error-message"></div>
            
            <input className="submit--invalid" type='submit' value='Login'></input>
        </form>
    )
}