import './GreenBoxReg.css'
import { useNavigate } from "react-router-dom";
import UsernameInput from './UsernameInput/UsernameInput';
import DisplayName from './DisplayName/DisaplyName';
import UploadPicture from './UploadPicture/UploadPicture';
import RegisterButton from './RegisterButton/RegisterButton';
import AlreadyRegistered from './AlreadyRegistered/AlreadyRegistered';
import PasswordAndConfirmPasswordValidation from './PasswordAndConfirmPasswordValidation/PasswordAndConfirmPasswordValidation';
import {addUser} from '../HandleServer/HandleServer';
import { useState } from 'react';
// export let usersArray = JSON.parse(localStorage.getItem('users')) || [];

export default function GreenBoxReg() {
  // All states
  const [username, setUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [picture, setPicture] = useState(null);
  const [base64String, setBase64String] = useState('');
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  let navigate = useNavigate();

  // Function to handle the update of the picture data
  const handlePictureParent = (newPicture) => {
    // Convert the picture to base64 (a string form)
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setBase64String(base64);
    };
      console.log(newPicture)
      reader.readAsDataURL(newPicture);
    setPicture(newPicture);
  };

  // Register button click handler
  const handleRegisterButton = async() => {
      // true isFormValid means that there is no empty fields
      const isFormValid = !!(username && passwordError === "" && 
      confirmPasswordError === "" && displayName && picture);

      if (isFormValid) {
        // Create a new user object with the input values
        const newUser = {
          "username" : username,
          "password" : confirmPassword,
          "displayName" : displayName,
          "profilePic" : base64String
        };


        const res = await addUser(newUser);
        if (res.ok) {
        // Clear the input fields
        setUsername('');
        setCreatePassword('');
        setConfirmPassword('');
        setDisplayName('');
        console.log(picture);
        // handlePictureParent(null);

        alert("Welcome to our Whatsapp, please log in");
        navigate('/');
        } else if(res.status === '409') {
          alert("There is already a user with this username! \n Choose another username");
          // Reset the username input 
          setUsername('');
        } else {
          console.log("Error occured!");
          alert("Fill all the fields correctly");
        }
    }
  };

  return (
    <div className="greenBoxReg">
      <form className="myForm" method="get" action="login.php">
        <div className="allFields">
          <UsernameInput username={username} setUsername={setUsername} />
          <PasswordAndConfirmPasswordValidation createPassword={createPassword}
            setCreatePassword={setCreatePassword} confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword} passwordError={passwordError}
            setPasswordErr={setPasswordErr} confirmPasswordError={confirmPasswordError}
            setConfirmPasswordError={setConfirmPasswordError} />
          <DisplayName displayName={displayName} setDisplayName={setDisplayName} />
          <UploadPicture handlePictureParent={handlePictureParent} />
          {picture && <img src={URL.createObjectURL(picture)} alt="Uploaded"
            height="200px" width="300px" />}
        </div>
        <div className="bottom">
          <RegisterButton handleRegisterButton={handleRegisterButton} />
          <AlreadyRegistered />
        </div>
      </form>
    </div>
  );
}

