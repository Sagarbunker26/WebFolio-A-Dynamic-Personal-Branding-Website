/**
 * WebFolio - Personal Portfolio Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Typed.js initialization
    initTypedText();
    
    // Mobile Navigation
    initMobileNav();
    
    // Progress Bars Animation
    initProgressBars();
    
    // Portfolio Filtering
    initPortfolioFilter();
    
    // Portfolio Modal
    initPortfolioModal();
    
    // Testimonial Slider
    initTestimonialSlider();
    
    // Form Submission
    initContactForm();
    
    // CV Download functionality
    initCVDownload();
    
    // Back to Top Button
    initBackToTop();
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        toggleHeaderShadow();
        highlightActiveNavLink();
        toggleBackToTopButton();
    });
});

/**
 * Initialize Typed.js for dynamic text animation
 */
function initTypedText() {
    // Add professional titles relevant to your expertise
    const typed = new Typed('.typed-text', {
        strings: ['Web Developer', 'UX Designer', 'Freelancer', 'Digital Creator'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        startDelay: 1000,
        loop: true
    });
}

/**
 * Initialize mobile navigation toggle
 */
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a nav link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

/**
 * Handle skill progress bars animation
 */
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (progressBars.length) {
        // Create an intersection observer to animate progress bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const percent = progressBar.getAttribute('data-percent') + '%';
                    
                    // Delay animation for better visual effect
                    setTimeout(() => {
                        progressBar.style.width = percent;
                    }, 200);
                    
                    // Stop observing once animation is triggered
                    observer.unobserve(progressBar);
                }
            });
        }, { threshold: 0.2 });
        
        // Observe all progress bars
        progressBars.forEach(bar => observer.observe(bar));
    }
}

/**
 * Initialize portfolio filtering functionality
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    // If 'all' is selected or item category matches filter value, show the item
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        
                        // Add a small delay for smooth animation
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 200);
                    } else {
                        // Hide items that don't match
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        
                        // Complete hide after animation
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

/**
 * Initialize portfolio project modal
 */
function initPortfolioModal() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const modal = document.getElementById('portfolio-modal');
    const modalContentContainer = document.getElementById('modal-content-container');
    const modalClose = document.querySelector('.modal-close');
    
    if (portfolioLinks.length && modal && modalContentContainer && modalClose) {
        // Open modal with project details
        portfolioLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const projectId = this.getAttribute('data-project');
                modalContentContainer.innerHTML = getProjectContent(projectId);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            });
        });
        
        // Close modal
        modalClose.addEventListener('click', closeModal);
        
        // Close modal if clicking outside content area
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    function getProjectContent(projectId) {
        // Project data - replace with your actual projects
        const projects = {
            'project1': {
                title: 'E-commerce Website',
                category: 'Web Development',
                client: 'Fashion Retailer',
                date: 'January 2025',
                image: 'assets/E-commerce Website.png',
                description: 'A fully responsive e-commerce website built with modern web technologies. Features include product filtering, user accounts, shopping cart functionality, and secure payment processing.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
                link: '#'
            },
            'project2': {
                title: 'Fitness App',
                category: 'App Development',
                client: 'Wellness Studio',
                date: 'March 2025',
                image: 'assets/Fitness App.png',
                description: 'A mobile-first fitness application that allows users to track workouts, set goals, and monitor progress. Includes features like workout plans, nutrition tracking, and social sharing.',
                technologies: ['React Native', 'Firebase', 'CSS', 'Redux'],
                link: '#'
            },
            'project3': {
                title: 'Brand Identity',
                category: 'Design',
                client: 'Startup Company',
                date: 'February 2025',
                image: 'assets/Brand Identity.png',
                description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines. Created a cohesive visual language that reflects the company\'s values and mission.',
                technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
                link: '#'
            },
            'project4': {
                title: 'Portfolio Website',
                category: 'Web Development',
                client: 'Photographer',
                date: 'April 2025',
                image: 'assets/Portfolio Website.png',
                description: 'A clean and modern portfolio website showcasing photography work with gallery features, client testimonials, and contact form. Optimized for fast loading and excellent user experience.',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
                link: '#'
            },
            'project5': {
                title: 'Weather App',
                category: 'App Development',
                client: 'Personal Project',
                date: 'May 2025',
                image: 'assets/Weather App.png',
                description: 'A weather application providing real-time forecasts, hourly updates, and weather alerts. Features include location-based weather data, interactive maps, and customizable notifications.',
                technologies: ['JavaScript', 'API Integration', 'CSS3', 'HTML5'],
                link: '#'
            },
            'project6': {
                title: 'UI/UX Design',
                category: 'Design',
                client: 'Tech Company',
                date: 'June 2025',
                image: 'assets/UIUX Design.png',
                description: 'User interface and experience design for a SaaS platform. Created wireframes, prototypes, and final designs focusing on usability, accessibility, and visual appeal.',
                technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
                link: '#'
            }
        };
        
        // Get project data or default if not found
        const project = projects[projectId] || {
            title: 'Project Not Found',
            category: 'Unknown',
            client: 'Unknown',
            date: 'Unknown',
            image: 'assets/project-placeholder-1.jpg',
            description: 'Project details not available.',
            technologies: [],
            link: '#'
        };
        
        // Create project detail HTML
        return `
            <div class="modal-project">
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <div class="underline"></div>
                </div>
                
                <div class="modal-body">
                    <div class="modal-img">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    
                    <div class="project-details">
                        <div class="project-info">
                            <h3>Project Info</h3>
                            <ul>
                                <li><strong>Category:</strong> ${project.category}</li>
                                <li><strong>Client:</strong> ${project.client}</li>
                                <li><strong>Date:</strong> ${project.date}</li>
                            </ul>
                        </div>
                        
                        <div class="project-description">
                            <h3>Description</h3>
                            <p>${project.description}</p>
                        </div>
                        
                        <div class="project-tech">
                            <h3>Technologies</h3>
                            <div class="tech-tags">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <a href="${project.link}" class="btn btn-primary" target="_blank">Visit Project <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        `;
    }
}

