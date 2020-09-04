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
            validateInput(target, inputRefs.current[e.target.name].validation.func)
        }
    }

    const validateInput = (target: any, validationFunc: Function) => {
        const invalidMessage = validationFunc(target.value);
        const errorElement = target.nextElementSibling;
        if (invalidMessage) {
            errorElement.hidden = false;
            errorElement.innerHTML = invalidMessage;
        } else {
            errorElement.hidden = true;
            errorElement.innerHTML = '';
        }
    }

    const handleInputChange = (e: any) => {
        const target = e.target;
        if (target) {
            setInputs((inputs: any) => ({...inputs, [target.name]: target.value}))
        }
    }

    return {inputs, handleInputChange, handleValidation, register};
}