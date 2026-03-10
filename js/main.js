// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Render the entire application
    renderApp();
    
    // Initialize event listeners after rendering
    setTimeout(() => {
        initializeEventListeners();
    }, 100);
});

function renderApp() {
    const root = document.getElementById('root');
    
    // Build the complete HTML structure
    root.innerHTML = `
        <div class="container">
            ${renderHeader()}
            ${renderProfile()}
            ${renderSkills()}
            ${renderMainDetails()}
            ${renderDeclaration()}
            ${renderAjaxDemo()}
            ${renderFooter()}
        </div>
    `;
}

function renderHeader() {
    return `
        <div class="top-header">
            <div class="name-title">
                <h1>ADOLPHUS HLAWULANI NGOBENI</h1>
                <span class="badge"><i class="fas fa-terminal"></i> IT · Web · Marketing</span>
            </div>
            <div class="contact-info">
                <span><i class="fas fa-phone-alt"></i> 063 343 6756</span>
                <span><i class="fas fa-envelope"></i> adolfngobeni6@gmail.com</span>
                <span class="address"><i class="fas fa-map-pin"></i> Diepsloot, JHB</span>
            </div>
        </div>
    `;
}

function renderProfile() {
    return `
        <div class="profile">
            <h2><i class="fas fa-user-check"></i> Professional Profile</h2>
            <p>${profileSummary}</p>
        </div>
    `;
}

function renderSkills() {
    return `
        <div class="skills-panel" id="skillsComponent">
            <div class="section-title">
                <i class="fas fa-cogs"></i> Core Skills 
                <span class="react-badge"><i class="fab fa-react"></i> react · tabs</span>
            </div>
            
            <div class="skill-tabs">
                <button class="skill-tab-btn active" id="tabAll"><i class="fas fa-layer-group"></i> All</button>
                <button class="skill-tab-btn" id="tabTech"><i class="fas fa-code"></i> Tech & Web</button>
                <button class="skill-tab-btn" id="tabIT"><i class="fas fa-server"></i> IT & SysAdmin</button>
                <button class="skill-tab-btn" id="tabMarketing"><i class="fas fa-chart-line"></i> Digital Mktg</button>
                <button class="skill-tab-btn" id="tabTools"><i class="fas fa-toolbox"></i> Tools</button>
                <button class="skill-tab-btn" id="tabSoft"><i class="fas fa-comments"></i> Soft Skills</button>
            </div>

            <div class="skills-grid" id="skillsGrid"></div>
            <p class="skill-note"><i class="far fa-hand-pointer"></i> Click tabs to filter skills</p>
        </div>
    `;
}

function renderMainDetails() {
    return `
        <div class="main-details">
            <div class="work-experience">
                <h3 class="section-heading"><i class="fas fa-briefcase"></i> Work Experience</h3>
                ${renderWorkExperience()}
            </div>
            <div class="extra-info">
                ${renderEducation()}
                ${renderCertifications()}
                ${renderPersonalDetails()}
                ${renderReferences()}
            </div>
        </div>
    `;
}

