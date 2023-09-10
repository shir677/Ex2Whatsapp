export default function ConfirmPassword({handleValidation, handlePasswordChange,
     confirmPasswordValue, confirmPasswordError}) {
    return (
        <div>
        <div className="inputDiv">
            <label className="fieldLabels">Confirm Password</label>
            <input type="password" className="form-control bars"
            value={confirmPasswordValue}  onChange={handlePasswordChange}
            onKeyUp={handleValidation} name="confirmPassword"></input>
        </div>
            <p className="text-danger">{confirmPasswordError}</p>
        </div>
    );
}