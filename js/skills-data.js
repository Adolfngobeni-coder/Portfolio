// Chatbot knowledge base with detailed experience information and project links
const chatKnowledge = {
    greetings: [
        "hi", "hello", "hey", "greetings", "howdy", "good morning", "good afternoon", "good evening"
    ],
    
    // Professional roles and titles
    roles: {
        current: "Website Development and Marketing Associate",
        previous: ["Warehouse Worker", "Salesperson", "Delivery Coordinator"]
    },
    
    // Projects with live links
    projects: [
        {
            name: "OneConnect.co.za",
            url: "https://oneconnect.co.za",
            description: "Main company website - Managed original HTML/PHP/CSS version and developed new WordPress site",
            technologies: ["HTML", "PHP", "CSS", "WordPress", "mongoDB"],
            status: "Live & Maintained"
        },
        {
            name: "RTFoundation",
            url: "https://rtfoundation.co.za",
            description: "Non-profit organization website with donation integration and information portal",
            technologies: ["WordPress", "PHP", "Custom Theme"],
            status: "Live & Maintained"
        },
        {
            name: "DockieTladiFoundation",
            url: "https://dockietladifoundation.org",
            description: "Foundation website showcasing community work and accepting donations",
            technologies: ["WordPress", "WooCommerce", "Custom CMS"],
            status: "Live & Maintained"
        },
        {
            name: "Hackathon 2025",
            url: "#",
            description: "Annual tech event website and registration platform (Currently in planning phase)",
            technologies: ["Wordpress", "php"; "Database"],
            status: "In Development"
        }
    ],
    
    responses: {
        // About current role - WEBSITE DEVELOPMENT
        "website development": "As a Website Development and Marketing Associate, Adolphus manages and develops websites using HTML, PHP, and CSS. He has worked on both the original OneConnect website and developed a new WordPress site. His responsibilities include domain administration, DNS management, SSL certificates, backups, and migrations on platforms like Afrihost and Host Africa.",
        
        "wordpress": "Adolphus specializes in WordPress development. He developed, manages, and maintains multiple WordPress sites including:\n• OneConnect.co.za\n• RTFoundation\n• DockieTladiFoundation\n\nHe handles theme customization, plugin management, content updates, and performance optimization.",
        
        "html": "Adolphus uses HTML for structuring web content and building responsive websites. He maintains database-driven websites with clean, semantic HTML5 code across all his projects.",
        
        "php": "He works with PHP for server-side scripting and database management on the original OneConnect website and custom WordPress functionality.",
        
        "css": "CSS is used for styling websites with modern layouts, animations, and responsive design. He creates visually appealing and user-friendly interfaces for all projects.",
        
        "domain hosting": "Adolphus administers domains and hosting accounts on Afrihost and Host Africa platforms. This includes DNS configuration, SSL certificate installation, website migrations, and regular backups for all client websites.",
        
        // Marketing Associate
        "marketing associate": "As a Marketing Associate, Adolphus executes email marketing campaigns using Mailchimp and Zoho CRM. He handles contact segmentation, creates email templates, tracks engagement analytics, and reports on campaign performance for OneConnect and associated projects.",
        
        "email campaigns": "He creates and manages email campaigns through Mailchimp and Zoho CRM. This includes designing newsletters, segmenting audiences, A/B testing, and analyzing open rates and click-through rates.",
        
        "mailchimp": "Adolphus uses Mailchimp for email marketing, creating automated campaigns, managing subscriber lists, and tracking engagement metrics for OneConnect and foundation projects.",
        
        "zoho crm": "He works with Zoho CRM for customer relationship management, contact segmentation, and running targeted marketing campaigns.",
        
        "crm": "CRM experience includes managing customer data, creating segments for targeted marketing, tracking interactions, and analyzing campaign effectiveness with Zoho CRM.",
        
        // SharePoint & Collaboration
        "sharepoint": "Adolphus maintains Microsoft SharePoint sites for internal collaboration. He manages document libraries, permissions, and team sites to facilitate smooth information sharing across projects.",
        
        "microsoft 365": "He is proficient with Microsoft 365 tools including SharePoint, Teams, and Office applications for business productivity and collaboration.",
        
        // PROJECTS SECTION - DETAILED WITH LINKS
        "projects overview": "Adolphus has delivered several key projects:\n\n" + 
            "1️⃣ OneConnect.co.za - Main company website\n   🔗 https://oneconnect.co.za\n   • Original HTML/PHP/CSS version\n   • New WordPress development\n   • Full hosting & domain management\n\n" +
            "2️⃣ RTFoundation - Non-profit organization\n   🔗 https://rtfoundation.co.za\n   • Complete website development\n   • Donation integration\n   • Ongoing maintenance\n\n" +
            "3️⃣ DockieTladiFoundation - Foundation website\n   🔗 https://dockietladifoundation.org\n   • Custom WordPress theme\n   • Community portal\n   • Content management\n\n" +
            "4️⃣ Hackathon 2025 - Annual tech event\n   • Currently in planning phase\n   • Registration platform\n   • Event management system",
        
        "oneconnect": "🌐 **OneConnect.co.za**\n🔗 https://oneconnect.co.za\n\nAdolphus manages both versions of this website:\n\n• **Original Site:** Built with HTML, PHP, CSS - database-driven content management\n• **New WordPress Site:** Fully developed and maintained by Adolphus\n• **Technical Responsibilities:** Domain administration, DNS management, SSL certificates, regular backups, migrations on Afrihost/Host Africa\n• **Current Status:** Live and actively maintained",
        
        "rtfoundation": "🌐 **RTFoundation**\n🔗 https://rtfoundation.co.za\n\nA non-profit organization website developed and maintained by Adolphus:\n\n• **Technologies:** WordPress with custom theme\n• **Features:** Donation integration, information portal, news section\n• **Maintenance:** Regular updates, security patches, content management\n• **Hosting:** Managed on Afrihost platform\n• **Current Status:** Live with ongoing maintenance",
        
        "dockie tladi foundation": "🌐 **DockieTladiFoundation**\n🔗 https://dockietladifoundation.org\n\nFoundation website showcasing community work:\n\n• **Technologies:** WordPress, WooCommerce, Custom CMS\n• **Features:** Donation system, community news, event calendar\n• **Maintenance:** Content updates, security, backups\n• **Hosting:** Managed hosting on Host Africa\n• **Current Status:** Live and actively maintained",
        
        "hackathon 2025": "🚀 **Hackathon 2025**\n\nAn exciting upcoming project currently in planning phase:\n\n• **Purpose:** Annual tech event and competition\n• **Features Planned:** Registration system, project submission portal, judging interface\n• **Technologies:** React frontend, Node.js backend, MongoDB database\n• **Timeline:** Planning phase, development starting soon\n• **Status:** In Development",
        
        "all projects": "📁 **Complete Project Portfolio**\n\n" +
            "1️⃣ OneConnect.co.za - https://oneconnect.co.za (Live - Company Website)\n" +
            "2️⃣ RTFoundation - https://rtfoundation.co.za (Live - Non-profit)\n" +
            "3️⃣ DockieTladiFoundation - https://dockietladifoundation.org (Live - Foundation)\n" +
            "4️⃣ Hackathon 2025 - In Development\n\n" +
            "Each project includes full website development, hosting management, and ongoing maintenance.",
        
        "live projects": "Adolphus currently maintains these live websites:\n\n✅ **OneConnect.co.za**\n   https://oneconnect.co.za\n\n✅ **RTFoundation**\n   https://rtfoundation.co.za\n\n✅ **DockieTladiFoundation**\n   https://dockietladifoundation.org\n\nAll sites are actively maintained with regular updates, security patches, and content management.",
        
        // Project technologies
        "project technologies": "Technologies used across projects:\n\n• **OneConnect:** HTML, PHP, CSS, WordPress\n• **RTFoundation:** WordPress, Custom Theme\n• **DockieTladiFoundation:** WordPress, WooCommerce\n• **Hackathon 2025:** React, Node.js, MongoDB (planned)",
        
        // Previous Experience
        "3j": "At 3J (2018-2019), Adolphus worked as a Warehouse Worker and Salesperson. His responsibilities included managing picking ticket orders, preparing goods for shipment, pulling items from shelves, and staging goods for delivery.",
        
        "warehouse": "Warehouse experience includes order picking, inventory management, preparing shipments, and organizing goods for delivery at 3J.",
        
        "salesperson": "As a Salesperson at 3J, he handled customer interactions, processed orders, and ensured accurate order fulfillment.",
        
        "makro": "At Makro Riverside as a Delivery Coordinator (6-month contract), he contacted customers to confirm delivery details, managed delivery delays, tracked product delivery, and resolved issues promptly to ensure customer satisfaction.",
        
        "delivery coordinator": "His role as Delivery Coordinator involved customer communication, logistics coordination, tracking deliveries, and problem-solving to ensure timely and accurate deliveries.",
        
        // General Roles & Responsibilities
        "roles": "Adolphus has held multiple roles including:\n• Website Development and Marketing Associate (Current)\n• Warehouse Worker (2018-2019)\n• Salesperson (2018-2019)\n• Delivery Coordinator (Contract)",
        
        "responsibilities": "Current responsibilities include:\n• Website development and maintenance (HTML, PHP, CSS, WordPress)\n• Domain and hosting administration\n• Email marketing campaigns\n• SharePoint site management\n• Technical project delivery\n\nPrevious roles involved order management, customer coordination, and delivery logistics.",
        
        "daily tasks": "In his current role, Adolphus typically handles website updates, monitors email campaign performance, manages hosting accounts, collaborates via SharePoint, and works on ongoing development projects.",
        
        // Skills combined
        "skills": "Adolphus combines technical and marketing skills:\n\n💻 **Technical:**\n• HTML, PHP, CSS development\n• WordPress CMS\n• Domain & hosting (DNS, SSL, migrations)\n• System Administration\n• Network Security\n• SharePoint & Microsoft 365\n• React (learning/upcoming)\n• Node.js (upcoming)\n\n📊 **Marketing:**\n• Email campaigns (Mailchimp, Zoho CRM)\n• Contact segmentation\n• Analytics & reporting\n• SEO basics",
        
        // Certifications
        "certifications": "Adolphus holds certifications including:\n• Microsoft Certified: Power Platform Fundamental\n• Data Analysis (Microsoft & LinkedIn)\n• System Administration (Microsoft & LinkedIn)\n• Career Essentials in System Administration\n• Career Essentials in Software Development\n• Information Technology Certificate",
        
        // Education
        "education": "Adolphus completed Grade 12 at Lwandlamuni High School in 2014, with subjects including Xitsonga, English, Maths Literacy, Life Orientation, History, Life Sciences, and Tourism.",
        
        // Default response
        "default": "I can tell you about:\n\n💼 **Current Role:** Website Development and Marketing Associate\n\n🌐 **Live Projects:**\n• OneConnect.co.za\n• RTFoundation\n• DockieTladiFoundation\n• Hackathon 2025 (In Development)\n\n💻 **Website Development:**\n• HTML, PHP, CSS, WordPress\n• Domain & hosting management\n• Email marketing campaigns\n\n📋 **Previous Experience:**\n• 3J - Warehouse/Sales\n• Makro - Delivery Coordinator\n\nWhat would you like to explore? Try asking about specific projects or technologies!"
    }
};

