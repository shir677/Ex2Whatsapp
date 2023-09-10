# Our WhatsApp Web
### Everything you need is in the server folder, but you must add a config folder inside the server folder, containing an 'env.local' file with the following content:  
CONNECTION="mongodb://127.0.0.1:27017/test"  
PORT="12345"  
CLIENT="http://localhost:3000"  
  
<b>In addition</b>, because we changed the name of the folder in the middle, it did not let us change it, so we need to change the import in the file:  
Ex2Whatsapp-main\server\services\Chat  
from:  
const Message = require('../models/message');  
to:  
const Message = require('../models/Message');  
(Or the folder /models/message to /models/Message)  

  
### Introduction:
This project consists of three React page - registration page, login page, and a chat page. 
The initial display will be of the login page, then if you don't have a user, you should go to the 
registration page. After registering, you will log in and get to the chat page, where you can talk 
with another users.

### Prerequisites:
To view the pages, you will need a web browser such as Chrome, Firefox or Safari.

### Instructions for use:  
1. Download the zip code with the 'server' and 'client' directories, and inside the 'server' directory, add a config directory as described earlier.  
2. Change the 'message' to 'Message' as described eariler.  
3. Use the 'npm start' command, using the terminal, inside the 'server' directory (notice that the 'package.json' file fits to a windows user).  
4. If you are a linux user, you should change the 'start' command to:  
"start": "NODE_ENV=local node app.js",  
5. <b>Install the next, using your terminal from the 'server' folder:  
  'npm install jquery'  
  'npm install moment'  
  'npm install react-icons --save'  
  'npm install @react-icons/all-files --save'  
  'npm install cors'  
  'npm install custom-env'  
  'npm install jsonwebtoken'  
  'npm install body-parser'  
  'npm install socket.io-client'  
   etc..</b>   
6. In the web, go to 'http://localhost:12345'. this is the address of the server.  
7. You should see right now the login page. Have fun!  
  
### Registration page:
The registration page includes a form that allows users to enter their username, nickname, picture, password and password confirmation. The page includes a link to the login page for users who already have an account and also a button to send the form, so one can register and be added to a database.
  
![image](https://github.com/shir677/Ex1b/assets/83518959/7144a163-f33a-4d59-9309-6f87a76b0dde)
  
### Login page:
The login page includes a form for users to enter their name and password. The page includes a link to the registration page for users who need to create a new account and also a button to send the form to the chat screen.
Notice that users who haven't registered, will not be able to get to the chat screen.
  
![image](https://github.com/shir677/Ex1b/assets/83518959/26da3810-7f4c-40e2-9675-e15d10f3ab5b)
  
### Chat screen:
The chat screen displays messages from other users and allows users to send messages to each other. The page includes a chat box where messages are displayed and a box where users can enter their message and send it to the chat box. The page also includes a button for adding contacts.  
  
![image](https://github.com/shir677/Ex1b/assets/83518959/9b557ef5-a4dc-424e-a88d-de1794c388d8)
   
### CSS files:
The CSS files for each page include styling for the page elements such as fonts, colors and layout.

### Summary:
The registration, login and chat pages are designed to provide a simple and friendly interface for users to communicate with each other. There is already functionality for this project, and also this time we have an active server at the moment, so there is an option for the users to talk to each other, using socket.io, so the chats are in 'real-time'. Have fun!  
