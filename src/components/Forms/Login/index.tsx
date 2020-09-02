import React from 'react';
import {useFormData} from '../../../custom-hooks/FormData/index'
import './Login.css'

export const Login = () => {
    const {inputs, handleInputChange} = useFormData();

    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' onChange={handleInputChange}></input>

            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' onChange={handleInputChange}></input>

            {inputs.username}
            {inputs.password}
            <input type='submit' value='Login'></input>
        </form>
    )
}