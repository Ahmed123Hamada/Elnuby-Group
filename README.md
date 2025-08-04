# El Nuby Website

A modern, responsive website for El Nuby Engineering Company built with React.js, TypeScript, and Tailwind CSS.

## Features

- 🌐 **Bilingual Support**: Arabic and English with RTL/LTR layout handling
- 🎨 **Modern Design**: Clean, professional design inspired by EGICAT layout
- 📱 **Responsive**: Optimized for all devices and screen sizes
- 🌙 **Dark Mode**: Toggle between light and dark themes
- ⚡ **Fast Performance**: Optimized with modern React practices
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- 🎯 **SEO Optimized**: Proper meta tags and structure
- 📧 **Contact Forms**: Functional contact forms with validation
- 🗺️ **Smooth Navigation**: React Router with scroll-to-section support

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **React i18next** for internationalization
- **Lucide React** for icons
- **Vite** for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd elnuby-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, About, Services, etc.)
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ScrollToTop.tsx   # Scroll to top button
├── pages/
│   ├── Home.tsx          # Home page
│   ├── About.tsx         # About page
│   ├── Projects.tsx      # Projects page
│   └── Contact.tsx       # Contact page
├── context/
│   └── LanguageContext.tsx # Language context for i18n
├── i18n/
│   └── index.ts          # Internationalization configuration
├── App.tsx               # Main App component
└── index.tsx             # Entry point
```

## Features Overview

### 🏠 Home Page
- Hero section with animated content
- About section with company overview
- Services showcase
- Projects gallery
- Contact section

### 📄 About Page
- Company history and timeline
- Mission and vision statements
- Core values
- Team statistics

### 🏗️ Projects Page
- Filterable project gallery
- Project details modal
- Category filtering
- Project statistics

### 📞 Contact Page
- Contact form with validation
- Department contact information
- FAQ section
- Office location

### 🌐 Internationalization
- Arabic and English support
- RTL layout for Arabic
- Language toggle in navigation
- Localized content throughout

### 🎨 Design System
- Custom Tailwind configuration
- Primary color scheme
- Responsive breakpoints
- Dark mode support
- Custom animations

## Customization

### Colors
Update the primary color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... customize as needed
  },
}
```

### Content
- Update translations in `src/i18n/index.ts`
- Modify page content in respective components
- Update contact information in components

### Styling
- Custom CSS classes in `src/index.css`
- Component-specific styles using Tailwind utilities
- Animation configurations in Tailwind config

## Deployment

### Build the project:
```bash
npm run build
```

### Deploy to various platforms:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **Firebase**: Use Firebase Hosting
- **AWS S3**: Upload build files to S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: info@elnuby.com
- Phone: +20 123 456 789

---

Built with ❤️ for El Nuby Engineering Company
