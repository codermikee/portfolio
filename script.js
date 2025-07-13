// Project data
const projects = [
     {
        title: "AdU - Guide N' Go",
        description: "Created as an output for our thesis; A chatbot system that provides answers to frequently asked questions about the university via Forward Neural Networks and Levenshtein Distance Algorithm as its fallback. It uses the univeristy's handbook as its training data. <br><br> NOTE: In this demo, the training data is not included due to privacy concerns. For an actual demo, please contact me.",
        category: "Web App",
        link: "#",
        image: "", 
        tags: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Miroma Catalogue",
        description: "Simulates an Inventory Management System with user authentication.",
        category: "Web App",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
        title: "TOY RAID!",
        description: "A simple CRM system with user authentication and data management.",
        category: "Web App",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "Django", "Bootstrap", "MySQL"],
    },
    {
        title: "Barangay Management System",
        description: "A basic CRUD system for managing barangay data.",
        category: "Desktop App",
        link: "#",
        image: "", 
        tags: ["Java", "MySQL"],
    },
    {
        title: "ForgetMeNot",
        description: "An event planner and basic note-taking app that serves to handle your most important moments!",
        category: "Mobile App",
        link: "#",
        image: "", 
        tags: ["Flutter", "MySQL"],
    },
    {
        title: "Mike's Note App",
        description: "I wanted to create a simple note-taking app that I can actually use on the daily. So I created this app.",
        category: "Passion Project",
        link: "#",
        image: "", 
        tags: ["Flutter", "MySQL"],
    },
    {
        title: "Mike's Music Player",
        description: "I wanted to have a granular control over my music library and theme so I created this music player.",
        category: "Passion Project",
        link: "#",
        image: "", 
        tags: ["Flutter", "MySQL"],
    },
    {
        title: "Basic Portfolio Template 1",
        description: "A simple, dark-themed portfolio that can be customized.",
        category: "Templates",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    },
    {
        title: "Basic Portfolio Template 2",
        description: "A simple, coffee-themed portfolio that can be customized.",
        category: "Templates",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    },
    {
        title: "Basic Portfolio Template 3",
        description: "A simple, custom-themed portfolio that can be customized.",
        category: "Templates",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    },
    {
        title: "Dashboard Template",
        description: "Clean dashboard template with both admin and user views.",
        category: "Templates",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "React", "TailwindCSS", "MySQL"],
    },
    {
        title: "Login Template",
        description: "A simple, login and sign up page that can be used for your projects.",
        category: "Templates",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript", "TailwindCSS"],
    },
    {
        title: "JavaScript Training 1",
        description: "Created as a training project for JavaScript. It is a simple web app.",
        category: "Basic Training Project",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "JavaScript Training 2",
        description: "Created as a training project for JavaScript. It is a simple web app.",
        category: "Basic Training Project",
        link: "#",
        image: "", 
        tags: ["HTML", "CSS", "JavaScript"],
    },
];

// Function to render projects
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    // Create terminal directly without an extra container
    const terminal = document.createElement('div');
    terminal.className = 'terminal';
    container.appendChild(terminal);
    
    // Terminal header now matches other sections
    const terminalHeader = document.createElement('div');
    terminalHeader.className = 'terminal-header';
    terminalHeader.innerHTML = `
        <div class="term-dots">
            <span class="term-dot red"></span>
            <span class="term-dot yellow"></span>
            <span class="term-dot green"></span>
        </div>
        <div class="term-title">projects.sh</div>
    `;
    terminal.appendChild(terminalHeader);
    
    // Terminal body
    const terminalBody = document.createElement('div');
    terminalBody.className = 'terminal-body';
    terminal.appendChild(terminalBody);
    
    // Initial welcome message with simpler ASCII art
    terminalBody.innerHTML = `
        <div class="terminal-welcome">
            <pre class="ascii-art">
╔═══════════════════════════════════════════════╗
║                                               ║
║             PROJECT HIGHLIGHTS                ║
║                                               ║
╚═══════════════════════════════════════════════╝
            </pre>
            <p>Welcome to my Project Highlights! Type <span class="command-keyword">help</span> to see available commands.</p>
        </div>
        <div class="command-history"></div>
        <div class="command-line">
            <span class="prompt">mike@portfolio:~$ </span>
            <span class="command-input" contenteditable="true" spellcheck="false"></span>
        </div>
    `;
    
    // Focus on command input when clicked anywhere in terminal
    terminalBody.addEventListener('click', function() {
        const commandInput = terminalBody.querySelector('.command-input');
        if (commandInput) {
            commandInput.focus();
        }
    });
    
    // Add command input functionality
    const commandInput = terminalBody.querySelector('.command-input');
    const commandHistory = terminalBody.querySelector('.command-history');
    
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = commandInput.textContent.trim().toLowerCase();
            
            // Add command to history
            const commandLine = document.createElement('div');
            commandLine.className = 'command-line';
            commandLine.innerHTML = `<span class="prompt">mike@portfolio:~$ </span> <span class="command">${command}</span>`;
            commandHistory.appendChild(commandLine);
            
            // Process command
            processCommand(command, commandHistory);
            
            // Clear input
            commandInput.textContent = '';
            
            // Scroll to bottom of terminal
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
    
    // Auto-focus command input on desktop, but not on mobile
    if (window.innerWidth > 768) {
        setTimeout(() => commandInput.focus(), 100);
    }
}

