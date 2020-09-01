import React from 'react';
import './Login.css'

export const Login = () => {
    // const [field, setField] = useInput

    const handleSubmit = () => {
        console.log('submitted')
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username'></input>

            <label htmlFor='password'>Password:</label>
            <input type='text' id='password'></input>

            <input type='submit' value='Login'></input>
        </form>
    )
}