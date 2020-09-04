import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import {useFormData, RegisterProps} from './index'

describe('useFormData', () => {
    test('should update inputs state by handling an input change', () => {

        let inputObj = {inputs: {username: '', password: ''}, setInputs: () => {}, handleInputChange: (e: any) => {}}

        const TestComponent = () => {
            inputObj = useFormData();
            return (
                <form className="login">
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' onChange={inputObj.handleInputChange}></input>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name='password' onChange={inputObj.handleInputChange}></input>
                </form>
            )
        }
        const { getByLabelText } = render(<TestComponent />);

        const usernameField = getByLabelText(/username/i)
        fireEvent.change(usernameField, {target: {value: 'Dan'}})

        const passwordField = getByLabelText(/password/i)
        fireEvent.change(passwordField, {target: {value: 'Pass'}})

        expect(inputObj.inputs.username).toEqual('Dan');
        expect(inputObj.inputs.password).toEqual('Pass');
    })

    test('should not update inputs state on input change if target object is not present', () => {

        let inputObj = {inputs: {username: '', password: ''}, setInputs: () => {}, handleInputChange: (e: any) => {}}

        const TestComponent = () => {
            inputObj = useFormData();
            return (
                <form className="login">
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' onChange={inputObj.handleInputChange}></input>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name='password' onChange={inputObj.handleInputChange}></input>
                </form>
            )
        }
        const { getByLabelText } = render(<TestComponent />);

        const usernameField = getByLabelText(/username/i)
        fireEvent.change(usernameField, {value: 'Dan'})

        const passwordField = getByLabelText(/password/i)
        fireEvent.change(passwordField, {value: 'Pass'})

        expect(inputObj.inputs).toEqual({});
    })

    test('should handle the validation onBlur from a field', () => {
        const usernameRef = {   
            name: 'username',
            validation: {
                message: '',
                func: () => 'Must enter a valid name'
            } 
        }
        const passwordRef = {   
            name: 'password',
            validation: {
                message: '',
                func: () => null
            } 
        }
        let inputObj = {inputs: {username: '', password: ''}, setInputs: () => {}, 
        handleInputChange: (e: any) => {}, handleValidation: (e: any) => {}, 
        register: (value: RegisterProps) => undefined}

        const TestComponent = () => {
            inputObj = useFormData();
            return (
                <form className="login">
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' onChange={inputObj.handleInputChange} onBlur={inputObj.handleValidation} ref={inputObj.register(usernameRef)}></input>
            <span className="error-message"></span>


            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' onChange={inputObj.handleInputChange} onBlur={inputObj.handleValidation} ref={inputObj.register(passwordRef)}></input>
            <span className="error-message"></span>
            
            <input className="submit--invalid" type='submit' value='Login'></input>
        </form>
            )
        }
        const { getByText, getByLabelText } = render(<TestComponent />);

        const usernameField = getByLabelText(/username/i)
        fireEvent.blur(usernameField, {value: 'Dan'})

        const errorElement = getByText(/must enter a valid name/i);
        expect(errorElement).toBeVisible();

        const passwordField = getByLabelText(/password/i)
        fireEvent.blur(passwordField, {value: 'Pass'})
        expect(passwordField.nextElementSibling).not.toBeVisible();

    })
})