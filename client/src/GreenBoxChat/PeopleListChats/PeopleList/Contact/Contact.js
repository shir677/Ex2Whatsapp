import './Contact.css'

export default function Contact({ contact, handleChatClick, selectedContact, handleContextMenu,   showContextMenu, handleDelete,notRead }) {
  const { user, lastMessage } = contact;
console.log(contact,selectedContact)
  return (
      <button type="button" className="p-2" onClick={() => handleChatClick(contact)} onContextMenu={(event) => handleContextMenu(event, contact.id)} >
        <div className={`${selectedContact?.id === contact.id ? "p-2 current" : "p-2"} ${notRead.includes(contact.id) ? "notRead" : ""}`}>
          {lastMessage &&<div className="dateTime">{lastMessage.created}</div>}
          {user.profilePic && <img
            className="rounded-pill"
            alt="avatar"
            src={user.profilePic}/>}
          {user.displayName && <div className="name"> {user.displayName} </div>}
         {lastMessage && <div className="context">{lastMessage.content} </div>}
        </div>
        {showContextMenu === contact.id &&(
        <ul className="context-menu">
          <li onClick={() => handleDelete(contact.id)}>Delete</li>
        </ul>
      )}
      </button>
  )
}
