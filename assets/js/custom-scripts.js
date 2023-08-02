$(window).on("load", function () {
  $(".section-loader").fadeOut("slow");

  $("#mh-header").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });

  $(document).ready(function () {
    $(".ui-loader").addClass("d-none");
    const overlay = $(".overlay"),
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

    // $("body").on("swipeleft", function () {
    //   if (navbarSupportedContent.hasClass("active")) {
    //     overlay.removeClass("active");
    //     toggleSwitch.removeClass("open");
    //     navbarSupportedContent.removeClass("active");
    //     $(".navbar-toggler").removeClass("active");
    //   }
    // });
    // $("body").on("swiperight", function () {
    //   if (navbarSupportedContent.hasClass("active")) return;
    //   overlay.addClass("active");
    //   toggleSwitch.removeClass("open");
    //   navbarSupportedContent.addClass("active");
    //   $(".navbar-toggler").addClass("active");
    // });

    // $("body").swipeleft(function () {
    //   if (navbarSupportedContent.hasClass("active")) {
    //     overlay.removeClass("active");
    //     toggleSwitch.removeClass("open");
    //     navbarSupportedContent.removeClass("active");
    //     $(".navbar-toggler").removeClass("active");
    //   }
    // });
    // $("body").swiperight(function () {
    //   if (navbarSupportedContent.hasClass("active")) return;
    //   overlay.addClass("active");
    //   toggleSwitch.removeClass("open");
    //   navbarSupportedContent.addClass("active");
    //   $(".navbar-toggler").addClass("active");
    // });
  });
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
$(document).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".nav-scroll").addClass("nav-strict");
  } else {
    $(".nav-scroll").removeClass("nav-strict");
  }
});
