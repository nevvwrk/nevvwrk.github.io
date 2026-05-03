const experiences = [
    {
        date: "2024 - Present",
        role: "Nextjs Developer",
        company: "Freelance | Remote",
        desc: "Built responsive UI, reusable components, and database intergration for dynamic web application development using Nextjs and Tailwildcss, jwt authentication."
    },
    {
        date: "2022 - 2024",
        role: "Web Designer",
        company: "Fastwork | Freelance",
        desc: "Designed modern landing pages and converted designs into responsive websites."
    },
    {
        date: "2022 - 2023",
        role: "Graphic Designer (สำหรับงานโฆษณาบนโซเชียลมีเดีย)",
        company: "Fastwork | Fiverr",
        desc: "Create branding for advertising, social media, and print materials, including logos, brochures, and posters. Collaborate with clients to understand their design needs and deliver high-quality & editing image for marketing, social media, and websites."
    }
];

const timeline = document.getElementById("timeline");

timeline.innerHTML = experiences.map((item, i) => `
      <article class="item">
        <div class="date">${item.date}</div>
        <h3 class="role">${item.role}</h3>
        <div class="company">${item.company}</div>
        <p class="desc">${item.desc}</p>
      </article>
    `).join("");


//experience data
const projects = [
    {
        title: "Natural Disaster Report website - เว็บไซต์รายงานภัยพิบัติ",
        desc: "A web application for reporting natural disasters, allowing users to submit reports with location and details even the slightest signal in the loose signal area, and view a map of reported incidents.",
        image: "https://i.ibb.co/9HR2490S/disaster-report-thump.png",
        tech: [ "Next.js", "Prisma", "Tailwindcss", "JWT","Typescript", "PostgreSQL", "Leaflet.js"],
        demo: "https://automatically-clarke-row-microphone.trycloudflare.com/th",
        code: "https://github.com/nevvwrk/disaster-report"
    },
    {
        title: "School website - โรงเรียนเทศบาลแมวจร",
        desc: "A personal portfolio website to showcase my projects, skills, and contact information in a clean layout.",
        image: "https://i.ibb.co/SDFsjDFV/web-school1.png",
        tech: ["Next.js", "Tailwindcss", "Nodejs", "Typescript"],
        demo: "https://nevvwrkschool.vercel.app/",
        code: "https://github.com/nevvwrk/school_website_next"
    },
    {
        title: "Java Desktop program - Vaccine booking",
        desc: "Java desktop program for booking vaccine on demand in 2019 covid need moderna | GUI and out-dated",
        image: "https://i.ibb.co/v4RBms3Q/cb486e79-df84-4cbf-8611-e9cffa85d803.png",
        tech: ["Java","Desktop"],
        demo: "#",
        code: "https://github.com/nevvwrk/Vaccine-booking-GUI/tree/main"
    }
];
const projectList = document.getElementById("projectList");
projectList.innerHTML = projects.map(project => `
      <article class="project-card">
        <img class="project-thumb" src="${project.image}" alt="${project.title}">
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.desc}</p>

          <div class="project-tech">
            ${project.tech.map(item => `<span>${item}</span>`).join("")}
          </div>

          <div class="project-links">
            <a href="${project.demo}" target="_blank">Live Preview</a>
            <a href="${project.code}" target="_blank" class="secondary">View Code</a>
          </div>
        </div>
      </article>
    `).join("");

const cards = document.querySelectorAll(".project-card");
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 120}ms`;
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

// tech stack data
const techStack = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwindcss", "Typescript"]
  },
  {
    category: "Backend",
    items: ["Next.js", "Java", "Prisma", "PostgreSQL", "MYSQL", "Express.js","Restful API"]
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "AI tools", "vscode", "Figma", "ssh",]
  },
  {
    category: "Other",
    items: ["Arduino","Raspberry Pi", "Adobe photoshop","Adobe PremiemPro", "Canva", "Microsoft office", "davinci resolve", "etc."]
  }
];

// tech stack rendering
const container = document.getElementById("techList");

container.innerHTML = techStack.map(group => `
  <div class="tech-group">
    <h3>${group.category}</h3>
    <div class="tech-items">
      ${group.items.map(item => `
        <span class="tech-item">${item}</span>
      `).join("")}
    </div>
  </div>
`).join("");
