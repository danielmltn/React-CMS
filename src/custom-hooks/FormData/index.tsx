import { useState, useRef } from 'react';

export interface RegisterProps {
    name: string;
    validation: {
        message: string;
        func: Function;
    }
}

export const useFormData = (props: any = {}): any => {

    const [inputs, setInputs] = useState({...props})
    const inputRefs: any = useRef({});

    const register = (value: RegisterProps) => {
        if (value.name && value.validation) {
            inputRefs.current[value.name] = value;
        }
    }

    const handleValidation = (e:any) => {
        const target = e.target
        if (target && target.name) {
            const validationFunc = inputRefs.current[e.target.name].validation.func
            const invalidMessage = validationFunc(target.value);
            const errorElement = target.nextElementSibling;
            toggleErrorMessage(invalidMessage, errorElement)
        }
    }

    const toggleErrorMessage = (invalidMessage: string = '', errorElement: any) => {
        if (invalidMessage) {
            errorElement.innerHTML = invalidMessage;
        } else {
            errorElement.innerHTML = '';
        }
    }

    const handleInputChange = (e: any) => {
        const target = e.target;
        if (target) {
            setInputs((inputs: any) => ({...inputs, [target.name]: target.value}))
        }
    }

    const handleSubmit = (e: any) => {
        let errorMessage = false;
        if (e.target) {
            const formElements = e.target.elements;
            for(const [, value] of Object.entries(inputRefs.current)) {
                const entry: any = value;
                const validationFunc = inputRefs.current[entry.name].validation.func
                const invalidMessage = validationFunc(inputs[entry.name]);
                if (invalidMessage) {
                    errorMessage = true;
                }
                const errorElement = formElements[entry.name].nextElementSibling;
                toggleErrorMessage(invalidMessage, errorElement)
            }

        }
        if (errorMessage) {
            e.preventDefault();
        }
    }

    return {inputs, handleInputChange, handleValidation, register, handleSubmit};
}