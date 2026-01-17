# Prophet Femi Abraham Ministries International Website

A modern, responsive website for Prophet Femi Abraham Ministries International built with React, Vite, Tailwind CSS, and React Router.

## 🌟 Features

- **Modern & Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Smooth Animations**: Engaging animations using Tailwind CSS and custom keyframes
- **Multi-Page Navigation**: Home, About, Services, and Ministries pages
- **Professional UI/UX**: Clean, elegant design with spiritual aesthetics
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **SEO Friendly**: Semantic HTML and proper meta tags

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.x or higher)
- npm (comes with Node.js)

## 🚀 Installation & Setup

1. **Extract the project files** to your desired location

2. **Navigate to the project directory**
   ```bash
   cd prophet-femi-abraham-website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   The application will automatically open at `http://localhost:3000`
   If it doesn't, manually navigate to the URL shown in your terminal

## 📁 Project Structure

```
prophet-femi-abraham-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx    # Navigation component
│   │   └── Footer.jsx    # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── About.jsx     # About page
│   │   ├── Services.jsx  # Services page
│   │   └── Ministries.jsx # Ministries page
│   ├── assets/           # Images and other assets
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors
The color scheme uses amber/gold tones for a spiritual feel. To customize:
- Edit `tailwind.config.js` for theme colors
- Modify gradient classes in components

### Content
- Update text content in individual page components (`src/pages/`)
- Replace placeholder images with actual ministry photos
- Modify service times in `Services.jsx`
- Update contact information in `Footer.jsx`

### Fonts
The site uses:
- **Cormorant Garamond** (serif) for headings
- **Montserrat** (sans-serif) for body text

These are loaded from Google Fonts in `index.html`

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

You can deploy this website to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📱 Pages Overview

### Home (/)
- Hero section with call-to-action
- Quick stats
- Service schedule
- Testimonials
- Contact information

### About (/about)
- Prophet's biography
- Ministry timeline
- Core values
- Mission & vision

### Services (/services)
- Weekly service schedule
- Service descriptions
- Special events
- What to expect for first-time visitors

### Ministries (/ministries)
- Overview of all ministry departments
- Impact statistics
- Ministry descriptions with images
- Volunteer application form

## 🎯 Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## 🔧 Troubleshooting

### Port already in use
If port 3000 is already in use, Vite will automatically try the next available port.

### Dependencies not installing
Try removing `node_modules` and `package-lock.json`, then run `npm install` again:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Styles not loading
Ensure Tailwind is properly configured and `npm run dev` is running.

## 📞 Support

For issues or questions about the website:
- Email: info@prophetfemi.org
- Phone: +234 800 123 4567

## 📄 License

This project is proprietary and confidential.
© 2026 Prophet Femi Abraham Ministries International. All rights reserved.

## 🙏 Acknowledgments

Built with faith and purpose to serve the kingdom of God.

---

**May God bless this ministry and all who visit this website!** 🙌
