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

