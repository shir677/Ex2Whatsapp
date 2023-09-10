import Messages from './Messages/Messages';
import './chat.css';
import TopChats from './TopChats/TopChats';
import { useState, useEffect } from 'react';
import { addMessage } from '../../../HandleServer/HandleServer';
import { token } from '../../../GreenBoxLogin/LoginButton/LoginButton';
import { socket } from '../../../socket';


export default function Chat({selectedContact,setContacts,contacts,userId,
    setChatMessages, chatMessages, onUpdate}) {
    const [message, setMessage] = useState('');

    const handleSendMessage = async (newMessage) => {
        const updatedContacts = [selectedContact, ...contacts.filter((c) => c !== selectedContact)];

          try {
            const res = await addMessage(newMessage, selectedContact.id, token());
                const created = await res.created;
                const content =  await res.content;
            if (selectedContact.lastMessage && selectedContact.lastMessage.created ){
                selectedContact.lastMessage.created = created
                selectedContact.lastMessage.content =  content.length<30 ?  content  :  content.slice(0,30)+"...";
            }
            else{
                selectedContact.lastMessage = {
                    created: created,
                    content: content
                }
            }

            if (res && selectedContact && selectedContact.user && selectedContact.user.username){
                console.log("going to send to: "+selectedContact.user.username )
                socket.emit("message", {roomId: selectedContact.id, message: res});
            }


          } catch (error) {
            console.error('Failed to send newMessage:', error);
          }
          setContacts(updatedContacts);
          onUpdate(selectedContact.id)
        };
        
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedContact && message.trim() !== '') {
            const newMessage = { msg: message };
            handleSendMessage(newMessage);
            
            setMessage('');
        }
    }

    return (
        <div className="chats">
            <TopChats contact={selectedContact}/>
            <Messages messageList={chatMessages} username={userId} />
            <div className="send-msg">
                <form
                    id="chat"
                    method="get"
                    onSubmit={handleSubmit}
                >
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New message here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" className="btn btn-light custom-btn">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}