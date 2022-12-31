# Cesar's Backend for a Chat Messenger

## Description
<br />
A simplified messenger API that would enable a web app to build a simple
messaging application. Specifically, the API's created would enable two users to send messages back and forth.
 
<br />

## Process

Working within the allotted 2-4 hours given to create the APIs meant that I had to decide what I could include or not. I decided to start with creating User and Message APIs since the main objective was to create an app that lets two users send messages back and forth. To do this, I used the MVC (Model-View-Controller) paradigm. I used Mongoose since it gives the ability for mongodb object modeling using node.js. Express.js was the back end web application framework used. 

To test the routes I used Insomnia. Found here: https://insomnia.rest/

Below are the kinds of API routes created and how I called it to test within Insomnia. 

<br />

The USER routes include:

1. GET all Users localhost:3001/users

2. GET User By id localhost:3001/users/User Id

3. DELETE User localhost:3001/users/User Id

4. CREATE User localhost:3001/users

<br />

The Message Routes Include:

1. GET all Messages localhost:3001/messages
2. GET Message by Id localhost:3001/messages/Message Id
3. DELETE Message localhost:3001/messages/Message Id
4. CREATE Message localhost:3001/messages/Message Id

<br />

After creating the User and Message routes,  I still had time left to create so I decided to create APIs that could hold and create conversations. My thinking here was that this was the base layer requirement needed for the front end utilization. 

<br />

The Conversation Routes include:

1. GET Conversation by User Id localhost:3001/conversations/User Id
2. Create Conversation by User Id localhost:3001/conversations/User Id

I got stuck here and was not able to create additional Delete and Get All routes for conversations. Currently, the create conversation API is working and I can see that a conversation was created with a unique Id. However, the conversation created does not include the users in it. Additionally, the Get Conversation by Id route only returns an empty Array.  With more time I would continue to work on these to fix them and also create a Delete and Get All conversation routes. I would also then work on some of the other requirements listed such as limiting messages from the last 30 days only and the last 100 messages sent. I would also work on the User Model. Right now it only includes a username. I would like to add  First Name, Last Name, Email , and Password at the very least. 

<br />

Screenshots of the above routes tested within Insomnia are included within the “Examples” folder. 



<br />

## Installation

1. Clone the Repository on to your machine.
2. Open the terminal and ensure you are in the right file path (the server directory).
3. Run the command ```npm install``` to download the packages.
4. Run command ```npm start``` to run node server.js and run the server. 