# GlobalInked System - Public Facing Application

This is the public-facing version of the GlobalInked System, an Office of International Affairs (OIA) management system for PUP.

## Features

- Public information pages about OIA
- Templates and Resources section
- MOU/MOA public information
- User registration and login
- Faculty login gateway
- Password recovery functionality

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update `REACT_APP_API_BASE_URL` with your backend API URL

## Running the Application

### Development Mode

```bash
npm start
```

This will start the development server at `http://localhost:3000`

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Available Routes

### Public Routes

- `/` - Home page with OIA information
- `/templates` - Templates and resources
- `/mou-moa` - MOU/MOA public page
- `/faculty-login` - Faculty login gateway

### Authentication Routes

- `/login` - User login
- `/register` - User registration
- `/forgot-password` - Password recovery
- `/resetPass` - Reset password

## Project Structure

```
├── public/              # Static files
│   ├── index.html
│   └── assets/
├── src/                 # Source files
│   ├── index.js        # Entry point
│   ├── App.js          # Main application component
│   ├── App.css         # Global styles
│   └── pages/          # React page components
│       ├── login.jsx       # Login page
│       ├── register.jsx    # Registration page
│       ├── forgetPass.jsx  # Forgot password
│       ├── resetPass.jsx   # Reset password
│       └── public-page/    # Public-facing pages
│           ├── public-page.jsx
│           └── components/ # Public page components
├── package.json        # Dependencies and scripts
├── .env                # Environment variables
└── README.md           # This file
```

## Backend Configuration

This application requires a backend API. The default configuration expects the backend to be running at:

- Development: `http://localhost:8000`

Update the `REACT_APP_API_BASE_URL` in your `.env` file to match your backend URL.

## Notes

- This is a public-facing only version with authentication capabilities
- Protected/admin routes have been removed
- After successful login, users are redirected to the home page
- Registration requires a backend API connection

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Check that the backend API is running and accessible
3. Verify the `.env` file has the correct API URL
4. Clear your browser cache and local storage
5. Check the browser console for any error messages

## License

This project is proprietary to PUP Office of International Affairs.
