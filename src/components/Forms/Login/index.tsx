import React, { useRef } from 'react';
import {useFormData} from '../../../custom-hooks/FormData/index'
import {formValidation} from '../validation'

import './Login.css'


const {nameValidation, passwordValidation} = formValidation()

export const Login = () => {
    const {handleInputChange} = useFormData();
    const inputRef: any = useRef();

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleValidation = (e: any, validationFunc: Function) => {
        const target = e.target
        if (target) {
            const invalidMessage = validationFunc(target.value);
            if (invalidMessage) {
                inputRef.current.hidden = false;
                inputRef.current.innerHTML = invalidMessage;
            } else {
                inputRef.current.hidden = true;
                inputRef.current.innerHTML = '';
            }
        }
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' onChange={handleInputChange} onBlur={e => handleValidation(e, nameValidation)}></input>

            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' onChange={handleInputChange} onBlur={e => handleValidation(e, passwordValidation)}></input>

            <span className="error-message" ref={inputRef}></span>
            <input className="submit--invalid" type='submit' value='Login'></input>
        </form>
    )
}