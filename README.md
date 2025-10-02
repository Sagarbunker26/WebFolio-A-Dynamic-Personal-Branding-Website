# WebFolio - Dynamic Personal Branding Website

A modern, responsive personal portfolio website built with HTML5, CSS3, and JavaScript. Features smooth animations, interactive elements, and a professional design perfect for showcasing your work and skills.

## 🌟 Features

### Core Functionality
- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Scrolling** - Seamless navigation between sections
- **Dynamic Typing Animation** - Auto-rotating professional titles
- **Interactive Portfolio** - Filterable project gallery with modal previews
- **Testimonial Slider** - Client testimonials carousel
- **Contact Form** - Functional contact form (frontend validation)
- **Back-to-Top Button** - Smooth scroll to top functionality
- **CV Download** - Direct PDF download capability

### Sections Included
1. **Hero Section** - Eye-catching introduction with animated text
2. **About Me** - Personal introduction and vision
3. **Skills** - Technical skills with animated progress bars
4. **Portfolio** - Project showcase with filtering and modals
5. **Experience** - Timeline of work experience and education
6. **Testimonials** - Client feedback slider
7. **Contact** - Contact information and form

## 🎨 Design Features

- **Modern UI/UX** - Clean, professional design
- **Gradient Effects** - Beautiful color transitions
- **Hover Animations** - Interactive element responses
- **Progress Bars** - Animated skill level indicators
- **Modal System** - Detailed project view popups
- **Mobile Navigation** - Hamburger menu for mobile devices

## 📁 Project Structure

