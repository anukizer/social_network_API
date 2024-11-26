### Social Network API
Description
This project is a backend API for a social network web application. Users can share their thoughts, react to friends' thoughts, and manage a friend list. It uses Express.js for routing, MongoDB as the database, and Mongoose as the ODM.

## Features
# User Management:
- Create, update, delete, and retrieve users.
- Add or remove friends to/from a user's friend list.
# Thought Management:
- Create, update, delete, and retrieve thoughts.
- Add or remove reactions to thoughts.
- Virtual fields for friend and reaction counts.

## Installation
# Clone the repository:
git clone <repository-url>
cd <repository-folder>
# Install dependencies:
npm install
# Start the MongoDB server:
mongod
# Run the application:
npm run dev

## Usage
- Use a tool like Insomnia or Postman to test the API endpoints.
- Endpoints include:
- /api/users for user-related operations.
- /api/thoughts for thought-related operations.