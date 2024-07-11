// // History.js (frontend)

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const History = () => {
//   const [conversations, setConversations] = useState([]);

//   useEffect(() => {
//     // Fetch conversation history from the server
//     const fetchHistory = async () => {
//       try {
//         const response = await axios.get('/api/chat/history');
//         setConversations(response.data.conversations);
//       } catch (error) {
//         console.error('Error fetching conversation history:', error);
//       }
//     };

//     fetchHistory();
//   }, []);

//   return (
//     <div className='history-container'>
//       <h2>Conversation History</h2>
//       {conversations.map((conversation, index) => (
//         <div key={index} className='conversation'>
//           <div className='user-query'>{conversation.query}</div>
//           <div className='bot-response'>{conversation.response}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default History;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './History.css';

//console.log('history.JS executed');
const History = () => {
  const [conversations, setConversations] = useState([]);
    //console.log('history executed');
  useEffect(() => {
    console.log('useEffect executed');
    // Fetch conversation history from the server
    const fetchHistory = async () => {
      try {
        const api = axios.create({
          baseURL: 'http://localhost:5000', // Assuming your backend API is running on port 5000
        });
        const response = await api.get('/chat/history');
        //console.log('API Response:', response.data); // Check API response
        setConversations(response.data.conversations);
       // console.log('Conversations State:', conversations); // Check conversations state
      } catch (error) {
        console.error('Error fetching conversation history:', error);
      }
    };

    fetchHistory();
  }, []);
  useEffect(() => {
    //console.log('Conversations State:', conversations); // Check conversations state
  }, [conversations]);

  return (
    <div className='history-container'>
      <h2>Conversation History</h2>
      {conversations.map((conversation, index) => (
        <div key={index} className='conversation'>
          <div className='message user'>{`User: ${conversation.query}`}</div>
          <div className='message chatbot'>{`Chatbot: ${conversation.response}`}</div>
        </div>
      ))}
    </div>
  );
};

export default History;