function processCommand(command, outputElement) {
    const commandParts = command.split(' ');
    const mainCommand = commandParts[0];
    const args = commandParts.slice(1);
    
    switch (mainCommand) {
        case 'help':
            outputElement.innerHTML += `
                <div class="command-output">
                    <p>Available commands:</p>
                    <ul class="command-list">
                        <li><span class="command-keyword">ls</span> - List all projects</li>
                        <li><span class="command-keyword">ls web</span> - List Web App projects</li>
                        <li><span class="command-keyword">ls desktop</span> - List Desktop App projects</li>
                        <li><span class="command-keyword">ls mobile</span> - List Mobile App projects</li>
                        <li><span class="command-keyword">ls passion</span> - List Passion Projects</li>
                        <li><span class="command-keyword">ls templates</span> - List Template projects</li>
                        <li><span class="command-keyword">ls training</span> - List Basic Training Projects</li>
                        <li><span class="command-keyword">open [project-name]</span> - Open a specific project</li>
                        <li><span class="command-keyword">about</span> - About this terminal</li>
                        <li><span class="command-keyword">clear</span> - Clear the terminal</li>
                    </ul>
                </div>
            `;
            break;
            
        case 'ls':
            let category = 'all';
            if (args.length > 0) {
                const categoryArg = args[0].toLowerCase();
                if (categoryArg === 'web') category = 'Web App';
                else if (categoryArg === 'desktop') category = 'Desktop App';
                else if (categoryArg === 'mobile') category = 'Mobile App';
                else if (categoryArg === 'passion') category = 'Passion Project';
                else if (categoryArg === 'templates') category = 'Templates';
                else if (categoryArg === 'training') category = 'Basic Training Project';
            }
            
            const filteredProjects = category === 'all' 
                ? projects 
                : projects.filter(project => project.category === category);
            
            let output = `<div class="command-output">Found ${filteredProjects.length} projects:`;
            filteredProjects.forEach(project => {
                output += `
                <div class="term-project">
                    <div class="project-header">
                        <span class="project-name">${project.title}</span>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-action">
                        <span class="prompt">mike@portfolio:~$ </span>
                        <span class="command">open ${project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                        <a href="${project.link}" class="action-link">VIEW</a>
                    </div>
                </div>`;
            });
            output += '</div>';
            outputElement.innerHTML += output;
            break;
            
        case 'open':
            if (args.length === 0) {
                outputElement.innerHTML += `<div class="command-output error">Error: Project name required</div>`;
                return;
            }
            
            const projectName = args.join('-').toLowerCase();
            const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-').includes(projectName));
            
            if (project) {
                outputElement.innerHTML += `
                    <div class="command-output">
                        <p>Opening project: ${project.title}</p>
                        <div class="term-project">
                            <div class="project-header">
                                <span class="project-name">${project.title}</span>
                                <span class="project-category">${project.category}</span>
                            </div>
                            <div class="project-description">${project.description}</div>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                            </div>
                            <div class="project-action">
                                <a href="${project.link}" class="action-link">VIEW PROJECT</a>
                            </div>
                        </div>
                    </div>
                `;
                
                // Optional: Actually navigate to the project
                // window.location.href = project.link;
            } else {
                outputElement.innerHTML += `<div class="command-output error">Error: Project '${args.join(' ')}' not found</div>`;
            }
            break;
            
        case 'about':
            outputElement.innerHTML += `
                <div class="command-output">
                    <p>Project Terminal v1.0</p>
                    <p>Created by Mike Jomari Rivera</p>
                    <p>This terminal provides an interactive way to explore my portfolio projects.</p>
                </div>
            `;
            break;
            
        case 'clear':
            outputElement.innerHTML = '';
            break;
            
        default:
            outputElement.innerHTML += `<div class="command-output error">Command not found: ${mainCommand}. Type 'help' for available commands.</div>`;
    }
    
    // Scroll to bottom of terminal after command execution
    const terminalBody = outputElement.closest('.terminal-body');
    if (terminalBody) {
        setTimeout(() => {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, 10);
    }
}

// Initialize the terminal and set up navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    
    // Set up certificate carousel
    setupCertificateCarousel();
    
    // Set up navigation highlighting
    // First, check if bottom-nav exists but needs to be updated
    const bottomNav = document.querySelector('.bottom-nav');
    if(bottomNav) {
        // Get all links to preserve their href values
        const navLinks = bottomNav.querySelectorAll('a');
        
        // Create the new structure with labels
        bottomNav.innerHTML = '';
        
        // Recreate nav items with labels based on their href
        navLinks.forEach(oldLink => {
            const href = oldLink.getAttribute('href');
            const icon = oldLink.innerHTML.trim();
            const label = href.replace('#', '');
            
            // Create new nav item with label
            const navItem = document.createElement('a');
            navItem.href = href;
            navItem.className = 'nav-item';
            if(oldLink.classList.contains('active')) {
                navItem.classList.add('active');
            }
            
            navItem.innerHTML = `
                <span class="nav-icon">${icon}</span>
                <span class="nav-label">${label}</span>
            `;
            
            bottomNav.appendChild(navItem);
        });
    }
    
    // Now set up event listeners for the nav items
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('#home, #services, #projects');
    
    // Handle initial active state based on URL hash or default to home
    const hash = window.location.hash || '#home';
    navItems.forEach(item => {
        if(item.getAttribute('href') === hash) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Add click event listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all items
            navItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Improved scroll detection for better navbar highlighting
    window.addEventListener('scroll', function() {
        // Get current scroll position
        const scrollPosition = window.scrollY + window.innerHeight/2;
        
        // Find the current active section
        let currentSection = '';
        
        // Check each section's position
        sections.forEach(section => {
            // Get section boundaries
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            // Check if we're within this section
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Special case for the projects section - if we're at the bottom of the page
        const bottomOfPage = window.scrollY + window.innerHeight >= document.body.offsetHeight - 100;
        if (bottomOfPage) {
            currentSection = 'projects';
        }
        
        // Update the active nav item
        if (currentSection) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${currentSection}`) {
                    item.classList.add('active');
                }
            });
        }
    });
});

// Function to setup the infinite certificate carousel
function setupCertificateCarousel() {
    const track = document.querySelector('.carousel-track');
    
    if (!track) return;
    
    let isPaused = false;
    
    // Certificate data for modal
    const certificateData = {
        'qa': {
            title: 'Quality Assurance',
            issuer: 'FreeCodeCamp',
            image: 'data/Quality Assurance.png',
            description: 'This certificate validates proficiency in Quality Assurance methodologies, testing practices, and ensuring software reliability and performance standards.'
        },
        'skillfront': {
            title: 'Skillfront ISO/IEC 27001:2022 Information Security Associate',
            issuer: 'Skillfront',
            image: 'data/SkillFront-SFE016bde0f4c69b-11743803966467.png',
            description: 'Demonstrates comprehensive understanding of ISO/IEC 27001:2022 Information Security Management Systems and implementation practices.'
        },
        'ai-course': {
            title: 'Microsoft Artificial Intelligence Course (Azure AI Fundamentals)',
            issuer: 'TESDA Online Program',
            image: 'data/Mircosoft AI Course.png',
            description: 'Covers fundamental concepts of Artificial Intelligence and Machine Learning using Microsoft Azure AI services and tools.'
        },
        'graphic-design': {
            title: 'Introduction to Visual Graphic Design',
            issuer: 'TESDA Online Program',
            image: 'data/Introduction to Visual Graphic Design.png',
            description: 'Fundamental principles of graphic design, visual communication, typography, and design software proficiency.'
        },
        'ui-design': {
            title: 'Developing Designs for User Interface',
            issuer: 'TESDA Online Program',
            image: 'data/Developing Designs for User Interface.png',
            description: 'Comprehensive training in UI design principles, user-centered design, wireframing, and prototyping for digital interfaces.'
        },
        'ux-design': {
            title: 'Developing Designs for User Experience',
            issuer: 'TESDA Online Program',
            image: 'data/Developing Designs for User Experience.png',
            description: 'Advanced UX design methodologies, user research, usability testing, and creating exceptional user experiences.'
        },
        'css-intro': {
            title: 'Introduction to CSS',
            issuer: 'TESDA Online Program',
            image: 'data/Intro-to-CSS.png',
            description: 'Fundamental CSS concepts, styling techniques, responsive design, and modern CSS features for web development.'
        },
        'android-dev': {
            title: 'SMART Android Mobile Apps Development for Beginners',
            issuer: 'TESDA Online Program',
            image: 'data/SMART Android Mobile Apps Development for Beginners.png',
            description: 'Introduction to Android app development, Java programming, Android Studio, and mobile application lifecycle.'
        },
        'technopreneurship': {
            title: 'SMART Technopreneurship 101',
            issuer: 'TESDA Online Program',
            image: 'data/SMART Technopreneurship 101.png',
            description: 'Entrepreneurship in technology sector, business planning, innovation management, and tech startup fundamentals.'
        }
    };
    
    // Pause on hover
    track.addEventListener('mouseenter', () => {
        isPaused = true;
        track.style.animationPlayState = 'paused';
    });
    
    track.addEventListener('mouseleave', () => {
        isPaused = false;
        track.style.animationPlayState = 'running';
    });
    
    // Certificate click handlers
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const certificateId = card.getAttribute('data-certificate');
            const certificate = certificateData[certificateId];
            
            if (certificate) {
                openCertificateModal(certificate);
            }
        });
    });
    
    // Touch/swipe support for mobile
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        
        // Pause animation on touch
        isPaused = true;
        track.style.animationPlayState = 'paused';
    }, { passive: true });
    
    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);
        
        // If horizontal swipe is more significant than vertical, prevent scrolling
        if (diffX > diffY) {
            e.preventDefault();
        }
    }, { passive: false });
    
    track.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        
        // Resume animation
        setTimeout(() => {
            isPaused = false;
            track.style.animationPlayState = 'running';
        }, 100);
        
        isDragging = false;
    }, { passive: true });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        if (e.key === ' ') { // Spacebar to pause/resume
            e.preventDefault();
            if (isPaused) {
                isPaused = false;
                track.style.animationPlayState = 'running';
            } else {
                isPaused = true;
                track.style.animationPlayState = 'paused';
            }
        }
    });
    
    // Handle visibility change (pause when tab is not visible)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            track.style.animationPlayState = 'paused';
        } else if (!isPaused) {
            track.style.animationPlayState = 'running';
        }
    });
}

// Modal functionality
function openCertificateModal(certificate) {
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalIssuer = document.getElementById('modalIssuer');
    const modalDescription = document.getElementById('modalDescription');
    
    // Populate modal with certificate data
    modalTitle.textContent = certificate.title;
    modalImage.src = certificate.image;
    modalImage.alt = certificate.title;
    modalIssuer.textContent = certificate.issuer;
    modalDescription.textContent = certificate.description;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore body scroll
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certificateModal');
    const modalClose1 = document.getElementById('modalClose');
    const modalClose2 = document.getElementById('modalClose2');
    
    // Close modal events
    modalClose1.addEventListener('click', closeCertificateModal);
    modalClose2.addEventListener('click', closeCertificateModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCertificateModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeCertificateModal();
        }
    });
});

