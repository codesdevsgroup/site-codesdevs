$(document).ready(function(){
  $(".owl-carousel.portfolio").owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    navText: [`
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.3737 43L2.5 22.2211L26.3737 1" stroke="white" stroke-width="2"/>
      </svg>
    `, `
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.62632 1L25.5 21.7789L1.62632 43" stroke="white" stroke-width="2"/>
      </svg>

    `],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      567: {
        items: 2
      },
      1024: {
        items: 3
      },
      1270: {
        items: 4
      }
    },
    autoplayHoverPause: true
  });

  $(".owl-carousel.feedback").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [`
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.3737 43L2.5 22.2211L26.3737 1" stroke="white" stroke-width="2"/>
      </svg>
    `, `
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.62632 1L25.5 21.7789L1.62632 43" stroke="white" stroke-width="2"/>
      </svg>

    `],
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  $(".owl-carousel.group").owlCarousel({
    items: 3,
    loop: true,
    nav: true,
    navText: [`
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.3737 43L2.5 22.2211L26.3737 1" stroke="white" stroke-width="2"/>
      </svg>
    `, `
      <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.62632 1L25.5 21.7789L1.62632 43" stroke="white" stroke-width="2"/>
      </svg>

    `],
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      567: {
        items: 1
      },
      1024: {
        items: 2
      },
      1270: {
        items: 3
      }
    },
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  $(".owl-nav").addClass("contaner")
});