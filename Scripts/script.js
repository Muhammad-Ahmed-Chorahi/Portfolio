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