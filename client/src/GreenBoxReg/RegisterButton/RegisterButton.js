import './RegisterButton.css'
// import { Link } from 'react-router-dom';

export default function RegisterButton({ handleRegisterButton }) {

    return (
        <div className="registerDiv">
            <button type="button" id="registerButton"
                className="form-control" onClick={handleRegisterButton}>
                Register</button>
        </div>
    );
}