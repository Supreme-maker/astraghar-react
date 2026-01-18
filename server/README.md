# AstraGhar Server

Node.js/Express backend server for AstraGhar.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the server directory with:
```
MONGO_URI=mongodb://localhost:27017/astraghar
PORT=5000
JWT_SECRET=your-secret-key-change-this-in-production
```

3. Make sure MongoDB is running on your system.

4. Start the server:
```bash
npm run dev
```

The server will run on http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Health Check
- `GET /api/health` - Server health check

