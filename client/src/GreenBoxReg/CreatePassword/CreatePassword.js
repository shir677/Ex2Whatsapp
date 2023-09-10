export default function CreatePassword({ handleValidation, handlePasswordChange
    , passwordValue, passwordError }) {
    return (
        <div>
            <div className="inputDiv">
                <label className="fieldLabels">Create Password</label>
                <input type="password" className="form-control bars"
                    value={passwordValue} onChange={handlePasswordChange}
                    onKeyUp={handleValidation} name="createPassword"></input>
            </div>
            <p className="text-danger">{passwordError}</p>
        </div>
    );
}
