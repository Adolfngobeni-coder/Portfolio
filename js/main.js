// Update your renderApp function to include the projects section
function renderApp() {
    const root = document.getElementById('root');
    
    root.innerHTML = `
        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-content">
                <div class="profile-container">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