// Keywords mapping for better response matching
const keywordMap = [
    // Website Development related
    { keywords: ["website", "development", "developer", "web dev", "coding"], response: "website development" },
    { keywords: ["wordpress", "wp", "cms"], response: "wordpress" },
    { keywords: ["html"], response: "html" },
    { keywords: ["php"], response: "php" },
    { keywords: ["css"], response: "css" },
    { keywords: ["domain", "hosting", "dns", "ssl", "backup", "migration", "afrihost", "host africa"], response: "domain hosting" },
    
    // Marketing related
    { keywords: ["marketing", "marketing associate", "digital marketing"], response: "marketing associate" },
    { keywords: ["email", "campaign", "newsletter"], response: "email campaigns" },
    { keywords: ["mailchimp"], response: "mailchimp" },
    { keywords: ["zoho", "crm"], response: "zoho crm" },
    { keywords: ["zoho", "campaign"], response: "zoho campaign"},
    
    // SharePoint & Tools
    { keywords: ["sharepoint"], response: "sharepoint" },
    { keywords: ["microsoft", "office 365", "teams"], response: "microsoft 365" },
    { keywords: ["Afrihost", "Cpanel"], response: "Afrihost"},
    { keywords: ["Host Africa"], response: "host Africa"},
    
    // PROJECTS - Detailed matching
    { keywords: ["project", "portfolio", "work done", "websites built"], response: "projects overview" },
    { keywords: ["all projects", "list projects", "show projects"], response: "all projects" },
    { keywords: ["live projects", "active sites", "current websites"], response: "live projects" },
    { keywords: ["project technologies", "tech stack projects"], response: "project technologies" },
    
    // Specific Projects
    { keywords: ["oneconnect", "one connect", "oneconnect.co.za"], response: "oneconnect" },
    { keywords: ["rtfoundation", "rt foundation", "rtfoundation.co.za"], response: "rtfoundation" },
    { keywords: ["dockie", "tladi", "dockie tladi foundation", "dockietladifoundation"], response: "dockie tladi foundation" },
    { keywords: ["hackathon", "hackathon 2025"], response: "hackathon 2025" },
    
    // Project URLs
    { keywords: ["link to", "url", "website link", "visit site"], response: "live projects" },
    { keywords: ["oneconnect link", "oneconnect url"], response: "oneconnect" },
    { keywords: ["rtfoundation link", "rtfoundation url"], response: "rtfoundation" },
    { keywords: ["dockie link", "dockie url"], response: "dockie tladi foundation" },
    
    // Previous Experience
    { keywords: ["3j", "three j"], response: "3j" },
    { keywords: ["warehouse"], response: "warehouse" },
    { keywords: ["sales", "salesperson"], response: "salesperson" },
    { keywords: ["makro"], response: "makro" },
    { keywords: ["delivery", "coordinator", "logistics"], response: "delivery coordinator" },
    
    // General
    { keywords: ["role", "position", "job", "work", "what does he do"], response: "roles" },
    { keywords: ["responsibilities", "duties", "tasks"], response: "responsibilities" },
    { keywords: ["daily", "day to day"], response: "daily tasks" },
    { keywords: ["skill", "expertise", "know"], response: "skills" },
    { keywords: ["certification", "certificate", "course", "qualified"], response: "certifications" },
    { keywords: ["education", "study", "school", "qualification"], response: "education" },
    { keywords: ["background", "about", "tell me"], response: "background" }
];

