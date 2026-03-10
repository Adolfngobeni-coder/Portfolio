// Main application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Render the entire application
    renderApp();
    
    // Initialize event listeners
    initializeEventListeners();
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
                <span><i class="fas fa-map-pin"></i> Diepsloot, JHB</span>
            </div>
        </div>
    `;
}

function renderProfile() {
    return `
        <div class="profile">
            <h2><i class="fas fa-user-check"></i> Professional Profile</h2>
            <p>Creative, detail-oriented, and results-driven professional with expertise in IT Support, Web Development, System Administration, and Digital Marketing. Experienced in managing technical projects, CRM campaigns, and domain and hosting accounts. Thrive in challenging environments, adapt quickly, and consistently deliver projects with integrity, precision, and innovation.</p>
        </div>
    `;
}

function renderSkills() {
    return `
        <div class="skills-panel" id="skillsComponent">
            <div class="section-title">
                <i class="fas fa-cogs"></i> Core Skills 
                <span style="font-size: 0.9rem; font-weight: normal; margin-left: auto; background: #e1effb; padding: 0.2rem 1.2rem; border-radius: 30px;">react · tabs</span>
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
            <p style="margin-top: 1rem; font-size: 0.9rem; color: #4b6f8a;"><i class="far fa-hand-pointer"></i> Click tabs to filter</p>
        </div>
    `;
}

function renderMainDetails() {
    return `
        <div class="main-details">
            <div class="work-experience">
                <h3 style="font-size: 1.6rem; margin-bottom: 1.2rem;"><i class="fas fa-briefcase"></i> Work Experience</h3>
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
                <div class="company">${job.company} <span class="date">${job.date}</span></div>
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
            <p><strong>${education.school}</strong> – ${education.qualification} (${education.year})<br>
            Subjects: ${education.subjects.join(', ')}</p>
        </div>
    `;
}

function renderCertifications() {
    return `
        <div class="sub-block">
            <h4><i class="fas fa-certificate"></i> Certifications & Courses</h4>
            ${certifications.map(cert => `
                <div class="cert-item"><i class="fas fa-check-circle" style="color:#1f6e9f;"></i> ${cert}</div>
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
                <span class="info-tag"><i class="fas fa-language"></i> ${personalDetails.otherLanguages.join(', ')}</span>
            </div>
            <p><i class="fas fa-id-card"></i> <strong>Driver's License:</strong> ${personalDetails.driversLicense}</p>
        </div>
    `;
}

function renderReferences() {
    return `
        <div class="sub-block references">
            <h4><i class="fas fa-address-book"></i> References</h4>
            ${references.map(ref => `
                <p><strong>${ref.name}</strong> – ${ref.position}${ref.contact ? ' | Tel: ' + ref.contact : ''}</p>
            `).join('')}
        </div>
    `;
}

function renderDeclaration() {
    return `
        <div class="declaration">
            <i class="fas fa-pen"></i> <strong>Declaration:</strong> I hereby declare that the above-mentioned information is true and correct. — Ngobeni A.H
        </div>
    `;
}

function renderAjaxDemo() {
    return `
        <div class="ajax-demo">
            <div style="display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-sync-alt" style="color: #1f6e9f; font-size: 1.8rem;"></i>
                <span style="font-weight: 600;">AJAX + Reactivity demo:</span>
            </div>
            <button id="loadMoreBtn"><i class="fas fa-download"></i> Simulate AJAX fetch</button>
            <div id="ajaxResponse"><i class="far fa-clock"></i> click to load additional info</div>
        </div>
    `;
}

function renderFooter() {
    return `
        <footer>
            <i class="far fa-copyright"></i> Adolphus Hlawulani Ngobeni – github portfolio (HTML/CSS/JavaScript/React/AJAX integrated)
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

    // Add click handlers
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
    activeTab.classList.add('active');
    
    // Render skills for selected category
    renderSkillsByCategory(category);
}

function renderSkillsByCategory(category = 'all') {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    
    let filtered = category === 'all' 
        ? skillsCatalog 
        : skillsCatalog.filter(skill => skill.category === category);
    
    grid.innerHTML = filtered.map(skill => `
        <div class="skill-item">
            <i class="fas ${skill.icon}"></i> ${skill.name}
        </div>
    `).join('');
}

function initializeAjaxDemo() {
    const ajaxBtn = document.getElementById('loadMoreBtn');
    const ajaxResp = document.getElementById('ajaxResponse');
    
    if (ajaxBtn) {
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
                    '☁️ SharePoint intranet live'
                ];
                const randomMsg = extra[Math.floor(Math.random() * extra.length)];
                ajaxResp.innerHTML = `<i class="fas fa-check-circle" style="color:#1f6e9f;"></i> ${randomMsg}`;
            }, 600);
        });
    }
}
