import './AddContact.css'
import { BsPersonAdd } from "react-icons/bs";
import { addChat } from '../../../../../HandleServer/HandleServer';
import { token } from '../../../../../GreenBoxLogin/LoginButton/LoginButton';
import { useState } from 'react';
import { socket } from '../../../../../socket';

export default function AddContact({ contacts, setContacts }) {

  const [newContact, setNewContact] = useState({"username":""});

  const handleAddContact = async () => {
    try {
      const res = await addChat(newContact, token());
      console.log("my id is: " + res);
      setContacts(prev=>([...prev, res]));
      socket.emit("joinRoom",{roomId:res.id,contact:res.user.username});
    } catch (error) {
      console.error('Failed to add user chat:', error);
    }
  };

  const handleContactChange = (event) => {
    setNewContact({"username" : event.target.value});
  };

  return (
    <>
      <button
        type="button"
        id='AddClick'
        className="btn btn-outline-seccess"
        data-bs-toggle="modal"
        data-bs-target="#firstModal"
      >
        <BsPersonAdd />
      </button>
      <div
        className="modal fade"
        id="firstModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add new contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder=" Contact's identifier"
                id="contactIdentifier"
                onChange={handleContactChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleAddContact}
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}