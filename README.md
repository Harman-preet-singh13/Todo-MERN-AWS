Task Descriptions:

1. User Authentication:
Implemented user authentication using JWT (JSON Web Tokens).
Created a custom React hook (useAuthentication) to manage user authentication state.
Stored JWT tokens in local storage for persistent authentication.

2. Registration and Login:
Developed registration and login pages allowing users to sign up and log in.
Used Axios for making API requests to a backend server.

3. Private Route:
Implemented a private route component to protect routes that require authentication.
Redirected unauthenticated users to the login page.

4.Task Management:
Created a Task model and API routes on the backend for adding tasks and fetching user-specific tasks.
Implemented a frontend TaskForm component to add new tasks.
Developed a frontend TaskList component to display user-specific tasks.

5. Navigation and Routing:
Used react-router-dom for client-side navigation.
Navigated between login, registration, and task-related pages.

6. JWT Token Handling:
Modified the authentication hook to handle token changes and maintain authentication state.
Ensured proper login/logout behavior.
Instructions to Run:
Backend:

Navigate to your backend project directory.
Install dependencies using npm install.
Start the backend server with npm start.
The server should be running on http://localhost:8080.
Frontend:

Navigate to your frontend project directory.
Install dependencies using npm install.
Start the frontend development server with npm start.
Open your browser and visit http://localhost:3000 to interact with the application.