```
WebFolio – A Dynamic Personal Branding Website/
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── script.js             # JavaScript functionality
├── assets/
│   ├── README.txt            # Image requirements guide
│   ├── favicon.ico           # Website icon
│   ├── hero-bg.jpg           # Hero section background
│   ├── profile-placeholder.jpg    # Profile photo (400x400px)
│   ├── project-placeholder-1.jpg  # Project images (800x600px)
│   ├── project-placeholder-2.jpg
│   ├── project-placeholder-3.jpg
│   ├── project-placeholder-4.jpg
│   ├── project-placeholder-5.jpg
│   ├── project-placeholder-6.jpg
│   ├── testimonial-placeholder-1.jpg  # Client photos (100x100px)
│   ├── testimonial-placeholder-2.jpg
│   ├── testimonial-placeholder-3.jpg
│   └── cv.pdf               # CV file for download
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Local server (optional, for best experience)

### Installation

1. **Download/Clone the project**
   ```bash
   git clone [your-repo-url]
   # or download ZIP and extract
   ```

2. **Navigate to project directory**
   ```bash
   cd "WebFolio – A Dynamic Personal Branding Website"
   ```

3. **Open with a local server** (recommended)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Or open directly**
   - Double-click `index.html` to open in browser
   - Right-click → "Open with" → your preferred browser

## 🔧 Customization Guide

### 1. Personal Information
**⚠️ Note: All current information is PLACEHOLDER/PSEUDO DATA**

Replace the following placeholder content with your actual information:

#### In `index.html`:
- **Name**: Replace "Your Name" in hero section
- **Professional Titles**: Update the typing animation array in `script.js`
- **About Section**: Replace placeholder bio text
- **Contact Information**: Update email, phone, location
- **Social Media Links**: Replace "#" with actual profile URLs
- **Project Information**: Update project titles, descriptions, and links
- **Testimonials**: Replace with real client testimonials
- **Experience & Education**: Update with your actual background

#### In `script.js`:
```javascript
// Update professional titles (line ~38)
const typed = new Typed('.typed-text', {
    strings: ['Your Title 1', 'Your Title 2', 'Your Title 3'],
    // ... other options
});
```

### 2. Images Replacement

Replace all placeholder images in the `assets/` folder:

| File | Purpose | Recommended Size | Current Status |
|------|---------|------------------|----------------|
| `profile-placeholder.jpg` | About section photo | 400x400px | Placeholder |
| `project-placeholder-*.jpg` | Portfolio projects | 800x600px | Placeholder |
| `testimonial-placeholder-*.jpg` | Client photos | 100x100px | Placeholder |
| `hero-bg.jpg` | Hero background | 1920x1080px | Placeholder |
| `favicon.ico` | Browser icon | 32x32px | Placeholder |

### 3. CV/Resume Setup

1. **Create your CV** in PDF format
2. **Name it** `cv.pdf`
3. **Place in** `assets/` folder
4. The download will work automatically

### 4. Color Scheme

Customize colors in `css/style.css`:

```css
:root {
    --primary-color: #4458dc;      /* Main brand color */
    --secondary-color: #854fee;    /* Accent color */
    --text-color: #505050;         /* Body text */
    --heading-color: #232323;      /* Headings */
    --background-color: #ffffff;   /* Background */
    --bg-light: #f8f9fa;          /* Light sections */
}
```

### 5. Content Sections

#### Skills Section:
Update skill items and progress percentages in HTML and initialize in JavaScript.

#### Portfolio Section:
- Add/remove project items
- Update project categories
- Replace project images and descriptions
- Add actual project links

#### Experience Section:
Replace timeline items with your actual work experience and education.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔌 Dependencies

### External Libraries (CDN)
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Poppins)** - Typography
- **Typed.js 2.0.12** - Typing animation

### No Build Process Required
- Pure HTML, CSS, and JavaScript
- No compilation or build tools needed
- Works directly in any modern browser

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Features Checklist

- [] Responsive design
- [] Mobile navigation
- [] Smooth scrolling
- [] Animated elements
- [] Portfolio filtering
- [] Modal popups
- [] Contact form validation
- [] CV download functionality
- [] Back-to-top button
- [] Social media integration
- [] SEO-friendly structure

## 🚨 Important Notes

### Placeholder Content Warning
**⚠️ ALL CURRENT INFORMATION IS PLACEHOLDER/PSEUDO DATA**

This includes:
- Personal details (name, bio, contact info)
- Work experience and education
- Project descriptions and images
- Client testimonials
- Social media links
- Skills and expertise levels

**Before deploying or sharing:**
1. Replace ALL placeholder content with your actual information
2. Update ALL images with your real photos/projects
3. Add your actual CV file
4. Update social media and contact links
5. Customize colors and styling to match your brand

### Image Licensing
- Current images are from placeholder services
- Replace with your own images or properly licensed content
- Ensure you have rights to use all images before publishing

### Privacy & Security
- Update contact information carefully
- Consider using a contact form service for email handling
- Review all links and ensure they point to your actual profiles

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. Some enhancement ideas:

- Add dark/light mode toggle
- Integrate with CMS for easy content updates
- Add blog section
- Implement form backend (Node.js, PHP, etc.)
- Add more animation effects
- Integrate with analytics tools

## 📄 License

This project is open source. Feel free to use it for personal or commercial purposes.

## 📞 Support

If you encounter any issues or need customization help:
1. Check the code comments for guidance
2. Refer to the `assets/README.txt` for image requirements
3. Ensure all placeholder content has been replaced
4. Test on multiple devices and browsers

---

**Remember**: This is a template with PLACEHOLDER DATA. Customize it with your actual information before use!

## 🎯 Quick Start Checklist

- [ ] Replace "Your Name" with actual name
- [ ] Update professional titles in typing animation
- [ ] Replace profile photo
- [ ] Update about section with real bio
- [ ] Add actual project images and descriptions
- [ ] Update skills and progress bars
- [ ] Replace work experience with real data
- [ ] Add real testimonials (with permission)
- [ ] Update contact information
- [ ] Add social media links
- [ ] Upload actual CV file
- [ ] Replace hero background image
- [ ] Update favicon
- [ ] Test all functionality
- [ ] Deploy to web hosting

**Happy coding! 🚀**
