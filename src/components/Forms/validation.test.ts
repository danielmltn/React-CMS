
import {formValidation} from './validation'

describe('form validation', () => {

    describe('name validation', () => {
        const {nameValidation} = formValidation();
        
        test('should validate a name value has been passed', () => {
            const invalidNameMessage = 'Must enter a valid name';
            expect(nameValidation()).toEqual(invalidNameMessage);
            expect(nameValidation('')).toEqual(invalidNameMessage);
            expect(nameValidation('Tester1')).toBeNull();
        })

        test('should validate the name approved chars', () => {
            const invalidNameMessage = 'Invalid characters in name';
            expect(nameValidation('tester1-;.')).toEqual(invalidNameMessage);
            expect(nameValidation('..!$%tester1')).toEqual(invalidNameMessage);
            expect(nameValidation('Test-er1')).toBeNull();
        })
    })

    describe('password validation', () => {
        const {passwordValidation} = formValidation();

        test('should have a min character length of 8', () => {
            const minLengthMessage = 'Must enter a password with at least 8 characters.';
            expect(passwordValidation()).toEqual(minLengthMessage);
            expect(passwordValidation('Test1!')).toEqual(minLengthMessage);
            expect(passwordValidation('Tester12!')).toBeNull();
        })

        test('should validate the password approved chars', () => {
            const invalidCharMessage = 'Invalid characters in name. At least one uppercase letter, one lowercase letter, one special char, and one digit are required.';
            expect(passwordValidation('tEst123456!')).toBeNull();
            expect(passwordValidation('teSt123456#?^')).toBeNull();
            //no lowercase
            expect(passwordValidation('HELLO123!')).toEqual(invalidCharMessage);
            //no uppercase
            expect(passwordValidation('hello123!')).toEqual(invalidCharMessage);
            //no digit
            expect(passwordValidation('Hellooo!')).toEqual(invalidCharMessage);
            //no special chars
            expect(passwordValidation('Hello123')).toEqual(invalidCharMessage);
        })
    })
})