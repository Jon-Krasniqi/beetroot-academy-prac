(function ($, window, document) {
  "use strict";
  $(function () {
    //##Variables
    var $body = $("body"),
      $window = $(window),
      $doc = $(document),
      defaultEasing = [0.4, 0.0, 0.2, 1];
    //End Variables

    var toggle = document.getElementById("hamburger"),
      headerNav = document.querySelector(".header__nav");

    toggle.addEventListener("click", function () {
      headerNav.classList.toggle("active");
    });

    console.log(
      "%c Developed by: beetroot Digital Agency http://beetroot.net",
      "padding:9px 5px; background:#3c4952; line-height:25px;color: #59bf9d"
    );
  });
})(window.jQuery, window, document);
