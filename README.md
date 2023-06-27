# aerion_test

# Daily Expense booking

Daily Expense Booking is a web application built with Node.js, Vite, and MongoDB. It provides a flexible and scalable platform for developing and deploying web applications that utilize MongoDB as the database.

## Features


- **Create Expense:** Users can create new expenses by providing details such as the expense amount, category, note, quantity and date. The application will store the expense record in the MongoDB database.

- **Get Expense:** Users can retrieve a list of expenses, either all expenses or filtered based on specific criteria such as category, date range, or user. The application will fetch the relevant expenses from the MongoDB database and display them to the user.

- **Update Expense:** Users can update existing expenses by modifying details such as the amount, category, or description. The application will update the corresponding expense record in the MongoDB database with the new information.


## Prerequisites

Make sure you have the following installed:

- Node.js (version 16.17.0 or higher)
- MongoDB (version 3.0.0 or higher)

## Installation for both frontend and backend

1. Clone the repository:

   ```shell
   git clone https://github.com/9996rojit/aerion-test.git
Install the dependencies:

shell
Copy code
cd your-repo/server
npm install
Configuration
Set up the MongoDB connection:

Open the .env.example file and copy its content to .env file and update the DB_URI variable with your MongoDB connection URI.
Additional Configuration Steps (if any)

Add any additional configuration steps or environment variables that need to be set.
Usage
Start the development server:

## For client 

shell
Copy code
cd your-repo/client
npm install
Configuration

shell
  npm run dev
Open your browser and visit http://localhost:5173 to access the application.

Project Structure
The project structure follows the standard structure for Node.js and Vite projects:

- src/ - Contains the source code for the application.
- src/index.ts - Entry point for the Node.js server.
- src/routes/ - Contains the server routes for handling HTTP requests.
- src/controllers/ - Contains the controllers for handling the business logic.
- src/models/ - Contains the MongoDB database model.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please create an issue or submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
List any acknowledgments or credits for libraries, frameworks, or resources used in the project.
Contact
For any inquiries or questions, please contact 9996rojit.
