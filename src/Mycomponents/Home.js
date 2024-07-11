// import React, { useState } from 'react';
// import axios from 'axios';
// import './Home.css';
// export const Home = () => {
//     const [userInput, setUserInput] = useState('');
//     const [chatLog, setChatLog] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (userInput.trim() === '') return;

//         // Add user question to chat log
//         const updatedChatLog = [
//             ...chatLog,
//             { sender: 'You', message: userInput }
//         ];
//         setChatLog(updatedChatLog);
//         // Clear input field after submitting the question
//         setUserInput('');

//         try {
//             // Send user question to server using Axios
//             const response = await axios.post('http://localhost:5000/chat', { prompt: userInput });
//             const data = response.data;

//             // Add bot response to chat log
//             const updatedChatLogWithResponse = [
//                 ...updatedChatLog,
//                 { sender: 'Chatbot', message: data.response }
//             ];
//             setChatLog(updatedChatLogWithResponse);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container main-content">
//             <div className="row">
//                 <div className="col-8">
//                     <h3>Ask anything related to Placement</h3>
//                     <div className="chat-log">
//                         {chatLog.map((entry, index) => (
//                             <div key={index} className={`message ${entry.sender.toLowerCase()}`}>
//                                 <strong>{entry.sender}:</strong> {entry.message}
//                             </div>
//                         ))}
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             value={userInput}
//                             onChange={(e) => setUserInput(e.target.value)}
//                             placeholder="Type your question here..."
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };



// Home.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, Route, Switch } from 'react-router-dom';
// import NewChatPage from './NewChatPage';
// import './Home.css';

// export const Home = () => {
//     const [userInput, setUserInput] = useState('');
//     const [chatLog, setChatLog] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (userInput.trim() === '') return;

//         // Add user question to chat log
//         const updatedChatLog = [
//             ...chatLog,
//             { sender: 'You', message: userInput }
//         ];
//         setChatLog(updatedChatLog);
//         // Clear input field after submitting the question
//         setUserInput('');

//         try {
//             // Send user question to server using Axios
//             const response = await axios.post('http://localhost:5000/chat', { prompt: userInput });
//             const data = response.data;

//             // Add bot response to chat log
//             const updatedChatLogWithResponse = [
//                 ...updatedChatLog,
//                 { sender: 'Chatbot', message: data.response }
//             ];
//             setChatLog(updatedChatLogWithResponse);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className="container main-content">
//             <div className="row">
//                 <div className="col-8">
//                     <h3>Ask anything related to Placement</h3>
//                     <div className="chat-log">
//                         {chatLog.map((entry, index) => (
//                             <div key={index} className={`message ${entry.sender.toLowerCase()}`}>
//                                 <strong>{entry.sender}:</strong> {entry.message}
//                             </div>
//                         ))}
//                     </div>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             value={userInput}
//                             onChange={(e) => setUserInput(e.target.value)}
//                             placeholder="Type your question here..."
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//                 <div className="col-4">
//                     <Link to="/new-chat">New Chat</Link>
//                 </div>
//             </div>
//         </div>
//     );
// };





import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import { ReactComponent as SendIcon } from './send.svg';

export const Home = () => {
    const [userInput, setUserInput] = useState('');
    const [chatLog, setChatLog] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userInput.trim() === '') return;

        const updatedChatLog = [...chatLog, { sender: 'You', message: userInput }];
        setChatLog(updatedChatLog);
        setUserInput('');

        try {
            const response = await axios.post('http://localhost:5000/chat', { prompt: userInput });
            const data = response.data;

            const updatedChatLogWithResponse = [...updatedChatLog, { sender: 'Chatbot', message: data.response }];
            setChatLog(updatedChatLogWithResponse);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const clearChatLog = () => {
        setChatLog([]);
    };

    return (
        <div className="container main-content">
            <div className="row">
                <div className="col-8">
                    <h3>Ask anything related to Placement</h3>
                    <div className="chat-log">
                        {chatLog.map((entry, index) => (
                            <div key={index} className={`message ${entry.sender.toLowerCase()}`}>
                                <strong>{entry.sender}:</strong> {entry.message}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            placeholder="Type your question here..."
                        />
                        <button type="submit"><SendIcon/></button>
                    </form>
                </div>
                <div className="col-4">
                    <Link to="#" className="new-chat-link" onClick={clearChatLog}><i className="bi bi-chat-dots"></i> New Chat</Link>
                </div>
            </div>
        </div>
    );
};
