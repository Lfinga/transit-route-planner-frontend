# Transit Route Planner Frontend

## Connecting to Backend

This frontend application is designed to work with the Transit Route Planner Backend. Make sure the backend server is running and the `VITE_API_URL` environment variable is correctly set to the backend's URL as shown below.

## Prerequisites

- Node.js (v18 or higher)

## Dependencies

To install all required dependencies:
```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=http://localhost:3000 # Backend API URL
```

## Running the Application

Development mode with hot reload:
```bash
npm run dev
```

