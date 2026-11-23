const PORTFOLIO_CONFIG = {

    name: "MARCO ANTONIO VILLEGAS NIÑO",

    initials: "MV",

    role: "Estudiante de Ingeniería de Software | Desarrollador en formación",

    summary: "Me interesa crear soluciones digitales que combinen funcionalidad, diseño y una buena experiencia de usuario. Disfruto aprender nuevas tecnologías y convertir ideas en proyectos reales.",

    location: "Callao, Perú",

    cvUrl: "https://drive.google.com/file/d/1Bbw384o-A5ve1wNOky_XboBuZjDRfoXg/view?usp=sharing",
    aboutLead: "Soy una persona perseverante, curiosa, responsable y apasionada por la tecnología.",
    aboutDescription: "Me gusta aprender nuevas herramientas, resolver problemas y transformar ideas en soluciones útiles. Disfruto trabajar en equipo y asumir retos que me permitan seguir creciendo como desarrollador.",

    education: {
        title: "Ingeniería de Software",
        institution: "Universidad Nacional Mayor de San Marcos",
        period: "En curso"
    },

    social: {
        github: "https://github.com/marcovillegas2",
        linkedin: "https://www.linkedin.com/in/marco-antonio-villegas-niño-197609405/"
    },

    contact: {
        email: "marcoantoniovillegasnino@gmail.com",
        whatsapp: "+51902217904"
    },

    skills: [
        "Java", "Python", "C++", "PowerBi", "HTML", "CSS", "SQL", "Git", "GitHub", "Spring Boot", "Excel"
    ],


    projects: [
        {
            title: "Frontend - Tu Sonrisa",
            description: "Frontend de aplicación para uso médico (dentista).",
            technologies: ["Java", "MySQL", "Spring Boot"],
            githubUrl: "https://github.com/tu-usuario/proyecto-1",
            demoUrl: "https://front-tusonrisa.onrender.com"
        },
        {
            title: "API de Tienda",
            description: "Implementación de estructuras y algoritmos para organizar, consultar y procesar información de manera eficiente.",
            technologies: ["Laravel", "Java", "Composer"],
            githubUrl: "https://github.com/JJARE1611/tienda_api",
            demorul:""
        },
        {
            title: "OrderTrack",
            description: "Sistema web de gestión de pedidos y catálogo para emprendimientos gastronómicos.",
            technologies: ["FastAPI", "SQLite", "HTML", "CSS", "JavaScript", "Pytest", "SonarQube"],
            githubUrl: "https://github.com/tu-usuario/proyecto-3",
            demourl: ""
        }
    ]
};

function fillPersonalInformation() {
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    document.title = `${PORTFOLIO_CONFIG.name} | Portafolio`;
    setText("brand-name", PORTFOLIO_CONFIG.name);
    setText("hero-name", PORTFOLIO_CONFIG.name);
    setText("hero-role", PORTFOLIO_CONFIG.role);
    setText("hero-summary", PORTFOLIO_CONFIG.summary);
    setText("hero-location", PORTFOLIO_CONFIG.location);
    setText("profile-initials", PORTFOLIO_CONFIG.initials);
    setText("code-name", PORTFOLIO_CONFIG.name);
    setText("about-lead", PORTFOLIO_CONFIG.aboutLead);
    setText("about-description", PORTFOLIO_CONFIG.aboutDescription);
    setText("education-title", PORTFOLIO_CONFIG.education.title);
    setText("education-place", PORTFOLIO_CONFIG.education.institution);
    setText("education-period", PORTFOLIO_CONFIG.education.period);
    setText("footer-name", PORTFOLIO_CONFIG.name);
    setText("copyright-name", PORTFOLIO_CONFIG.name);
    setText("current-year", new Date().getFullYear());

    const cvButton = document.getElementById("cv-button");
    cvButton.href = PORTFOLIO_CONFIG.cvUrl;

    renderSocialLinks();
    renderContactMethods();
}

