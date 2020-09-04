export const formValidation = () => {
    const nameValidation = (value: string = '') => {
        if (!value) {
            return 'Must enter a valid name'
        }
        if (/[^a-zA-Z0-9 -]/.test(value)) {
            return 'Invalid characters in name'
        }
        return null
    }

    const passwordValidation = (value: string = '') => {
        if (!value || value.length < 8) {
            return 'Must enter a password with at least 8 characters.'
        }
        if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/.test(value)) {
            return 'Invalid characters in name. At least one uppercase letter, one lowercase letter, one special char, and one digit are required.'
        }
        return null
    }
    return {nameValidation, passwordValidation}
}
