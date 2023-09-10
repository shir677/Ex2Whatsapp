export default function UsernameInput({username, setUsername}) {

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className="inputDiv">
            <label className="fieldLabels">Username</label>
            <input type="text" className="form-control bars"
            value={username} onChange={handleUsername}></input>
        </div>
    );
}