import whatsappLogo from './whatsappLogo.png'
import './TopBar.css'

export default function TopBar () {
    return (
        <div className="topBar">
        <img id="whatsappLogo" src={whatsappLogo} alt=''></img>
      </div>
    );
}