// Function to find best response
function findResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Check for greetings
    if (chatKnowledge.greetings.some(greeting => input.includes(greeting))) {
        return "Hello! 👋 I'm here to tell you about Adolphus's experience as a Website Development and Marketing Associate. You can ask about his **live projects** like OneConnect.co.za, RTFoundation, or DockieTladiFoundation. What interests you?";
    }
    
    // Check for "what do you do" or similar
    if (input.includes("what do you do") || input.includes("who are you")) {
        return "I'm a virtual assistant here to provide information about Adolphus's professional experience and **live projects**. He currently maintains:\n\n🌐 OneConnect.co.za\n🌐 RTFoundation\n🌐 DockieTladiFoundation\n\nPlus Hackathon 2025 (in development). Ask me about any project for details and links!";
    }
    
    // Check for current role specifically
    if (input.includes("current role") || input.includes("current position") || input.includes("what does he do now")) {
        return "Adolphus is currently a **Website Development and Marketing Associate** at OneConnect (2023-Present). His role involves:\n\n• Managing website content with HTML, PHP, CSS\n• WordPress development and maintenance\n• Domain and hosting administration (DNS, SSL, backups, migrations)\n• Email campaigns via Mailchimp & Zoho CRM\n• SharePoint site management\n\n**Live Projects:**\n✅ OneConnect.co.za\n✅ RTFoundation\n✅ DockieTladiFoundation\n🚧 Hackathon 2025 (In Development)";
    }
    
    // Check for website development specifically
    if (input.includes("website development") || input.includes("web developer") || input.includes("what websites")) {
        return "As a Website Development Associate, Adolphus:\n\n• Manages the original OneConnect website using HTML, PHP, and CSS\n• Developed and maintains the new WordPress OneConnect website\n• Handles domain registration and hosting on Afrihost and Host Africa\n• Manages DNS configurations and SSL certificates\n• Performs regular backups and website migrations\n\n**Live Sites:**\n🔗 OneConnect.co.za\n🔗 RTFoundation\n🔗 DockieTladiFoundation";
    }
    
    // Check for project links specifically
    if (input.includes("link") || input.includes("url") || input.includes("visit") || input.includes("open")) {
        return "Here are the live project links:\n\n🌐 **OneConnect.co.za**\nhttps://oneconnect.co.za\n\n🌐 **RTFoundation**\nhttps://rtfoundation.co.za\n\n🌐 **DockieTladiFoundation**\nhttps://dockietladifoundation.org\n\nAll sites are actively maintained and updated regularly!";
    }
    
    // Map keywords to responses
    for (let map of keywordMap) {
        if (map.keywords.some(keyword => input.includes(keyword))) {
            return chatKnowledge.responses[map.response] || chatKnowledge.responses.default;
        }
    }
    
    // Check for any work-related questions
    if (input.includes("work") || input.includes("job") || input.includes("experience")) {
        return chatKnowledge.responses.roles + "\n\n" + chatKnowledge.responses.responsibilities;
    }
    
    return chatKnowledge.responses.default;
}
