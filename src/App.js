// import './App.css';
// import { Header } from './Mycomponents/Header'
// import { About } from './Mycomponents/About';
// import { Home } from './Mycomponents/Home';
// import { NewChatPage } from './Mycomponents/NewChatPage';
// // import { Footer } from './Mycomponents/Footer';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Header mytitle="Placement Guidance Bot" />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//          <Route exact path="/about" element={<About />} />
//           <Route exact path="/new-chat" element={<NewChatPage />} />
//         {/*<Route exact path="/login" element={<Login />} />
//         <Route exact path="/signup" element={<Signup />} /> */}
//         {/* <Route exact path="/mainpage" element={<Mainpage />} /> */}
//         {/* <Route exact path="/userInfo" element={<UserInfo />} /> */}
//       </Routes>
//       {/* <Footer /> */}
//     </Router>

//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./Mycomponents/Header";
import { About } from "./Mycomponents/About";
import { Home } from "./Mycomponents/Home";
import { Login } from "./Mycomponents/Login";
import Logout from "./Mycomponents/Logout";
import History from "./Mycomponents/History";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [chatLog, setChatLog] = useState([]);

  const clearChatLog = () => {
    setChatLog([]);
  };

  return (
    <Router>
      {isLoggedIn && <Header mytitle="Placement Guidance Bot" />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={<Home chatLog={chatLog} setChatLog={setChatLog} />} />
        <Route path="/about" element={<About />} />
        <Route path="/new-chat" element={<Home chatLog={[]} setChatLog={setChatLog} />} />
        <Route path="/history" element={<History />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