/**
 * Initialize testimonial slider
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (testimonials.length && dots.length && prevBtn && nextBtn) {
        let currentIndex = 0;
        const maxIndex = testimonials.length - 1;
        
        // Show testimonial based on index
        function showTestimonial(index) {
            // Hide all testimonials
            testimonials.forEach(item => {
                item.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show active testimonial and dot
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Update current index
            currentIndex = index;
        }
        
        // Next testimonial
        function nextTestimonial() {
            let newIndex = currentIndex + 1;
            if (newIndex > maxIndex) newIndex = 0;
            showTestimonial(newIndex);
        }
        
        // Previous testimonial
        function prevTestimonial() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = maxIndex;
            showTestimonial(newIndex);
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextTestimonial);
        prevBtn.addEventListener('click', prevTestimonial);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
        });
        
        // Auto slide (optional)
        let slideInterval = setInterval(nextTestimonial, 5000);
        
        // Pause auto slide on hover
        const testimonialSlider = document.querySelector('.testimonial-slider');
        if (testimonialSlider) {
            testimonialSlider.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            testimonialSlider.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextTestimonial, 5000);
            });
        }
    }
}

/**
 * Initialize contact form submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (validateForm(formData)) {
                // Here you would normally send the form data to a server
                // For demo purposes, we'll just show a success message
                
                // Show success message (you can customize this)
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            }
        });
    }
    
    function validateForm(data) {
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Please fill in all fields');
            return false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        return true;
    }
}

/**
 * Toggle header shadow on scroll
 */
function toggleHeaderShadow() {
    const header = document.getElementById('header');
    
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = '#ffffff';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = '#ffffff';
        }
    }
}

/**
 * Highlight active navigation link based on scroll position
 */
function highlightActiveNavLink() {
    // Get current scroll position
    const scrollPosition = window.scrollY + 100; // Offset for better accuracy
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    
    // Check each section and update navigation accordingly
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

/**
 * Initialize Back to Top button functionality
 */
function initBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top a');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Toggle Back to Top button visibility based on scroll position
 */
function toggleBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    }
}

/**
 * Initialize CV Download functionality
 */
function initCVDownload() {
    const cvButton = document.querySelector('a[href="assets/cv.pdf"]');
    
    if (cvButton) {
        cvButton.addEventListener('click', function(e) {
            // Check if CV file exists, if not create a placeholder
            fetch('assets/cv.pdf')
                .then(response => {
                    if (!response.ok) {
                        // If CV doesn't exist, create a placeholder download
                        e.preventDefault();
                        downloadPlaceholderCV();
                    }
                })
                .catch(() => {
                    // If fetch fails, create placeholder
                    e.preventDefault();
                    downloadPlaceholderCV();
                });
        });
    }
}

/**
 * Generate and download a placeholder CV
 */
function downloadPlaceholderCV() {
    const cvContent = `
Your Name - Web Developer CV

CONTACT INFORMATION
Email: your.email@example.com
Phone: +1 (234) 567-890
Location: New York City, NY, USA
Portfolio: yourwebsite.com

PROFESSIONAL SUMMARY
Passionate web developer with expertise in creating user-friendly, responsive websites and applications. 
Strong foundation in both front-end and back-end development with a holistic approach to projects.

SKILLS
• Front-End: HTML5, CSS3, JavaScript, React
• Back-End: Node.js, Express.js, MongoDB
• Tools: Git, Figma, VS Code
• Design: Responsive Design, UI/UX

EXPERIENCE
Senior Web Developer | Tech Solutions Inc. | 2023 - Present
• Lead developer for client projects
• Managed team of junior developers
• Implemented best practices for code quality

Front-End Developer | Digital Innovations | 2021 - 2023
• Developed responsive user interfaces using React
• Improved loading speeds by 40%
• Collaborated with designers for pixel-perfect websites

EDUCATION
Master's in Computer Science | University of Technology | 2017 - 2019
Bachelor's in Information Technology | State University | 2013 - 2017

---
This is a placeholder CV. Please replace assets/cv.pdf with your actual CV file.
    `;

    // Create blob and download
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'YourName_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Show notification
    alert('Placeholder CV downloaded! Please replace assets/cv.pdf with your actual CV file.');
}