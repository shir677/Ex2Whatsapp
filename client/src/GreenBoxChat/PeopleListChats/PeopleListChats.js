import './PeopleListChats.css'
import { useState, useEffect, useRef } from 'react';
import { getChats, getUser, getChatMessages, deleteChats } from '../../HandleServer/HandleServer';
import Chat from './Chat/chat'
import Contact from './PeopleList/Contact/Contact';
import TopChatContacts from './PeopleList/TopChatContacts/TopChatContacts'
import { token } from '../../GreenBoxLogin/LoginButton/LoginButton';

import { socket } from '../../socket';

export default function PeopleListChats({ currentUser }) {
  // For the data of my loggined in user
  const [userData, setUserData] = useState(null);
  // When we add contacts to a user
  const [contacts, setContacts] = useState([]);
  // Holds a selcted contact from the contacts list
  const [selectedContact, setSelectedContact] = useState(null);
  // Holds the messages of a contact
  const [chatMessages, setChatMessages] = useState([]);

  const [showContextMenu, setShowContextMenu] = useState(false);

  const [notRead, setNotRead]= useState([]);

  useEffect(()=> {
    if (currentUser !== null ){
      socket.connect();
      socket.on('connect', ()=> {
        console.log("user is connected")
        socket.emit("joinUser",currentUser.username)
      })
    }
      return () => {
        socket.disconnect();
      }
  }, [currentUser])

  useEffect(()=>{
    const handleOnMessage = (message)=> {
      // if the message belongs to the chat you're watchin right now
      console.log("got new message", message)
      if (message.chatId === selectedContact?.id) {
        setChatMessages(prev=> ([...prev, message]));
      }
      setContacts(prevContacts=> {
        const contacts = [...prevContacts];
        const contactIndexToUpdate = contacts.findIndex((cont)=> cont.id === message.chatId);
        if (contactIndexToUpdate !== -1) {
          contacts[contactIndexToUpdate].lastMessage = message;
        }
        return contacts;
      })
    }
      socket.on("message", handleOnMessage)
    
    return () => {
      socket.off('message', handleOnMessage)
    }
  },[selectedContact])

  const handleDelete = async(contactId) => {
    try {
      console.log("hii delete")
      await deleteChats(contactId,token())
      // Perform the delete operation for the given contactId
      console.log('Delete operation triggered for contact:', contactId);
      const filteredContacts = contacts.filter((contact) => contact.id !== contactId);  
      setContacts(filteredContacts)
      setSelectedContact(null)
      setChatMessages([])
    }catch (error) {
      console.error('Failed to delete user chat:', error);
    }
  };

  const handleContextMenu = (event,id) => {
    event.preventDefault();
    event.stopPropagation();
    if (showContextMenu === id) {
      setShowContextMenu(false); // Hide the context menu if it's already shown
    } else {
      setShowContextMenu(id); // Show the context menu if it's not already shown
    }
  };


  // useEffect to fetch user data from the server, while sending
  // to its API the username (its id basically)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await getUser(currentUser.username, token());
        setUserData(res);
      } catch (error) {
        console.error('Failed to get user information:', error);
      }
    };
    fetchUserData();
  }, [currentUser.username]);  

  const handleNewRoom = (newRoom)=>{
    setContacts(prev=> ([newRoom, ...prev ]));
    socket.emit("joinRoom", {roomId: newRoom.id})
  }

  // useEffect to fetch all the chats of a user from the server
  useEffect(() => {
    socket.on("newRoom",handleNewRoom)
    getChats(token()).then((data)=> {
      if (data) {
        data.forEach((chat)=> {
          socket.emit("joinRoom", {roomId:chat.id});
        })
        setContacts(data);
      }
    }).catch((err)=> console.log("Error", err))
  }, []);

  // //for selected chat
  // const [selectedContact, setSelectedContact] = useState(null);

  const updateMessege = async (contactId) => {
    try {
      const messages = await getChatMessages(contactId, token());
      setChatMessages(messages)
    } catch (error) {
      console.error('Failed to fetch chat messages:', error);
    }
  }

  const handleChatClick = async (contact) => {
    setSelectedContact(contact);
    updateMessege(contact.id)
  };

  // Renders the list of contacts
  const contactList = contacts.map((contact, key) => {
    return <Contact contact={contact} key={key} handleChatClick={handleChatClick} selectedContact={selectedContact}  handleContextMenu={handleContextMenu} showContextMenu={showContextMenu} handleDelete={handleDelete} setShowContextMenu={setShowContextMenu} notRead={notRead} />;
  });


  return (
    <div id="peopleListChats">
      <div className="peopleList">
        <TopChatContacts contacts={contacts} setContacts={setContacts}
         userData={userData} />
        <div className="contactList">
          {contactList}
        </div>
      </div>
      <Chat selectedContact={selectedContact} setContacts={setContacts} 
      contacts={contacts} userId={currentUser.username} 
      setChatMessages={setChatMessages} chatMessages={chatMessages}
       onUpdate={updateMessege}
       />
    </div>
  );
}