function renderSocialLinks() {
    const container = document.getElementById("social-links");
    const links = [
        { name: "GitHub", url: PORTFOLIO_CONFIG.social.github, symbol: "⌘" },
        { name: "LinkedIn", url: PORTFOLIO_CONFIG.social.linkedin, symbol: "in" }
    ];

    container.innerHTML = links
        .filter(link => link.url && !link.url.includes("tu-usuario") && !link.url.includes("tu-perfil"))
        .map(link => `<a class="social-link" href="${escapeAttribute(link.url)}" target="_blank" rel="noopener noreferrer"><span>${link.symbol}</span>${link.name} ↗</a>`)
        .join("");
}

function renderContactMethods() {
    const container = document.getElementById("contact-methods");
    const email = PORTFOLIO_CONFIG.contact.email;
    const whatsapp = PORTFOLIO_CONFIG.contact.whatsapp;
    const methods = [];

    if (email && !email.includes("ejemplo.com")) {
        methods.push(`<a class="contact-method" href="mailto:${escapeAttribute(email)}"><span class="method-icon">✉</span>${escapeHtml(email)}</a>`);
    }
    if (whatsapp && !whatsapp.includes("999999999")) {
        methods.push(`<a class="contact-method" href="https://wa.me/${escapeAttribute(whatsapp)}" target="_blank" rel="noopener noreferrer"><span class="method-icon">☏</span>Contactar por WhatsApp</a>`);
    }

    container.innerHTML = methods.join("");
}

function renderProjects() {
    const container = document.getElementById("projects-grid");

    container.innerHTML = PORTFOLIO_CONFIG.projects.map((project, index) => {
        const tags = project.technologies
            .map(technology => `<span class="project-tag">${escapeHtml(technology)}</span>`)
            .join("");

        const githubLink = project.githubUrl
            ? `<a class="project-link" href="${escapeAttribute(project.githubUrl)}" target="_blank" rel="noopener noreferrer">Ver repositorio en GitHub <span>↗</span></a>`
            : `<span class="project-link disabled">Agrega el enlace de GitHub</span>`;

        const demoLink = project.demoUrl
            ? `<a class="project-link" href="${escapeAttribute(project.demoUrl)}" target="_blank" rel="noopener noreferrer">Ver proyecto <span>↗</span></a>`
            : "";

        return `
            <article class="project-card">
                <div class="project-top"><div class="project-symbol">{ }</div><span class="project-number">0${index + 1} / ${String(PORTFOLIO_CONFIG.projects.length).padStart(2, "0")}</span></div>
                <h3>${escapeHtml(project.title)}</h3>
                <p>${escapeHtml(project.description)}</p>
                <div class="project-tags">${tags}</div>
                ${githubLink}${demoLink}
            </article>`;
    }).join("");
}

function renderSkills() {
    const container = document.getElementById("skills-list");
    container.innerHTML = PORTFOLIO_CONFIG.skills
        .map(skill => `<span class="skill-chip"><span>✳</span>${escapeHtml(skill)}</span>`)
        .join("");
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
}

function escapeAttribute(value) {
    return escapeHtml(value);
}

function configureContactForm() {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", event => {
        event.preventDefault();

        const recipient = PORTFOLIO_CONFIG.contact.email;
        if (!recipient || recipient.includes("ejemplo.com")) {
            feedback.textContent = "Primero configura tu correo en PORTFOLIO_CONFIG.contact.email.";
            return;
        }

        const name = document.getElementById("sender-name").value.trim();
        const senderEmail = document.getElementById("sender-email").value.trim();
        const message = document.getElementById("sender-message").value.trim();
        const subject = encodeURIComponent(`Mensaje desde tu portafolio - ${name}`);
        const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${senderEmail}\n\nMensaje:\n${message}`);

        feedback.textContent = "Se abrirá tu aplicación de correo para que puedas enviar el mensaje.";
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
}

function configureMobileMenu() {
    const button = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");

    button.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        });
    });
}

fillPersonalInformation();
renderProjects();
renderSkills();
configureContactForm();
configureMobileMenu();
