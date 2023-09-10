import './RegFromLogin.css'
import { Link } from 'react-router-dom';

export default function RegFromLogin() {
    return (
        <div className="registered">
            <label>Not registered? <Link to="/register">Click here</Link> to register</label>
        </div>
    );
}