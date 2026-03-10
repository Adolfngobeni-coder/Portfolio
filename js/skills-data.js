// Chatbot knowledge base
const chatKnowledge = {
    greetings: [
        "hi", "hello", "hey", "greetings", "howdy"
    ],
    
    responses: {
        // About professional background
        "background": "Adolphus is an IT professional with expertise in Web Development, System Administration, and Digital Marketing. He has experience managing technical projects and CRM campaigns.",
        
        "skills": "His core skills include HTML/CSS/JavaScript, WordPress development, System Administration, Network Security, and Digital Marketing with Mailchimp and Zoho CRM.",
        
        "experience": "He currently works as a Marketing Associate at OneConnect, managing websites and email campaigns. Previously he worked at 3J and Makro Riverside in coordination roles.",
        
        "certifications": "Adolphus holds Microsoft Certifications including Power Platform Fundamental, plus certifications in System Administration, Data Analysis, and Software Development from Microsoft & LinkedIn.",
        
        "education": "He completed Grade 12 at Lwandlamuni High School in 2014, with subjects including Xitsonga, English, Maths Literacy, History, Life Sciences, and Tourism.",
        
        "projects": "He has worked on projects including OneConnect.co.za, RTFoundation, DockieTladiFoundation, and is planning Hackathon 2025.",
        
        "contact": "You can reach out through the contact form or connect on professional platforms.",
        
        "default": "I can tell you about his background, skills, experience, certifications, education, projects, or how to contact him. What would you like to know?"
    }
};

// Function to find best response
function findResponse(userInput) {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (chatKnowledge.greetings.some(greeting => input.includes(greeting))) {
        return "Hello! How can I help you learn more about Adolphus?";
    }
    
    // Check for keywords
    if (input.includes('background') || input.includes('about')) {
        return chatKnowledge.responses.background;
    }
    if (input.includes('skill') || input.includes('expertise') || input.includes('know')) {
        return chatKnowledge.responses.skills;
    }
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
        return chatKnowledge.responses.experience;
    }
    if (input.includes('certification') || input.includes('certificate') || input.includes('course')) {
        return chatKnowledge.responses.certifications;
    }
    if (input.includes('education') || input.includes('study') || input.includes('school')) {
        return chatKnowledge.responses.education;
    }
    if (input.includes('project') || input.includes('portfolio')) {
        return chatKnowledge.responses.projects;
    }
    if (input.includes('contact') || input.includes('reach') || input.includes('email')) {
        return chatKnowledge.responses.contact;
    }
    
    return chatKnowledge.responses.default;
}
