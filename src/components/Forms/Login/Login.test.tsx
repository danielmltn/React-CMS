import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from "@testing-library/react";

import { Login } from "./index";


describe('Login', () => {
    test('should render the login form with correct field types for each field', () => {
        const { getByLabelText } = render(<Login />);
        const usernameField = getByLabelText(/username/i);
        const passwordField = getByLabelText(/password/i);

        expect(usernameField).toHaveAttribute('type', 'text');
        expect(passwordField).toHaveAttribute('type', 'text');
    })

    test('should show error message in dom when invalid field triggered onBlur', () => {
        const { getByText, getByLabelText } = render(<Login />);
        const usernameField = getByLabelText(/username/i);

        fireEvent.blur(usernameField, {value: ''})
        expect(getByText(/must enter a valid name/i).innerHTML).toEqual('Must enter a valid name')
    })
})