import './GreenBoxLogin.css'
import UsernameSection from './UsernameSection/UsernameSection';
import PasswordSection from './PasswordSection/PasswordSection';
import LoginButton from './LoginButton/LoginButton';
import RegFromLogin from './RegFromLogin/RegFromLogin';
import { useState } from "react";

export default function GreenBoxLogin({setcurrentUser}) {
  const [usernameSectionState, setUsernameSectionState] = useState('');
  const [passwordSectionState, setPasswordSectionState] = useState('');
  
    return (
        <div className="greenBoxLogin">
        <form className="myForm" method="get" action="login.php">
          <div className="allFields">
            <UsernameSection usernameSectionState={usernameSectionState}
            setUsernameSectionState={setUsernameSectionState} />
            <PasswordSection passwordSectionState={passwordSectionState}
             setPasswordSectionState={setPasswordSectionState} />
          </div>
          <div className="bottom">
            <LoginButton usernameSectionState={usernameSectionState}
            setUsernameSectionState={setUsernameSectionState}
            passwordSectionState={passwordSectionState}
            setPasswordSectionState={setPasswordSectionState} 
            setcurrentUser={setcurrentUser}/>
            <RegFromLogin />
          </div>
        </form>
      </div>
    );
}