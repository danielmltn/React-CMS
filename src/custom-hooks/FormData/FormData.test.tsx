import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import {useFormData} from './index'

describe('useFormData', () => {
    test('should return an object with inputs, setInputs function and handleInputChange function', () => {
        let inputObj = {inputs: {}, setInputs: () => {}, handleInputChange: () => {}}
        const TestComponent = () => {
            inputObj = useFormData();
            return null
        }
        render(<TestComponent />)

        const {inputs, setInputs, handleInputChange} = inputObj
        
        expect(inputs).not.toBeUndefined();
        expect(setInputs).not.toBeUndefined();
        expect(handleInputChange).not.toBeUndefined();
    })
    test('should update inputs state by handling an input change', () => {

        let inputObj = {inputs: {username: '', password: ''}, setInputs: () => {}, handleInputChange: (e: any) => {console.log('yo')}}

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

        let inputObj = {inputs: {username: '', password: ''}, setInputs: () => {}, handleInputChange: (e: any) => {console.log('yo')}}

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
})