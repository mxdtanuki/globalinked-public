# Quick Start Guide

## First Time Setup

1. Make sure Node.js is installed on your system
2. Open terminal in this folder
3. Run: `npm install`
4. Wait for dependencies to install

## Running the Application

### Start Development Server

```bash
npm start
```

The application will open at: http://localhost:3000

### Build for Production

```bash
npm run build
```

## Available Pages

Once running, you can access:

- **Home Page**: http://localhost:3000/
- **Templates**: http://localhost:3000/templates
- **MOU/MOA Info**: http://localhost:3000/mou-moa
- **Faculty Login**: http://localhost:3000/faculty-login
- **Login**: http://localhost:3000/login
- **Register**: http://localhost:3000/register
- **Forgot Password**: http://localhost:3000/forgot-password

## Configuration

- Backend API URL is configured in `.env` file
- Default: `http://localhost:8000`
- Change this to match your backend server

## Troubleshooting

**If the app doesn't start:**

1. Delete `node_modules` folder
2. Run `npm install` again
3. Try `npm start`

**If you see errors:**

- Check that all files are present
- Make sure backend API is running (if using login/register)
- Clear browser cache and try again

**Port already in use:**

- The app will ask to use a different port
- Press 'Y' to accept

## Notes

- This version only includes public-facing pages and authentication
- Login redirects to home page (not admin dashboard)
- All protected routes have been removed
