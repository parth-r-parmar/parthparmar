(function ($) {
  "use strict";

  $.fn.andSelf = function () {
    return this.addBack.apply(this, arguments);
  };

  /* =================================
===  EXPAND COLLAPSE            ====
=================================== */
  $(document).ready(function () {
    $("#toggle-switcher").click(function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $("#navbarSupportedContent").animate({ left: "-100%" });
      } else {
        $(this).addClass("open");
        $("#navbarSupportedContent").animate({ left: "0" });
      }
    });
  });

  /* Loader Code Start */
  $(window).on("load", function () {
    $(".section-loader").fadeOut("slow");
  });
  /* Loader Code End */

  /*
    |====================
    | Mobile NAv trigger
    |=====================
    */

  var overlay = $(".overlay"),
    navbarSupportedContent = $("#navbarSupportedContent"),
    toggleSwitch = $("#toggle-switcher");

  $("#toggle-switcher, .overlay").on("click", function () {
    if (navbarSupportedContent.hasClass("active")) {
      overlay.removeClass("active");
      toggleSwitch.removeClass("open");
      navbarSupportedContent.removeClass("active");
      $(".navbar-toggler").removeClass("active");
    } else {
      overlay.addClass("active");
      toggleSwitch.removeClass("open");
      navbarSupportedContent.addClass("active");
      $(".navbar-toggler").addClass("active");
    }
  });

  /*
    |=================
    | Onepage Nav
    |================
    */

  $("#mh-header").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });

  /*
    |===============
    | WOW ANIMATION
    |==================
    */
  var wow = new WOW({
    mobile: false, // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*
    |=================
    | AOS
    |================
    */

  //AOS.init();

  /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  });
})(jQuery);