function renderWorkExperience() {
    let html = '';
    workExperience.forEach(job => {
        html += `
            <div class="work-item">
                <h3>${job.title}</h3>
                <div class="company">
                    ${job.company} 
                    <span class="date">${job.date}</span>
                </div>
                <ul>
                    ${job.responsibilities.map(resp => `<li><i class="fas fa-circle"></i> ${resp}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    return html;
}

function renderEducation() {
    return `
        <div class="sub-block">
            <h4><i class="fas fa-graduation-cap"></i> Education</h4>
            <p><strong>${education.school}</strong> – ${education.qualification} (${education.year})</p>
            <p><i class="fas fa-book-open"></i> Subjects: ${education.subjects.join(', ')}</p>
        </div>
    `;
}

function renderCertifications() {
    return `
        <div class="sub-block">
            <h4><i class="fas fa-certificate"></i> Certifications & Courses</h4>
            ${certifications.map(cert => `
                <div class="cert-item">
                    <i class="fas fa-check-circle"></i> 
                    <span>${cert}</span>
                </div>
            `).join('')}
        </div>
    `;
}

function renderPersonalDetails() {
    return `
        <div class="sub-block">
            <h4><i class="fas fa-id-card"></i> Personal Details</h4>
            <div class="info-row">
                <span class="info-tag"><i class="far fa-id-number"></i> ${personalDetails.idNumber}</span>
                <span class="info-tag"><i class="fas fa-venus-mars"></i> ${personalDetails.gender}</span>
                <span class="info-tag"><i class="fas fa-flag"></i> ${personalDetails.nationality}</span>
            </div>
            <div class="info-row">
                <span class="info-tag"><i class="fas fa-heartbeat"></i> ${personalDetails.health}</span>
                <span class="info-tag"><i class="fas fa-language"></i> ${personalDetails.homeLanguage} (home)</span>
            </div>
            <div class="info-row">
                <span class="info-tag"><i class="fas fa-language"></i> ${personalDetails.otherLanguages.join(', ')}</span>
                <span class="info-tag"><i class="fas fa-id-card"></i> License: ${personalDetails.driversLicense}</span>
            </div>
            <p><i class="fas fa-map-marker-alt"></i> ${personalDetails.fullAddress}</p>
        </div>
    `;
}

function renderReferences() {
    return `
        <div class="sub-block references">
            <h4><i class="fas fa-address-book"></i> References</h4>
            ${references.map(ref => `
                <p>
                    <i class="fas fa-user-tie"></i>
                    <strong>${ref.name}</strong> – ${ref.position}
                    ${ref.contact ? `<br><i class="fas fa-phone"></i> ${ref.contact}` : ''}
                </p>
            `).join('')}
        </div>
    `;
}

function renderDeclaration() {
    return `
        <div class="declaration">
            <i class="fas fa-pen-fancy"></i>
            <span><strong>Declaration:</strong> I hereby declare that the above-mentioned information is true and correct. — Ngobeni A.H</span>
        </div>
    `;
}

function renderAjaxDemo() {
    return `
        <div class="ajax-demo">
            <div class="ajax-left">
                <i class="fas fa-sync-alt"></i>
                <span>AJAX + Reactivity demo:</span>
            </div>
            <button id="loadMoreBtn">
                <i class="fas fa-download"></i> Simulate AJAX fetch
            </button>
            <div id="ajaxResponse">
                <i class="far fa-clock"></i> Click to load additional info
            </div>
        </div>
    `;
}

function renderFooter() {
    return `
        <footer>
            <i class="far fa-copyright"></i> ${new Date().getFullYear()} Adolphus Hlawulani Ngobeni – GitHub Portfolio
            <br><small>HTML · CSS · JavaScript · React · AJAX</small>
        </footer>
    `;
}

function initializeEventListeners() {
    // Initialize skills tabs
    initializeSkillsTabs();
    
    // Initialize AJAX demo
    initializeAjaxDemo();
    
    // Initial render of skills
    renderSkillsByCategory('all');
}

function initializeSkillsTabs() {
    const tabs = {
        all: document.getElementById('tabAll'),
        tech: document.getElementById('tabTech'),
        it: document.getElementById('tabIT'),
        marketing: document.getElementById('tabMarketing'),
        tools: document.getElementById('tabTools'),
        soft: document.getElementById('tabSoft')
    };

    // Check if elements exist before adding listeners
    if (tabs.all) tabs.all.addEventListener('click', () => handleTabClick('all', tabs.all));
    if (tabs.tech) tabs.tech.addEventListener('click', () => handleTabClick('tech', tabs.tech));
    if (tabs.it) tabs.it.addEventListener('click', () => handleTabClick('it', tabs.it));
    if (tabs.marketing) tabs.marketing.addEventListener('click', () => handleTabClick('marketing', tabs.marketing));
    if (tabs.tools) tabs.tools.addEventListener('click', () => handleTabClick('tools', tabs.tools));
    if (tabs.soft) tabs.soft.addEventListener('click', () => handleTabClick('soft', tabs.soft));
}

function handleTabClick(category, activeTab) {
    // Remove active class from all tabs
    document.querySelectorAll('.skill-tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Add active class to clicked tab
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Render skills for selected category
    renderSkillsByCategory(category);
}

function renderSkillsByCategory(category = 'all') {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    let filtered = category === 'all' 
        ? skillsCatalog 
        : skillsCatalog.filter(skill => skill.category === category);
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="skill-item" style="grid-column: 1/-1; justify-content: center;">No skills found in this category</div>';
        return;
    }
    
    grid.innerHTML = filtered.map(skill => `
        <div class="skill-item">
            <i class="fas ${skill.icon}"></i> 
            <span>${skill.name}</span>
        </div>
    `).join('');
}

function initializeAjaxDemo() {
    const ajaxBtn = document.getElementById('loadMoreBtn');
    const ajaxResp = document.getElementById('ajaxResponse');
    
    if (ajaxBtn && ajaxResp) {
        ajaxBtn.addEventListener('click', function() {
            // Show loading state
            ajaxResp.innerHTML = `<i class="fas fa-spinner fa-pulse"></i> fetching reference...`;
            
            // Simulate AJAX delay
            setTimeout(() => {
                const extra = [
                    '📌 "Hackathon 2025" planning in progress',
                    '📁 New WordPress site: DockieTladiFoundation',
                    '⚡ Zoho campaign: 68% open rate',
                    '🔐 SSL migration completed for OneConnect',
                    '☁️ SharePoint intranet live',
                    '🎯 New project: RTFoundation website',
                    '📊 Email campaign: 45% engagement rate'
                ];
                const randomMsg = extra[Math.floor(Math.random() * extra.length)];
                ajaxResp.innerHTML = `
                    <i class="fas fa-check-circle" style="color:#1f6e9f;"></i> 
                    <span>${randomMsg}</span>
                `;
            }, 800);
        });
    }
}
