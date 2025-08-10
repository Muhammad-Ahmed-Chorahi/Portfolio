// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let found = false;
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navlinks 
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
            // active section for animation on scroll 
            sec.classList.add('show-animate');
            found = true;
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // If no section is found (e.g., scrolled above first section), set home as active
    if (!found) {
        let homeSection = document.getElementById('home');
        if (homeSection) homeSection.classList.add('show-animate');
        navLinks.forEach(link => link.classList.remove('active'));
        let homeLink = document.querySelector('header nav a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
    }

    //sticky header
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click on navlink
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll 
    const footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.scrollY + window.innerHeight >= document.body.offsetHeight - 100);
}

// Animated typing effect for roles in home section
const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Cybersecurity Enthusiast"
];
const roleElement = document.getElementById('animated-role');
let roleIndex = 0;
let charIndex = 0;
let typing = true;

function typeRole() {
    if (!roleElement) return;
    const currentRole = roles[roleIndex];
    if (typing) {
        if (charIndex < currentRole.length) {
            roleElement.textContent += currentRole.charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 80);
        } else {
            typing = false;
            setTimeout(typeRole, 1200);
        }
    } else {
        if (charIndex > 0) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, 40);
        } else {
            typing = true;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 400);
        }
    }
}
typeRole();

// Certificate Modal Popup Logic
document.addEventListener('DOMContentLoaded', function() {
    // Certification data
    const certData = {
        "cert-ethical-hacking": {
            title: "Introduction to Ethical Hacking Principles",
            meta: "<strong>Issued by:</strong> SkillUp EdTech on Coursera<br><strong>Date:</strong> July 21, 2025",
            desc: "Studied the core principles of ethical hacking, exploring the mindset and categories of hackers (white-hat, black-hat, grey-hat), global cybersecurity laws, and frameworks like GDPR. Learned to conduct basic vulnerability assessments, perform reconnaissance, and understand responsible disclosure. This course laid the groundwork for practical cybersecurity skills.",
            link: "https://coursera.org/verify/VF3ZN3W7MT0P"
        },
        "cert-leeds-online": {
            title: "Training and Learning Online",
            meta: "<strong>Issued by:</strong> University of Leeds on Coursera<br><strong>Date:</strong> July 21, 2025",
            desc: "Explored how to become an effective digital learner and collaborator. Gained strategies for time management, goal setting, and staying focused in remote learning environments. Strengthened digital literacy, research abilities, and communication skills for both academic and professional online platforms.",
            link: "https://coursera.org/verify/OOWME9VJ9CEP"
        },
        "cert-meta-frontend": {
            title: "Introduction to Front-End Development",
            meta: "<strong>Issued by:</strong> Meta on Coursera<br><strong>Date:</strong> September 11, 2023",
            desc: "Covered front-end fundamentals including HTML, CSS, responsive design principles, and layout techniques (Flexbox, Grid). Built modern UI designs using Bootstrap and gained a beginner-friendly introduction to JavaScript and React.js, setting a strong foundation for web development.",
            link: "https://coursera.org/verify/D3Z5T6QVN7KU"
        },
        "cert-ms-ai": {
            title: "Career Essentials in Generative AI",
            meta: "<strong>Issued by:</strong> Microsoft & LinkedIn<br><strong>Date:</strong> August 23, 2023",
            desc: "Completed a professional certificate designed by Microsoft and LinkedIn, consisting of six courses focused on Generative AI tools and applications. Topics included Microsoft Copilot, workflow automation, AI-enhanced productivity, responsible AI use, and ethical concerns in AI integration across workplaces. This program built job-ready skills to adapt in AI-driven environments.",
            link: "https://www.linkedin.com/learning/certificates/fc6d14d58f0cacd3e96b5f0ac8a573d7051114830ce7a363a2f5012580a5ba10"
        }
    };

    const certModal = document.getElementById('cert-modal');
    const certClose = document.querySelector('.cert-modal-close');
    const certModalTitle = document.getElementById('cert-modal-title');
    const certModalMeta = document.getElementById('cert-modal-meta');
    const certModalDesc = document.getElementById('cert-modal-desc');
    const certModalLink = document.getElementById('cert-modal-link');

    // Attach event listeners to all cert cards
    document.querySelectorAll('.cert-popup-trigger').forEach(card => {
        card.addEventListener('click', function() {
            const certId = card.id;
            const data = certData[certId];
            if (data) {
                certModalTitle.textContent = data.title;
                certModalMeta.innerHTML = data.meta;
                certModalDesc.textContent = data.desc;
                certModalLink.href = data.link;
                certModalLink.style.display = data.link ? '' : 'none';
                certModal.classList.add('show');
            }
        });
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
                e.preventDefault();
            }
        });
    });

    if (certModal && certClose) {
        certClose.addEventListener('click', function() {
            certModal.classList.remove('show');
        });
        certModal.addEventListener('click', function(e) {
            if (e.target === certModal) certModal.classList.remove('show');
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') certModal.classList.remove('show');
        });
    }
});

// Initialize EmailJS
(function () {
  emailjs.init("NQ-0ykKP-9wWFe5fc"); // Your Public Key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Set the hidden time field to the current date/time
      const timeInput = document.getElementById("form-time");
      if (timeInput) {
        timeInput.value = new Date().toLocaleString();
      }

      emailjs.sendForm("service_wcpga85", "template_ogyfvpw", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        }, function (error) {
          console.error("❌ FAILED...", error);
          alert("Something went wrong. Please try again.");
        });
    });
  }
});

