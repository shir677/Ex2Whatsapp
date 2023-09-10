import './LoginButton.css'
import { getToken} from '../../HandleServer/HandleServer'
import { useNavigate } from 'react-router-dom';
export const token = () => localStorage.getItem('token');

export default function LoginButton({ usernameSectionState,
  setUsernameSectionState, passwordSectionState, setPasswordSectionState, setcurrentUser }) {

  let navigate = useNavigate();

  const LoginUser = {
    "username": usernameSectionState,
    "password": passwordSectionState
  };

  const handleClick = async () => {
    const res = await getToken(LoginUser);
    if (res.ok) {
      const result = await res.text()
      console.log("my token is: " + result);
      localStorage.setItem('token', result);
      alert("User Exists! \n Logging in..");

      // For pages component 
      await setcurrentUser(LoginUser);

      navigate('/ChatScreen');

    } else {
      alert('User does NOT exist! \n Try again!');
      // Reset the states of password and username
      setUsernameSectionState('');
      setPasswordSectionState('');
    }
  }

    return (
      <div className="loginDiv">
        <button type="button" id="loginButton" className="form-control"
          onClick={handleClick} >Login</button>
      </div>
    );

    }