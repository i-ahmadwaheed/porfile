	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('fa-moon')){
            darkmode.classList.replace('fa-moon','fa-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('fa-sun','fa-moon');
            document.body.classList.remove('active');
        }
    }
    // Initialize ScrollReveal with options
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

// Apply reveal effect to elements
ScrollReveal().reveal('.home-text, .about-text, .heading, .projects-img', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container', { origin: 'bottom' });
ScrollReveal().reveal('.bars-box', { origin: 'left' });
ScrollReveal().reveal('.social a', { interval: 200 });


    