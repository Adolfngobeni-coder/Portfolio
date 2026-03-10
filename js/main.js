// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    renderApp();
    initializeChatbot();
});

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
                        <h1>Adolphus Ngobeni</h1>
                        <div class="title">IT Professional | Web Developer | Digital Marketer</div>
                        <p class="bio">Creative and results-driven professional with expertise in IT Support, Web Development, System Administration, and Digital Marketing. Passionate about delivering innovative technical solutions.</p>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="downloadCV()">
                                <i class="fas fa-download"></i> Download CV
                            </button>
                            <button class="btn btn-outline" onclick="document.getElementById('chatWidget').style.display='block'">
                                <i class="fas fa-comment"></i> Chat With Me
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
                        <div class="stat-number">20+</div>
                        <div class="stat-label">Projects Completed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">7</div>
                        <div class="stat-label">Certifications</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Client Satisfaction</div>
                    </div>
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
                <p>&copy; 2024 Adolphus Ngobeni. All rights reserved.</p>
                <p style="margin-top: 1rem; color: var(--gray);">
                    <i class="fas fa-envelope"></i> contact@adolphus.dev | 
                    <i class="fas fa-phone"></i> +27 XX XXX XXXX
                </p>
            </div>
        </footer>
    `;
    
    // Initialize skills and timeline
    initializeSkills();
    renderTimeline();
}

// Skills data (simplified without personal info)
const skillsData = [
    // Development
    { name: "HTML5 & CSS3", category: "tech", icon: "fa-code" },
    { name: "JavaScript", category: "tech", icon: "fa-code" },
    { name: "PHP", category: "tech", icon: "fa-code" },
    { name: "WordPress Development", category: "tech", icon: "fa-wordpress" },
    { name: "React", category: "tech", icon: "fa-react" },
    
    // System Admin
    { name: "System Administration", category: "it", icon: "fa-desktop" },
    { name: "Network Security", category: "it", icon: "fa-shield" },
    { name: "Cloud Services", category: "it", icon: "fa-cloud" },
    { name: "Database Management", category: "it", icon: "fa-database" },
    
    // Marketing
    { name: "Digital Marketing", category: "marketing", icon: "fa-chart-line" },
    { name: "Email Campaigns", category: "marketing", icon: "fa-envelope" },
    { name: "SEO Optimization", category: "marketing", icon: "fa-search" },
    { name: "CRM Management", category: "marketing", icon: "fa-users" },
    
    // Tools
    { name: "Microsoft 365", category: "tools", icon: "fa-cloud" },
    { name: "SharePoint", category: "tools", icon: "fa-share-alt" },
    { name: "Zoho CRM", category: "tools", icon: "fa-crm" },
    { name: "Mailchimp", category: "tools", icon: "fa-mail-bulk" }
];

// Experience data
const experienceData = [
    {
        title: "Marketing Associate",
        company: "OneConnect",
        date: "2023 - Present",
        description: "Managing website content, WordPress development, email campaigns, and technical projects."
    },
    {
        title: "Warehouse/Sales Associate",
        company: "3J",
        date: "2018 - 2019",
        description: "Order management, inventory control, and customer service."
    },
    {
        title: "Delivery Coordinator",
        company: "Makro Riverside",
        date: "Contract",
        description: "Customer coordination, delivery tracking, and issue resolution."
    }
];

function initializeSkills() {
    const tabs = {
        all: document.getElementById('tabAll'),
        tech: document.getElementById('tabTech'),
        it: document.getElementById('tabIT'),
        marketing: document.getElementById('tabMarketing'),
        tools: document.getElementById('tabTools')
    };

    Object.keys(tabs).forEach(key => {
        if (tabs[key]) {
            tabs[key].addEventListener('click', () => {
                // Remove active class from all tabs
                document.querySelectorAll('.skill-tab-btn').forEach(tab => {
                    tab.classList.remove('active');
                });
                tabs[key].classList.add('active');
                
                // Filter skills
                filterSkills(key === 'all' ? 'all' : key);
            });
        }
    });
    
    // Initial render
    filterSkills('all');
}

function filterSkills(category) {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    const filtered = category === 'all' 
        ? skillsData 
        : skillsData.filter(skill => skill.category === category);
    
    grid.innerHTML = filtered.map(skill => `
        <div class="skill-item">
            <i class="fab ${skill.icon}"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = experienceData.map((exp, index) => `
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <span class="date">${exp.date}</span>
                <h3>${exp.title}</h3>
                <div class="company">${exp.company}</div>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// CV Download function
function downloadCV() {
    // Create a simple text CV
    const cvContent = `
ADOLPHUS NGOBENI - PROFESSIONAL CV

PROFESSIONAL PROFILE
Creative and results-driven IT professional with expertise in Web Development, 
System Administration, and Digital Marketing.

CORE SKILLS
• Web Development: HTML, CSS, JavaScript, PHP, WordPress
• System Administration: Network Security, Cloud Services, Database Management
• Digital Marketing: Email Campaigns, SEO, CRM Management
• Tools: Microsoft 365, SharePoint, Zoho CRM, Mailchimp

WORK EXPERIENCE
Marketing Associate - OneConnect (2023-Present)
• Website content management and WordPress development
• Email campaign execution and CRM management
• Technical project coordination

Previous experience in warehouse operations and delivery coordination.

CERTIFICATIONS
• Microsoft Certified: Power Platform Fundamental
• System Administration - Microsoft & LinkedIn
• Software Development - Microsoft & LinkedIn

Contact: professional@email.com
    `;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Adolphus_Ngobeni_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Chatbot functionality
function initializeChatbot() {
    const chatWidget = document.getElementById('chatWidget');
    const chatHeader = document.getElementById('chatHeader');
    const toggleChat = document.getElementById('toggleChat');
    const chatBody = document.getElementById('chatBody');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');

    // Toggle chat minimize
    if (toggleChat) {
        toggleChat.addEventListener('click', () => {
            chatWidget.classList.toggle('minimized');
            const icon = toggleChat;
            if (chatWidget.classList.contains('minimized')) {
                icon.className = 'fas fa-chevron-down';
            } else {
                icon.className = 'fas fa-chevron-up';
            }
        });
    }

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate thinking and respond
        setTimeout(() => {
            removeTypingIndicator();
            const response = findResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `
            <i class="fas ${sender === 'bot' ? 'fa-robot' : 'fa-user'}"></i>
            <div class="message-content">${text}</div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'message bot typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = `
            <i class="fas fa-robot"></i>
            <div class="message-content">Typing<span class="dots">...</span></div>
        `;
        chatMessages.appendChild(typing);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    // Event listeners
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }

    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Make downloadCV available globally
window.downloadCV = downloadCV;
