import { useState } from 'react';

export const useFormData = (props: any = {}): any => {

    const [inputs, setInputs] = useState({...props})

    const handleInputChange = (e: any) => {
        const target = e.target;
        if (target) {
            setInputs((inputs: any) => ({...inputs, [target.name]: target.value}))
        }
    }

    return {inputs, setInputs, handleInputChange};
}