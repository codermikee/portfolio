// Project data
 const projects = [
    {
        title: "E-commerce Redesign",
        description: "Complete overhaul of online shopping experience with focus on conversion optimization.",
        category: "web",
        year: "2022",
        link: "#",
        image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
        icon: "fas fa-shopping-cart"
    },
    {
        title: "Fitness Mobile App",
        description: "iOS and Android app helping users track workouts and nutrition plans.",
        category: "mobile",
        year: "2021",
        link: "#",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["React Native", "Firebase", "Python"],
        icon: "fas fa-dumbbell"
    },
    {
        title: "Corporate Brand Identity",
        description: "Brand guidelines, logo system, and visual language for tech startup.",
        category: "design",
        year: "2020",
        link: "#",
        image: "https://images.unsplash.com/photo-1516937948344-463b4d161307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Illustrator", "Photoshop", "Figma", "XD"],
        icon: "fas fa-palette"
    },
    {
        title: "Dashboard UX",
        description: "Analytics dashboard redesign with improved data visualization components.",
        category: "desktop",
        year: "2021",
        link: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Figma", "JavaScript", "D3.js"],
        icon: "fas fa-chart-pie"
    },
    {
        title: "Travel Booking Website",
        description: "Responsive website frontend for hotel and flight booking platform.",
        category: "wordpress",
        year: "2022",
        link: "#",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Vue.js", "PHP", "MySQL", "CSS"],
        icon: "fas fa-plane"
    },
    {
        title: "Health Tracking App UI",
        description: "User interface design for medical symptom tracking application.",
        category: "templates",
        year: "2023",
        link: "#",
        image: "https://images.unsplash.com/photo-1485216983937-749292830fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        tags: ["Swift", "Figma", "Firebase"],
        icon: "fas fa-heartbeat"
    }
];

// Tag color mapping
const tagColors = {
    "React": "react-tag",
    "React Native": "react-tag",
    "Node.js": "js-tag",
    "JavaScript": "js-tag",
    "Vue.js": "vue-tag",
    "Python": "python-tag",
    "PHP": "php-tag",
    "MongoDB": "html-tag",
    "MySQL": "html-tag",
    "Firebase": "js-tag",
    "TailwindCSS": "css-tag",
    "CSS": "css-tag",
    "Figma": "figma-tag",
    "Illustrator": "html-tag",
    "Photoshop": "html-tag",
    "XD": "xd-tag", 
    "D3.js": "js-tag",
    "Swift": "react-tag"
};

// Category colors mapping
const categoryColors = {
    web: { text: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-500', darkText: 'dark:text-blue-300', darkBg: 'dark:bg-blue-900' },
    desktop: { text: 'text-cyan-700', bg: 'bg-cyan-100', border: 'border-cyan-500', darkText: 'dark:text-cyan-300', darkBg: 'dark:bg-cyan-900' },
    mobile: { text: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-500', darkText: 'dark:text-purple-300', darkBg: 'dark:bg-purple-900' },
    wordpress: { text: 'text-green-700', bg: 'bg-green-100', border: 'border-green-500', darkText: 'dark:text-green-300', darkBg: 'dark:bg-green-900' },
    templates: { text: 'text-pink-700', bg: 'bg-pink-100', border: 'border-pink-500', darkText: 'dark:text-pink-300', darkBg: 'dark:bg-pink-900' },
    design: { text: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-500', darkText: 'dark:text-amber-300', darkBg: 'dark:bg-amber-900' }
};

// Function to render projects
function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const { title, description, category, year, link, image, tags, icon } = project;
        const categoryColor = categoryColors[category];
        
        const projectCard = document.createElement('div');
        projectCard.className = `project-card p-5 bg-white border-l-4 ${categoryColor.border} hover:border-opacity-100 shadow-sm hover:shadow-md transition cursor-pointer dark:bg-gray-800`;
        projectCard.setAttribute('data-categories', category);
        
        projectCard.innerHTML = `
            <img src="${image}" alt="${title}" class="project-image">
            <div class="flex justify-between items-start mb-2">
                <span class="px-3 py-1 ${categoryColor.bg} ${categoryColor.darkBg} ${categoryColor.text} ${categoryColor.darkText} rounded-full text-xs font-medium">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                <span class="text-xs text-gray-400">${year}</span>
            </div>
            <h3 class="text-lg font-bold mb-2 dark:text-white">${title}</h3>
            <p class="text-gray-700 text-sm mb-3 dark:text-gray-300">${description}</p>
            <div class="flex flex-wrap mb-4">
                ${tags.map(tag => {
                    const tagClass = tagColors[tag] || 'html-tag';
                    return `<span class="tool-tag ${tagClass}">${tag}</span>`;
                }).join('')}
            </div>
            <div class="flex justify-between items-center">
                <i class="${icon} ${categoryColor.text} ${categoryColor.darkText}"></i>
                <a href="${link}" class="text-gray-500 hover:text-black transition dark:hover:text-white">View Project →</a>
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

// Navigation functionality
const navLinks = document.querySelectorAll('.bottom-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = darkModeToggle.querySelector('i');
    
    if (document.body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Set active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('div[id]');
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});