import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ChatPage from "./pages/Chat/ChatPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </>
  );
};

export default App;
