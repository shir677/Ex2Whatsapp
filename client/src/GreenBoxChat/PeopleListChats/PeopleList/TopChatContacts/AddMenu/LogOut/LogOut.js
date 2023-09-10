import { useNavigate } from "react-router-dom";
import {FiLogOut } from "react-icons/fi";

export default function LogOut() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/');

    };

    return(
        <>
        <button 
        onClick={handleClick}
        class="option">
            <FiLogOut/>&nbsp;&nbsp;log out
        </button>
        </>
    )
}