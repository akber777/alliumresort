$(document).ready(function () {
  $(window).on("scroll", function () {
    let top = $(this).scrollTop();

    if (top > 300) {
      $(".home").addClass("importantRelative");
      $("header").addClass("inlineHeader");
      $("header").addClass("fixedTop");
    } else {
      $(".home").removeClass("importantRelative");
      $("header").removeClass("fixedTop");

      if (window.location.pathname === "/") {
        $("header").removeClass("inlineHeader");
      }
    }
  });
});
