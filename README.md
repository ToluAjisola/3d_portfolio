# 🌴 3D Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r152-000000?style=flat-square&logo=three.js)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/React_Three_Fiber-8.15.0-000000?style=flat-square)](https://docs.pmnd.rs/react-three-fiber)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> ✨ Build an immersive 3D portfolio that stands out! Featuring a floating island, interactive elements, and a responsive 3D experience.

![3D Portfolio Preview](https://via.placeholder.com/1200x600/1a1a2e/ffffff?text=3D+Portfolio+Preview)


---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [💻 Development](#-development)
- [📦 Building for Production](#-building-for-production)
- [🌐 Deployment](#-deployment)
- [🎨 Customization Guide](#-customization-guide)
- [📧 Email Integration](#-email-integration)
- [🎵 Audio Configuration](#-audio-configuration)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

Have you ever looked at jaw-dropping 3D websites and thought "I wish I could build that"? Well, today's your lucky day! This project transforms a simple portfolio into an immersive 3D experience featuring:

- 🏝️ **Floating Island** - A magical 3D island with interactive elements
- ✈️ **Flying Plane** - Animated plane that follows your rotation
- 🐦 **Magical Bird** - A bird that flies around the island
- 🦊 **Interactive Fox** - 3D fox that reacts to user interactions
- 🎵 **Immersive Audio** - Ambient music with toggle controls
- 📧 **Email Integration** - Fully functional contact form with EmailJS

This isn't just a project—it's a career asset designed to showcase everything you're capable of and make you an attractive candidate for any job.

---

## ✨ Features

### 🎮 Interactive 3D Experience
- **Drag to Rotate** - Click and drag to explore the island from any angle
- **Keyboard Navigation** - Use arrow keys to smoothly rotate the view
- **Smooth Animations** - Damping physics for natural rotation feel

### 🏝️ 3D Scene Elements
- **Floating Island** - Main centerpiece with interactive zones
- **Animated Bird** - Flies around the island with realistic movement
- **Spinning Plane** - Propeller rotates as you explore
- **Dynamic Sky** - Rotating sky background for immersion

### 📄 Portfolio Sections
- **Home** - Interactive 3D experience with floating popups
- **About** - Skills showcase with animated tech icons
- **Projects** - Featured projects with live links
- **Contact** - Functional form with 3D fox companion

### 🦊 Interactive Fox (Contact Page)
- **Idle Animation** - Fox wags tail when not interacting
- **Walking** - Starts walking when you focus on an input
- **Running** - Runs when you submit the form
- **Responsive** - Reacts to all user interactions

### 📱 Responsive Design
- **Mobile Optimized** - Scales perfectly on all devices
- **Touch Support** - Full touch interaction for mobile users
- **Adaptive Layouts** - Content adjusts to screen size

### 🎨 UI/UX Features
- **Neo-Brutalism Design** - Modern, bold design language
- **Smooth Transitions** - Elegant animations between sections
- **Loading States** - Beautiful loading spinner for 3D models
- **Toast Notifications** - Success/error feedback for form submission

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & development server |
| **Tailwind CSS** | Utility-first styling |
| **React Router DOM** | Client-side routing |

### 3D Rendering
| Technology | Purpose |
|------------|---------|
| **Three.js** | 3D graphics library |
| **React Three Fiber** | React renderer for Three.js |
| **React Three Drei** | Helpers & utilities for React Three Fiber |
| **React Spring** | Animation library for 3D elements |

### Additional Libraries
| Technology | Purpose |
|------------|---------|
| **EmailJS** | Email functionality |
| **React Vertical Timeline** | Work experience timeline |
| **GLTFJSX** | 3D model to React component converter |

---

## 📁 Project Structure

```
3D-portfolio/
├── public/
│   └── assets/
│       └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── 3d/
│   │   │   ├── island.glb
│   │   │   ├── bird.glb
│   │   │   ├── plane.glb
│   │   │   ├── sky.glb
│   │   │   └── fox.glb
│   │   ├── icons/
│   │   │   ├── arrow.svg
│   │   │   ├── sound-on.svg
│   │   │   └── sound-off.svg
│   │   └── sakura.mp3
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Loader.jsx
│   │   ├── Alert.jsx
│   │   ├── CTA.jsx
│   │   └── HomeInfo.jsx
│   ├── models/
│   │   ├── Island.jsx
│   │   ├── Bird.jsx
│   │   ├── Plane.jsx
│   │   ├── Sky.jsx
│   │   └── Fox.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── index.js
│   ├── hooks/
│   │   └── useAlert.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.local
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)
- **Git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/3D-portfolio.git
cd 3D-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**
```bash
npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 💻 Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

### Adding New 3D Models

1. Download `.glb` files from [Sketchfab](https://sketchfab.com)
2. Convert to JSX using [GLTFJSX](https://gltf.pmnd.rs/)
3. Place in `src/assets/3d/`
4. Create new model component in `src/models/`
5. Import and use in your pages

### Customizing Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'blue': {
    500: '#6C63FF',
    // Add more custom colors
  }
}
```

### Adding New Pages

1. Create new `.jsx` file in `src/pages/`
2. Export the component
3. Add route in `src/App.jsx`
4. Add navigation link in `src/components/Navbar.jsx`

---

## 📦 Building for Production

```bash
npm run build
```

This creates a `dist` folder with optimized assets:
- Minified JS and CSS
- Optimized images and 3D models
- Tree-shaken dependencies

---

## 🌐 Deployment

### Deploy to Hostinger

1. **Build the project**
```bash
npm run build
```

2. **Access Hostinger File Manager**
   - Log into your Hostinger account
   - Go to File Manager
   - Navigate to `public_html`

3. **Upload build files**
   - Delete existing files
   - Upload all files from `dist/` folder

4. **Verify deployment**
   - Visit your domain
   - Check SSL certificate (auto-enabled)
   - Test all features

### Deploy to Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 🎨 Customization Guide

### 📝 Personal Information

Edit `src/constants/index.js`:

```javascript
export const skills = [
  { name: 'React', imageURL: '/assets/icons/react.svg' },
  // Add or remove skills
];

export const experiences = [
  {
    title: 'React Developer',
    companyName: 'Your Company',
    date: '2023 - Present',
    points: ['Built amazing apps', 'Optimized performance'],
    icon: '/assets/icons/company.svg',
    iconBG: '#6366f1',
  },
  // Add your experiences
];

export const projects = [
  {
    name: 'Your Project',
    description: 'Project description',
    icon: '/assets/icons/project.svg',
    link: 'https://your-project.com',
    theme: 'blue',
  },
  // Add your projects
];
```

### 🎵 Changing the Audio

1. Add your MP3 file to `src/assets/`
2. Update import in `src/pages/Home.jsx`:
```javascript
import backgroundMusic from '../assets/your-music.mp3';
```

### 🦊 Fox Animation States

Available animations in `src/models/Fox.jsx`:
- `idle` - Standing/wagging tail
- `walk` - Walking animation
- `hit` - Running animation

### 🏝️ Island Positioning

Adjust in `src/pages/Home.jsx`:
```javascript
const adjustIslandForScreenSize = () => {
  // Modify these values
  const screenScale = [1, 1, 1];
  const screenPosition = [0, -6.5, -43];
  return [screenScale, screenPosition];
};
```

---

## 📧 Email Integration

### Setting Up EmailJS

1. **Create an account at [EmailJS](https://www.emailjs.com/)**

2. **Add a new service**
   - Go to Dashboard → Add New Service
   - Select your email provider (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Create an email template**
   ```html
   <h2>Hello {{to_name}},</h2>
   <p>{{from_name}} sent you a message:</p>
   <p>{{message}}</p>
   <p>Reply to: {{from_email}}</p>
   ```

4. **Get your credentials**
   - Service ID: From service settings
   - Template ID: From template settings
   - Public Key: From Account → API Keys

5. **Add to `.env.local`**
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxx
   VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxx
   VITE_APP_EMAILJS_PUBLIC_KEY=user_xxxxxx
   ```

---

## 🎵 Audio Configuration

### Adding Audio Controls

The audio feature in `src/pages/Home.jsx` includes:

```javascript
const audioRef = useRef(new Audio(sakura));
audioRef.current.volume = 0.4;
audioRef.current.loop = true;

// Toggle function
const toggleMusic = () => {
  setIsPlayingMusic(!isPlayingMusic);
};
```

### Customizing Audio

- **Volume**: Modify `0.4` value (0.0 to 1.0)
- **Loop**: Set `true` or `false`
- **Source**: Replace `sakura` with your audio file

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch**
```bash
git checkout -b feature/AmazingFeature
```
3. **Commit your changes**
```bash
git commit -m 'Add some AmazingFeature'
```
4. **Push to the branch**
```bash
git push origin feature/AmazingFeature
```
5. **Open a Pull Request**

### Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes across devices
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Inspiration
- [Joshua's World](https://joshuaworld.com/) - 3D portfolio inspiration
- [Bruno Simon](https://bruno-simon.com/) - 3JS Journey inspiration

### Resources
- [Sketchfab](https://sketchfab.com/) - 3D models
- [GLTFJSX](https://gltf.pmnd.rs/) - Model converter
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - 3D rendering






## 📸 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Homepage)

### About Section
![About](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=About+Section)

### Projects
![Projects](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Projects)

### Contact Page
![Contact](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Contact+Page)

---

## 🔮 Roadmap

- [ ] Add dark/light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Blog/Articles section
- [ ] Analytics integration
- [ ] More interactive 3D elements
- [ ] Performance optimizations
- [ ] PWA support
- [ ] SEO improvements

---

## 📚 Additional Resources

### Learn More
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)


# Netlify Deployed Portfolio
Made with Reactjs, HTML, CSS and JavaScript

Deployed on Netlify: https://toluwalopeajisola.netlify.app

## Assets from sketchfab.com
[Fox's Island by nimzu](https://skfb.ly/6XpAQ)

[phoenix bird by NORBERTO-3D](https://skfb.ly/6vLBp).

[Sky Pano - Milkyway by MozillaHubs](https://skfb.ly/6BZ67).

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
