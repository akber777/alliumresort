$(document).ready(function () {
  $(window).on("scroll", function () {
    let top = $(this).scrollTop();

    if (top > 300) {
      $(".home").addClass("importantRelative");
      $("header").addClass("inlineHeaderHome");
      $("header").addClass("fixedTop");
      $('header').addClass('inlineHeaderHomeForFixed')
    } else {
      $(".home").removeClass("importantRelative");
      $("header").removeClass("fixedTop");
      $('header').removeClass('inlineHeaderHomeForFixed')
      $("header").removeClass("inlineHeaderHome");
    }
  });
});
