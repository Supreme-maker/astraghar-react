# AstraGhar - React Client

A modern React application for an online weapon shop, built with React, Tailwind CSS, Axios, and Lucide React icons.

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚛️ React Router for navigation
- 🔐 Authentication (Login/Signup)
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🎯 Lucide React icons
- 🌐 Axios for API calls

## Tech Stack

- **React** ^18.3.1
- **React Router DOM** ^6.26.0
- **Tailwind CSS** ^3.4.14
- **Axios** ^1.7.2
- **Lucide React** ^0.400.0
- **Vite** ^5.3.1

## Project Structure

```
client/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── utils/          # Utility functions
│   │   └── axiosConfig.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## API Integration

The app uses Axios for API calls. Configure the base URL in `src/utils/axiosConfig.js` or via environment variables.

### Authentication
- Login: `POST /auth/login`
- Signup: `POST /auth/signup`

### Cart
- Add to Cart: `POST /cart/add`

## Styling

The project uses Tailwind CSS with custom configurations:
- Custom colors matching the original design (red theme)
- Custom animations (fadeIn, float, slideIn)
- Responsive design utilities

## Icons

Icons are provided by Lucide React. Import icons as needed:
```jsx
import { Home, ShoppingBag } from 'lucide-react';
```

## Notes

- Images are served from the `public/images` folder
- Authentication tokens are stored in localStorage
- The app follows the original HTML/CSS design while using modern React patterns
