/***************************** icon navbar ********************/
let menuICon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const readMore = document.querySelector('.read-more')
const ocultTxt = document.querySelector('.ocult-text')

menuICon.onclick = () => {
    menuICon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100)

    /***************************** remove icon navbar ********************/
    menuICon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/***************************** scroll reveal ********************/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .skill-title, .portfolio-box-mobile', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .language-left', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .language-rigth', { origin: 'rigth' });

/***************************** type js ********************/

//
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Videogames Creator', 'Mobile App Creator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})




readMore.addEventListener('click', () =>  {
    ocultTxt.classList.toggle('show-text'); // Alterna la visibilidad del texto
    if (ocultTxt.classList.contains('show-text')) {
        readMore.textContent = 'Read less'; // Si el texto está visible
    } else {
        readMore.textContent = 'Read more'; // Si el texto está oculto
    }
});

