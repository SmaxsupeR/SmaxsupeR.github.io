const showMenu = function(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    
    if(toggle && menu){
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        })
    }
}
showMenu('toggle', 'header-menu'); 
const swiper =  new Swiper('.swiper-container', {
  effect:"cube",
  grabCursor: true,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
})
const scrollAnimation = ScrollReveal({
  origin: 'bottom',
  distance: '100px',
  duration: 2000,
  reset: false,
})
scrollAnimation.reveal('.discount_card_item, .footer_item, .footer_social',{
  interval: 200,
  rotate: {
    x: 0,
    y: 90,
    z: 0,
  },
  scale: .5,
})
scrollAnimation.reveal('.footer_wrapper', {
  origin: 'left',
  duration:1000,
  distance: '600px',
})
scrollAnimation.reveal('.discount_container', {
  origin: 'left',
  duration:1000,
  distance: '600px',
})
scrollAnimation.reveal('.discount_title', {
  origin: 'bottom',
  delay: 1000,
})
scrollAnimation.reveal('.discount_subtitle',{
  origin: 'left',
  delay: 1000,
})