# HBA Pay - React Dashboard

A modern, responsive React dashboard application built with Vite, React Router, and Tailwind CSS. This project is a complete conversion of a static HTML template into a fully functional React application.

## Features

- 🚀 **Modern React Setup** - Built with Vite for fast development and optimized builds
- 🎨 **Responsive Design** - Mobile-first design that works on all devices
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🧭 **React Router** - Client-side routing for seamless navigation
- 📱 **Component-Based** - Modular, reusable React components
- 🎯 **TypeScript Ready** - Easy to migrate to TypeScript if needed

## Project Structure

```
hba-pay-react/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable React components
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   └── Header.jsx        # Top header with search and profile
│   ├── pages/                # Page components
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   ├── SignIn.jsx        # Sign in page
│   │   ├── SignUp.jsx        # Sign up page
│   │   ├── Analytics.jsx     # Analytics page
│   │   ├── Transaction.jsx   # Transaction management
│   │   ├── Users.jsx         # User management
│   │   ├── Messages.jsx      # Messages and notifications
│   │   ├── Settings.jsx      # Account settings
│   │   ├── MyWallet.jsx      # Wallet management
│   │   ├── History.jsx       # Transaction history
│   │   ├── Statistics.jsx    # Statistics and reports
│   │   ├── SupportTicket.jsx # Support tickets
│   │   ├── Integrations.jsx  # Third-party integrations
│   │   ├── Calendar.jsx      # Calendar and scheduling
│   │   ├── ComingSoon.jsx    # Coming soon page
│   │   └── NotFound.jsx      # 404 error page
│   ├── assets/               # Static assets
│   │   ├── css/             # Stylesheets
│   │   ├── js/              # JavaScript files
│   │   ├── images/          # Images and icons
│   │   └── webfonts/        # Font files
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Application entry point
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── index.html               # HTML template
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd hba-pay-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Features Implemented

### 🎨 Design Preservation
- Exact replication of the original HTML template design
- All CSS styles preserved and properly imported
- Responsive layout maintained across all screen sizes
- Dark mode support with theme switching

### 🧭 Navigation
- React Router DOM for client-side routing
- Sidebar navigation with active state indicators
- Mobile-responsive sidebar with overlay
- Keyboard shortcuts (Ctrl+K for search, Ctrl+B for sidebar)

### 🎯 Components
- **Layout**: Main wrapper with sidebar and header
- **Sidebar**: Navigation menu with icons and active states
- **Header**: Search bar, dark mode toggle, notifications, profile
- **Pages**: Individual page components for each route

### 🔧 Functionality
- Dark mode toggle with persistent state
- Search functionality with keyboard shortcuts
- Responsive sidebar with mobile overlay
- All original JavaScript functionality converted to React hooks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

### Asset Management
- All original assets (CSS, JS, images, fonts) have been moved to `src/assets/`
- CSS files are imported in `App.jsx`
- Images are referenced with proper paths for Vite

### State Management
- Uses React hooks (useState, useEffect) for local state
- Dark mode state is managed in the Header component
- Sidebar state is managed in the Layout component

### Styling
- Uses Tailwind CSS classes from the original template
- Custom CSS preserved in `src/assets/css/style.css`
- Dark mode classes properly implemented

## Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Add navigation item to `src/components/Sidebar.jsx`

### Modifying Styles
- Edit `src/assets/css/style.css` for custom styles
- Use Tailwind classes for utility styling
- Dark mode styles use the `dark:` prefix

### Adding Features
- Create new components in `src/components/`
- Use React hooks for state management
- Follow the existing component patterns

## Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## License

This project is for educational and development purposes. Please ensure you have the proper rights to use any assets or designs from the original template.

## Support

For questions or issues, please refer to the React and Vite documentation:
- [React Documentation](https://reactjs.org/docs)
- [Vite Documentation](https://vitejs.dev/guide)
- [React Router Documentation](https://reactrouter.com/)
