// Update your renderApp function to include the projects section
function renderApp() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <div class="profile-container">
                    <img src="https://images./photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                         alt="Profile" 
                         class="profile-image">
                    <div class="profile-text">
                        <h1>Adolphus Hlawulani Ngobeni</h1>
                        <div class="title">Website Development & Marketing Associate</div>
                        <p class="bio">Creative and results-driven professional specializing in web development, WordPress, and digital marketing. Managing live projects including OneConnect.co.za, RTFoundation, DockieTladiFoundation, and Timmodise.com.</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="downloadCV()">
                                <i class="fas fa-download"></i> Download CV
                            </button>
                            <button class="btn btn-outline" onclick="document.getElementById('chatWidget').style.display='block'">
                                <i class="fas fa-comment"></i> View My Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Years Experience</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5</div>
                        <div class="stat-label">Live Projects</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">7+</div>
                        <div class="stat-label">Certifications</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Active Websites</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section (NEW) -->
        <section class="projects" id="projects">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid" id="projectsGrid">
                    ${renderProjectCards()}
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section class="skills" id="skills">
            <div class="container">
                <h2 class="section-title">Core Skills & Expertise</h2>
                <div class="skills-panel">
                    <div class="skill-tabs">
                        <button class="skill-tab-btn active" id="tabAll"><i class="fas fa-layer-group"></i> All</button>
                        <button class="skill-tab-btn" id="tabTech"><i class="fas fa-code"></i> Development</button>
                        <button class="skill-tab-btn" id="tabIT"><i class="fas fa-server"></i> System Admin</button>
                        <button class="skill-tab-btn" id="tabMarketing"><i class="fas fa-chart-line"></i> Marketing</button>
                        <button class="skill-tab-btn" id="tabTools"><i class="fas fa-toolbox"></i> Tools</button>
                    </div>
                    <div class="skills-grid" id="skillsGrid"></div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="experience" id="experience">
            <div class="container">
                <h2 class="section-title">Work Experience</h2>
                <div class="timeline" id="timeline"></div>
            </div>
        </section>

        // Add this after the Experience section in your renderApp function

// Projects Section
function renderProjects() {
    return `
        <section class="projects" id="projects">
            <div class="container">
                <h2 class="section-title">Featured Projects</h2>
                <div class="projects-grid" id="projectsGrid">
                    ${renderProjectCards()}
                </div>
            </div>
        </section>
    `;
}

function renderProjectCards() {
    const projects = [
        {
            name: "OneConnect.co.za",
            url: "https://oneconnect.co.za",
            description: "Company website with both original HTML/PHP/CSS version and new WordPress development",
            technologies: ["HTML", "PHP", "CSS", "WordPress"],
            status: "Live",
            icon: "fa-building"
        },
        {
            name: "RTFoundation",
            url: "https://rtfoundation.co.za",
            description: "Non-profit organization website with donation integration and information portal",
            technologies: ["WordPress", "PHP", "Custom Theme"],
            status: "Live",
            icon: "fa-heart"
        },
        {
            name: "DockieTladiFoundation",
            url: "https://dockietladifoundation.org",
            description: "Foundation website showcasing community work with donation system",
            technologies: ["WordPress", "WooCommerce", "CMS"],
            status: "Live",
            icon: "fa-hand-holding-heart"
        },
        {
            name: "Hackathon 2025",
            url: "#",
            description: "Annual tech event platform with registration and project submission (In Development)",
            technologies: ["React", "Node.js", "MongoDB"],
            status: "Development",
            icon: "fa-code"
        }
    ];
    
    return projects.map(project => `
        <div class="project-card">
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-footer">
                <span class="project-status status-${project.status.toLowerCase()}">${project.status}</span>
                ${project.url !== '#' ? `<a href="${project.url}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Visit Site</a>` : '<span class="project-link disabled">In Development</span>'}
            </div>
        </div>
    `).join('');
}

// Add this to your renderApp function after the experience section
// Find where you render the experience section and add this after it

        <!-- Footer -->
        <footer>
            <div class="container">
                <p>&copy; 2026 Adolphus Ngobeni. All rights reserved.</p>
                <p style="margin-top: 1rem; color: var(--gray);">
                    <i class="fas fa-envelope"></i> adolfngobeni6@gmail.com | 
                    <i class="fas fa-phone"></i> Contact for opportunities
                </p>
            </div>
        </footer>
    `;
    
    // Initialize all sections
    initializeSkills();
    renderTimeline();
}
