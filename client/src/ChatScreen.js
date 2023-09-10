import TopBar from './TopBar/TopBar';
import GreenBoxChat from './GreenBoxChat/GreenBoxChat';
import React from 'react';

export default function ChatScreen({currentUser}) {

  return (
    <>
      <TopBar/>
      <GreenBoxChat currentUser={currentUser}/>
    </>
  );
}