$(document).ready(function () {
  $(".welcomeSlider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    arrows: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".resortAboutSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    arrows: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".diningSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    arrows: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".diningPageSlider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    arrows: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".welnessSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    arrows: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
