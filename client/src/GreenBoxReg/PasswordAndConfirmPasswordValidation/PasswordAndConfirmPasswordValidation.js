import CreatePassword from "../CreatePassword/CreatePassword";
import ConfirmPassword from "../ConfirmPassword/ConfirmPassword";

export default function PasswordAndConfirmPasswordValidation({ createPassword,
    setCreatePassword, confirmPassword, setConfirmPassword, passwordError, 
    setPasswordErr, confirmPasswordError, setConfirmPasswordError }) {

    const handleCreatePasswordChange = (event) => {
        setCreatePassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleValidation = (event) => {

        const passwordInputValue = event.target.value.trim();
        const passwordInputFieldName = event.target.name;

        //for password 
        if (passwordInputFieldName === 'createPassword') {
            const uppercaseRegExp = /(?=.*?[A-Z])/;
            const lowercaseRegExp = /(?=.*?[a-z])/;
            const digitsRegExp = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp = /.{8,}/;

            const passwordLength = passwordInputValue.length;
            const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
            const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
            const digitsPassword = digitsRegExp.test(passwordInputValue);
            const specialCharPassword = specialCharRegExp.test(passwordInputValue);
            const minLengthPassword = minLengthRegExp.test(passwordInputValue);

            let errMsg = "";
            if (passwordLength === 0) {
                errMsg = "";
            } else if (!uppercasePassword) {
                errMsg = "At least one Uppercase";
            } else if (!lowercasePassword) {
                errMsg = "At least one Lowercase";
            } else if (!digitsPassword) {
                errMsg = "At least one digit";
            } else if (!specialCharPassword) {
                errMsg = "At least one Special Characters";
            } else if (!minLengthPassword) {
                errMsg = "At least minumum 8 characters";
            } else {
                errMsg = "";
            }
            setPasswordErr(errMsg);
        }

        // for confirm password
        if (passwordInputFieldName === "confirmPassword" ||
            (passwordInputFieldName === "createPassword" && confirmPassword.length > 0)) {
            if (confirmPassword !== createPassword) {
                setConfirmPasswordError("Confirm password is not matched");
            } else {
                setConfirmPasswordError("");
            }
        }
    }

return (
    <div>
        <CreatePassword
            handlePasswordChange={handleCreatePasswordChange}
            handleValidation={handleValidation}
            passwordValue={createPassword}
            passwordError={passwordError} />
        <ConfirmPassword
            handlePasswordChange={handleConfirmPasswordChange}
            handleValidation={handleValidation}
            confirmPasswordValue={confirmPassword}
            confirmPasswordError={confirmPasswordError} />
    </div>
)
}