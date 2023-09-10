import './AlreadyRegistered.css'
import { Link } from 'react-router-dom';

export default function AlreadyRegistered() {
    return (
        <div className="registered">
            <label>Already registered? <Link to="/">Click here</Link> to login</label>
        </div>
    );
}