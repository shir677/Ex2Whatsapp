export default function PasswordSection({passwordSectionState,
    setPasswordSectionState}) {
        
    const handlePasswordSectionState = (event) => {
        setPasswordSectionState(event.target.value);
    };

    return (
        <div className="inputDiv">
            <label className="fieldLabels">Password</label>
            <input type="password" className="form-control bars"
            value={passwordSectionState} onChange={handlePasswordSectionState}>
            </input>
        </div>
    );
}
