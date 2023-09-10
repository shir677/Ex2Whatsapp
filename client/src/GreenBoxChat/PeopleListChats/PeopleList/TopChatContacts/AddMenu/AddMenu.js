import { FiMenu} from "react-icons/fi";
import React, { useState } from 'react';
import './AddMenu.css'
import LogOut from "./LogOut/LogOut";
import Setting from "./Setting/Setting";

export default function AddMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuButton = () => {
      setIsOpen(!isOpen);
    };

    return(
        <button 
        onClick={handleMenuButton}
        type="button"
        id='setting'
        className="btn btn-outline-seccess"
        >
        <FiMenu/>
        {isOpen && <MenuOptions />}
      </button>

    )
}

function MenuOptions() {
    return (
      <div className="menu-options">
        <ul>
          <li><LogOut/></li>
          <li><Setting/></li>
        </ul>
      </div>
    );
  }
  