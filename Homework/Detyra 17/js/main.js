$(document).ready(function () {
  $("#categories-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    navText: [
      "<img src='./img/prev-icon.svg'>",
      "<img src='./img/next-icon.svg'>",
    ],
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 5,
      },
      1000: {
        items: 8,
      },
    },
  });
});
