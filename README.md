## MERN Chat App mern-chat-app-v9tm.onrender.com

### Overview
This MERN (MongoDB, Express.js, React, Node.js) Chat Application facilitates real-time communication between users in a secure and efficient manner. It utilizes modern technologies such as Socket.io for real-time messaging and Zustand for state management.

### Features
1. **Real-time Communication**: Utilizes Socket.io for instant messaging and seamless interaction between users.
   
2. **Secure Authentication**: Implements JSON Web Tokens (JWT) for secure access to the application, ensuring user data protection.
   
3. **Online Status Indication**: Provides real-time indication of user online status for enhanced communication experience.
   
4. **Efficient State Management**: Uses Zustand for robust and scalable state management across application components.

### Technologies Used
- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time Communication**: Socket.io
- **State Management**: Zustand

### Getting Started
1. Navigate to the project directory:
    ```shell
    cd chat-application
    ```
2. Install dependencies:
    ```shell
    npm install
    ```
3. Start the server:
    ```shell
    npm run dev
    ```
4. Open the application in your browser:
    ```plaintext
    http://localhost:5173
    ```

### Setup .env file
Before running the application, make sure to set up your environment variables in the `.env` file as follows:
```dotenv
PORT=...             # Port number for the server
MONGO_DB_URI=...     # MongoDB connection URI
JWT_SECRET=...       # Secret key for JWT encryption
NODE_ENV=...         # Environment (e.g., development, production)
Build the app
To build the application for production:

shell
Copy code
npm run build
Start the app
