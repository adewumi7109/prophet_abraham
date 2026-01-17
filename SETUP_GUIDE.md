# 🚀 Complete Setup Guide

## Step-by-Step Installation Instructions

### 1. Prerequisites Check

Before starting, verify you have Node.js installed:

```bash
node --version
npm --version
```

You should see version numbers (e.g., v18.x.x or higher). If not installed:
- Download from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Install and restart your terminal

### 2. Extract Project Files

Extract the downloaded zip file to your desired location (e.g., Desktop, Documents, or development folder)

### 3. Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- OR right-click in the project folder and select "Open in Terminal"

**Mac/Linux:**
- Open Terminal application
- Navigate to project folder using `cd` command

### 4. Navigate to Project Directory

```bash
cd path/to/prophet-femi-abraham-website
```

Example:
```bash
cd Desktop/prophet-femi-abraham-website
```

### 5. Install Dependencies

This command downloads all required packages:

```bash
npm install
```

**⏱️ This may take 2-5 minutes depending on your internet speed**

You should see a progress bar and messages like "added X packages"

### 6. Start Development Server

```bash
npm run dev
```

You should see output like:
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

### 7. View the Website

The website should automatically open in your default browser. If not:
- Open your browser manually
- Go to: `http://localhost:3000`

**🎉 Success!** You should now see the Prophet Femi Abraham website running locally.

## 🔍 Troubleshooting Common Issues

### Issue: "npm: command not found"
**Solution:** Node.js is not installed or not in PATH
- Install Node.js from nodejs.org
- Restart terminal after installation
- Try again

### Issue: "Port 3000 is already in use"
**Solution:** 
- Vite will automatically use port 3001, 3002, etc.
- OR stop the other application using port 3000
- OR manually specify a different port:
  ```bash
  npm run dev -- --port 3001
  ```

### Issue: Dependencies fail to install
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete existing files
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: "Cannot find module..."
**Solution:** Make sure you're in the correct directory and ran `npm install`

### Issue: Blank white screen
**Solution:**
- Check browser console for errors (F12)
- Ensure dev server is still running in terminal
- Try refreshing the page (Ctrl+R or Cmd+R)

## 📝 Making Changes

### Editing Content

1. Open project in your code editor (VS Code recommended)
2. Navigate to the file you want to edit
3. Make your changes
4. Save the file
5. The browser will automatically refresh (hot reload)

### Common Files to Edit

**Contact Information:**
- `src/components/Footer.jsx` - Footer contact details
- `src/pages/Home.jsx` - Home page contact section

**Service Times:**
- `src/pages/Services.jsx` - Service schedule

**About Content:**
- `src/pages/About.jsx` - Biography, timeline, values

**Images:**
- Replace image URLs in component files
- Use your own hosted images or local files

## 🌐 Preparing for Production

### Build the Website

```bash
npm run build
```

This creates optimized files in the `dist/` folder ready for deployment.

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deploying.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Create account at vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts
5. Your site will be live at a vercel.app URL

### Option 2: Netlify (Free)

1. Create account at netlify.com
2. Drag and drop the `dist` folder to Netlify dashboard
3. OR use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Option 3: Traditional Web Hosting

1. Run `npm run build`
2. Upload contents of `dist/` folder to your web host
3. Configure your domain to point to the uploaded files

## 📧 Getting Help

If you encounter issues not covered here:

1. Check the error message in terminal
2. Search for the error online
3. Contact your web developer
4. Email: support@prophetfemi.org (if technical support is available)

## 🎓 Learning Resources

Want to customize further?

- **React:** https://react.dev/learn
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Vite:** https://vitejs.dev/guide/

## ✅ Quick Reference Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for code issues
npm run lint
```

## 🔐 Best Practices

1. **Version Control:** Consider using Git to track changes
2. **Backups:** Keep backups of your customizations
3. **Testing:** Test all changes in development before deploying
4. **Security:** Never commit sensitive information (passwords, API keys)
5. **Updates:** Periodically update dependencies for security

---

**Need more help?** Don't hesitate to reach out to your web developer or technical support team.

**God bless your ministry!** 🙏
