export default function DisplayName({displayName, setDisplayName}) {
    
    const handleDisplayName = (event) => {
        setDisplayName(event.target.value);
    };

    return (
        <div className="inputDiv">
            <label className="fieldLabels">Display Name</label>
            <input type="text" className="form-control bars"
            value={displayName} onChange={handleDisplayName}></input>
        </div>
    )
}