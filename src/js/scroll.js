$(document).ready(function () {
  $(window).on("scroll", function () {
    let top = $(this).scrollTop();

    if (top > 300) {
      $(".noHeight").addClass("fixedActive");
      $('.webHeader .header__toolsBox').hide()
    } else {
      $(".noHeight").removeClass("fixedActive");
      $('.webHeader .header__toolsBox').show()
    }
  });
});
