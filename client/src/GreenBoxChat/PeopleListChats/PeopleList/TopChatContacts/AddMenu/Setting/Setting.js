import {FiSettings } from "react-icons/fi";

export default function Setting() {

    const handleClick = () => {

    };

    return(
        <>
        <button 
        onClick={handleClick}
        class="option">
            <FiSettings/>&nbsp;&nbsp;setting
        </button>
        </>
    )
}