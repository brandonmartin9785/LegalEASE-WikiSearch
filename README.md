# Legal Ease - Wikipedia Search

This project is a web application that allows users to search for Wikipedia pages and stores the search history in a MySQL database. The application is built using React for the frontend, Node.js for the backend, and MySQL for data storage. All components are containerized using Docker.

## Features

- Search Wikipedia pages using the Wikipedia Open API.
- Store search history in a MySQL database.
- View search results in a user-friendly interface.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Containerization**: Docker

## Prerequisites

- Docker and Docker Compose installed on your machine.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/brandonmartin9785/LegalEASE-WikiSearch.git
cd LegalEASE-WikiSearch
```

### Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```bash
DB_HOST=db
DB_USER=root
DB_PASSWORD=password
DB_NAME=legal_ease
PORT=3001
```

### Running the Application

1. **Build and Run with Docker Compose**

   Navigate to the root directory of the project and run:

   ```bash
   docker-compose up --build
   ```

   This command will build and start the frontend, backend, and database services.

2. **Access the Application**

   Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the frontend.

## Scripts

### Frontend

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.

### Backend

- `node server.js`: Starts the backend server.
