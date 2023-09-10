import './TopChatContacts.css'
import AddContact from './AddContact/AddContact';
import User from './User/User';
import AddMenu from './AddMenu/AddMenu';


export default function TopChatContacts({ contacts, setContacts, userData }) {
    let userImg = "";
    // If profilePic of the user already loaded
    if (userData && userData.profilePic){
        userImg = userData.profilePic;
    }

    return (
        <div className="topChatContacts">
            <User userImg={userImg} />
            <AddContact contacts={contacts} setContacts={setContacts}/>
            <AddMenu/>
        </div>
    )
}
