import * as Yup from 'yup'

function configureValidation() {
    Yup.addMethod(Yup.string, 'firstLetterUpperCase', function() {
        return this.test('first-letter-uppercase',
        'First letter of genre must be uppercase', function (value) {
            if (value && value.length > 0) {
                const firstLetter = value.substring(0,1);
                return firstLetter === firstLetter.toUpperCase();
            }
            return true;
        })
    })
}

export default configureValidation;