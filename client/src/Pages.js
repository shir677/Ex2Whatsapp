import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import App from './App';
import RegScreen from './RegScreen';
import ChatScreen from './ChatScreen';

// Custom PrivateRoute component
export default function Pages() {
  const [currentUser,setcurrentUser]=useState(null)
  return (
    <Router>
    <Routes>
      <Route path="/" element={<App setcurrentUser={setcurrentUser} />} />
      <Route path="/register" element={<RegScreen />} />
      <Route
      path="/ChatScreen"
      element={currentUser? (<ChatScreen currentUser={currentUser}/>
      ):(<Navigate to="/"/>)}
    />
      {/*<Route path="/ChatScreen" element={<ChatScreen />} />*/}
    </Routes>
  </Router>
  );
}
