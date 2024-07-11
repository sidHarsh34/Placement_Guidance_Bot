// const OpenAI = require("openai");
// const express = require("express");
// const dotenv = require("dotenv");
// const QueAns = require("../models/QueAns");
// const mongoose = require('mongoose');
// import('chatgpt').then(({ ChatGPT }) => {
//   // Now you can use ChatGPT
// }).catch(err => {
//   console.error('Error importing ChatGPT:', err);
// });


// dotenv.config();
// const router = express.Router();


// const openai = new OpenAI({
//   apiKey: "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"
// });


// // const chatGPT = new ChatGPT({
// //   apiKey: 'sk-Wj8wObdmlM0iD8Aq0UoeT3BlbkFJPldkSZVvLKc1vlaCFE4PE',
// //   model: 'gpt-3.5-turbo',
// //   maxTokens: 100,
// //   temperature: 0.7,
// //   stop: ['\n', '<|endoftext|>'],
// // });

// router.post("/chat", async(req, res) => {
//     try{
//       const {prompt} = req.body;
      
//       const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             "role": "assistant",
//             "content": prompt
//               }
//             ],
//             temperature: 1,
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//           });
//           console.log(prompt);
//           console.log("hello");
//           res.send(response.choices[0].message.content);

//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).send("internal server error occured")
//     }

//   //   const { prompt } = req.body;

//   // try {
//   //   // Use ChatGPT to generate a list of possible identifiers
//   //   const response = await chatGPT.complete(prompt, { maxTokens: 50, stop: '\n', temperature: 0.7 });
//   //   const identifiers = response.choices.map(choice => choice.text.trim().toLowerCase());

//   //   // Search for the identifiers in the database
//   //   const data = await QueAns.findOne({ Identifier: { $in: identifiers } });

//   //   if (data) {
//   //     // If a match is found, return the answer from the database
//   //     res.json({ response: data.Answer });
//   //   } else {
//   //     // If not found, use ChatGPT to generate an answer
//   //     const fallbackResponse = await chatGPT.complete(prompt);
//   //     res.json({ response: fallbackResponse.choices[0].text });
//   //   }
//   // } catch (error) {
//   //   console.error(error);
//   //   res.status(500).json({ error: 'An error occurred' });
//   // }

// })

// module.exports = router;

const express = require("express");
const dotenv = require("dotenv");
const OpenAI = require("openai");
const QueAns = require("../models/QueAns");
const ChatHistory = require('../models/ChatHistory');
const { getLoggedInUserId } = require('./login');

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
  apiKey: "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"
});

// Function to get the similarity score between two strings using ChatGPT
async function getSimilarityScore(prompt1, prompt2) {
  try {
    // Use ChatGPT to calculate the similarity score between the two prompts
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: `Sentence 1: ${prompt1}\nSentence 2: ${prompt2}\nDo they have the same meaning? answer in only yes or no\n` }]
    });
    const answer = response.choices[0]?.message?.content?.toLowerCase(); // Use optional chaining to handle undefined values
    console.log(answer);
    if (answer && answer.trim() !== "") {
      return answer.toLowerCase().includes("yes") ? 1 : 0;
    } else {
      console.error("Error: Response from GPT-3.5 is undefined or empty");
      return 0; // Default to indicating no similarity if the response is undefined or empty
    }
  } catch (error) {
    console.error("Error determining meaning similarity:", error);
    return 0; // Default to indicating no similarity in case of error
  }
}

// Function to search for a matching question in the database and get its answer
async function searchQuestionInDatabase(prompt) {
  try {
    // Iterate through each document in the QueAns collection
    const allQuestions = await QueAns.find();
    const userId = getLoggedInUserId();
    // Iterate through each question in the database
    for (const question of allQuestions) {
      // Calculate the similarity score between the current question and the user prompt
      const similarityScore = await getSimilarityScore(question.Identifier, prompt);

      // If the similarity score is 1, consider it a match
      if (similarityScore === 1) {
        const response = question.Answer; // Get the answer from the database
        await ChatHistory.create({ userId, query: prompt, response: response });
        return response; // Return the answer from the database
      }
    }
  } catch (error) {
    console.error("Error searching question in database:", error);
  }

  // If no matching question is found or an error occurs, return null
  return null;
}


// // Route for chat endpoint
// router.post("/chat", async (req, res) => {
//   try {
//     const { prompt } = req.body;

//     // Search for a matching question in the database and get its answer
//     const questionAnswer = await searchQuestionInDatabase(prompt);

//     if (questionAnswer) {
//       // If a matching question is found in the database, return the corresponding answer
//       res.json({ response: questionAnswer });
//     } else {
//       // If not found, use ChatGPT to generate a response
//       const response = await openai.chat.completions.create({
//         model: "gpt-3.5-turbo",
//         messages: [{
//           "role": "assistant",
//           "content": prompt
//         }],
//         temperature: 1,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//       });

//       res.json({ response: response.choices[0].message.content });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal server error occurred" });
//   }
// });


// Route for chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = getLoggedInUserId();
    // Search for a matching question in the database and get its answer
    const questionAnswer = await searchQuestionInDatabase(prompt);

    if (questionAnswer) {
      // If a matching question is found in the database, return the corresponding answer
      res.json({ response: questionAnswer });
    } else {
      // If not found, use ChatGPT to generate a response
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{
          'role': 'assistant',
          'content': prompt,
        }],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      // Save the chat history to the database
      await ChatHistory.create({ userId, query: prompt, response: response.choices[0].message.content });

      res.json({ response: response.choices[0].message.content });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error occurred' });
  }
});

// Endpoint to fetch chat history for the logged-in user


module.exports = router;



