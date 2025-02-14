import { AbstractControl } from "@angular/forms";

export class CustomValidator {
    static ValidateName(control: AbstractControl) {
        const value = control.value as string
        if (value.includes('test')) {
            return {
                invalidName: true
            }
        }
        return null
    }

    static ValidateSpecialChar(char : string) {
        return (control: AbstractControl) => {
            const value = control.value as string
            if (value.includes(char)) {
                return {
                    invalidCharacter: true
                }
            }
            return null
        }
    }
}
