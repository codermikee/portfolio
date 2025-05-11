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
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const { title, description, category, link, image, tags } = project;
        
        const projectCard = document.createElement('div');
        projectCard.className = `project-card border-l-4 border-gray-700 hover:border-gray-500 shadow-sm hover:shadow-md transition cursor-pointer`;
        projectCard.setAttribute('data-categories', category);
        
        const imageSrc = image || 'data/project-placeholder.jpg'; // Create a placeholder image in your data folder
        
        projectCard.innerHTML = `
            <img src="${imageSrc}" alt="${title}" class="project-image">
            <div class="flex justify-between items-start mb-2">
                <span class="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">${title}</h3>
            <p class="text-sm mb-3">${description}</p>
            <div class="flex flex-wrap mb-4">
                ${tags.map(tag => {
                    return `<span class="tool-tag">${tag}</span>`;
                }).join('')}
            </div>
            <div class="flex justify-end items-center">
                <a href="${link}" class="text-gray-500 hover:text-white transition">View Project →</a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

// Initial render
renderProjects();

// JavaScript for the project filter dropdown
document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-button');
    const filterDropdown = document.querySelector('.filter-dropdown');
    const filterOptions = document.querySelectorAll('.filter-option');
    
    // Toggle dropdown when filter button is clicked
    if (filterButton) {
        filterButton.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default button action
            filterButton.classList.toggle('active');
            filterDropdown.classList.toggle('show');
        });
    }
    
    // Update the filter option selection handler
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            filterOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
            
            // Update the filter button text, preserving only the text content (not the icon)
            if (filterButton && filterButton.querySelector('span')) {
                // Get text without the icon
                const optionText = option.textContent.trim();
                filterButton.querySelector('span').textContent = optionText;
            }
            
            // Get the filter category
            const filter = option.getAttribute('data-filter');
            
            // Filter the projects
            renderProjects(filter);
            
            // Hide dropdown after selection
            filterDropdown.classList.remove('show');
            filterButton.classList.remove('active');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.filter-container') && 
            filterDropdown && 
            filterDropdown.classList.contains('show')) {
            
            filterDropdown.classList.remove('show');
            filterButton.classList.remove('active');
        }
    });
});

// Navigation functionality with scroll-based highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.bottom-nav a');
    
    // Handle click events for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Get the target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll to the section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active state
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Set active nav link based on scroll position
    function updateActiveNav() {
        const sections = document.querySelectorAll('#home, #services, #projects');
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // Add some buffer for better detection near the bottom
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;
        const scrollBottom = scrollPosition + windowHeight;
        const nearBottom = documentHeight - scrollBottom < 100;
        
        // Automatically highlight the projects section when near the bottom
        if (nearBottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const projectsLink = document.querySelector('.bottom-nav a[href="#projects"]');
            if (projectsLink) projectsLink.classList.add('active');
            return;
        }
        
        // Find the current section in view
        let currentSection = null;
        
        sections.forEach(section => {
            // Get section dimensions
            const sectionTop = section.offsetTop - 100; // Add offset for better detection
            const sectionHeight = section.clientHeight;
            const sectionBottom = sectionTop + sectionHeight;
            
            // Check if the section is in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section;
            }
        });
        
        // If no section is found but we're near the top, highlight home
        if (!currentSection && scrollPosition < 300) {
            currentSection = document.querySelector('#home');
        }
        
        // Update the active state
        if (currentSection) {
            const currentId = currentSection.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateActiveNav);
    
    // Initialize active nav on page load
    updateActiveNav();
});

