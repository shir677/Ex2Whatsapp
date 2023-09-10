export default function UsernameSection({usernameSectionState, setUsernameSectionState}) {

    const handleUsernameSectionState = (event) => {
        setUsernameSectionState(event.target.value);
    };

    return (
        <div className="inputDiv">
            <label className="fieldLabels">Username</label>
            <input type="text" className="form-control bars"
            value={usernameSectionState} onChange={handleUsernameSectionState}>
            </input>
        </div>
    );
}