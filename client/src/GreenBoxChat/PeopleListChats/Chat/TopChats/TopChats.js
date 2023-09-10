import './TopChats.css';

export default function TopChats({ contact }) {
  let profilePic = ""
  let displayName = ""
  if (contact && contact.user && contact.user.profilePic && contact.user.displayName ) {
    profilePic = contact.user.profilePic
    displayName = contact.user.displayName
  }
    return (
      <div className="topChats">
        <div className="contactTopImage">
          <img
            className="rounded-pill"
            alt=""
            src={profilePic}
          />
        </div>
        <div className="nameCurrent">{displayName}</div>
      </div>
    );
}
