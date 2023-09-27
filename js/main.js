// mobile nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = 'left-[-300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';



closeBtn.addEventListener('click', () => {

    const isClosed = mobileNav.classList.contains(navClosedClass);


    mobileNav.classList.toggle(navOpenedClass, isClosed);
    mobileNav.classList.toggle("animate__fadeInLeft", isClosed)
  
    
    mobileNav.classList.toggle(navClosedClass, !isClosed);
    mobileNav.classList.toggle("animate__fadeInRight", !isClosed)
    
    
    closeBtnIcn.classList.toggle(arrowLeftClass, isClosed);
    closeBtnIcn.classList.toggle(arrowRightClass, !isClosed);
    
    
})

// swiper
const swiper = new Swiper('.swiper', {
   
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

});

// faq

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    const faqBtn = item.querySelector('.faq__btn');

    item.addEventListener('click', () => {                              // Cuando hacemos click en faq__btn
        const isOpen = item.classList.toggle('open');                   // faq__btn se le añade la clase 'open' -> h-full
        const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';  // si se añadio 'open' el iconClass = menos : más
        const iconElement = faqBtn.querySelector('i');                  // Buscamos el <i></i>
        iconElement.classList = `${iconClass} text-2xl`;                // Cambiamos el icono según el valor de isOpen
    });
});

// scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance:'60px',
    duration: 3000,
    delay: 600,
});

// hero
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img');

//stats
sr.reveal('.stats__item',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'top'
});

//services
sr.reveal('.services');
sr.reveal('.services__top')
sr.reveal('.services__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//appointment
sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

//team
sr.reveal('.team__title');
sr.reveal('.team__slider');

//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item',{
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//departments
sr.reveal('.departments__bg');
sr.reveal('.departments__container');

//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//brands
sr.reveal('.brands__logo', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

//footer
sr.reveal('.footer__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});



